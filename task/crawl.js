var crawler = require('crawler').Crawler;
var fs = require('fs');
var mongojs = require('mongojs');
var db = mongojs('localhost/findjob', ['jobcolls']);


function is_empty(obj) {
	for(var i in obj)
	{
		return false;
	}
	return true;
}

var c =  new crawler({
	"maxConnections": 10,
	"forceUTF8": true,
	"callback": function(err,result,$) {
		$(".jobtitle >a.Linklist").each(function(index,a) {
			c.queue(a.href);
		});		

		var job = {};
		$(".jobct>.d_left>h2").each(function(index,a) {
			job.title = $(a).text();
		});
		//时间
		$(".jobct>.d_left>span:first").each(function(index,a) {
			job.time = $(a).text();
		});
		//地址
		$(".jobct>.d_left>span:eq(1)").each(function(index,a) {
			job.address = $(a).text();
		});
		//内容
		$(".jobct>.d_left>.d_content:first").each(function(index,a) {
			job.content = $(a).text();
		});
		if (!is_empty(job)) {			
			db.jobcolls.save(job,function(err,data){
		     console.log(data._id);
			});
		}
	}
});

c.queue("http://cs.1010jz.com/qiuzhi/");
