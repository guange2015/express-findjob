var crawler = require('crawler').Crawler;

var c =  new crawler({
	"maxConnections": 10,
	"forceUTF8": true,
	"callback": function(err,result,$) {
		$('.comment_content').each(function(){
        console.log('good: '+$(this).children('dl').children('.good').next().text());
        console.log('bad: '+$(this).children('dl').children('.bad').next().text());
    });
	}
});

c.queue("http://detail.zol.com.cn/332/331058/review.shtml");


// var http = require('http');
// var url = "http://cs.1010jz.com/qiuzhi/";
// http.get(url , function(res){
//         var stack = '';
//         res.setEncoding('binary');

//         res.on('data' , function(d){
//             stack += d;
//         }).on('error',function(err){
//         console.log(err.message);
// 		});

//     res.on('end' , function(){
//         var buf = new Buffer(stack ,'binary');
//         var data = iconv.decode(buf , 'gbk');
//         console.log(data.toString());
//     }).on('error',function(err){
//         console.log(err.message);
//     })
// }).on('error', function(err){
//     console.log(err.message);
// });