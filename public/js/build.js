({
	    baseUrl: ".",
			paths: {
	        jquery: 'lib/jquery/jquery',
        bootstrap: '..//stylesheets/bootstrap/js/bootstrap',
        angular: 'lib/angular/angular',
        angularResource: 'lib/angular/angular-resource'
	    
		},
		shim: {
        'angular' : {'exports' : 'angular'},
        'angularResource' : {deps:['angular']},
        'bootstrap': {deps:['jquery']}
    },
    name: "main",
		out: "main-built.js"

})
