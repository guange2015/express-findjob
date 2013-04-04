/**
 * Created with JetBrains WebStorm.
 * User: xiao
 * Date: 13-4-5
 * Time: 上午1:37
 * To change this template use File | Settings | File Templates.
 */

seajs.config({
    plugins:['shim'],
    alias: {
        // 配置 jquery 的 shim 配置，这样我们就可以通过 require('jquery') 来获取 jQuery
        'jquery': {
            src: '/js/lib/jquery/jquery.js',
            exports: 'jQuery'
        },
        'angular': {
            src: '/js/lib/angular/angular.js',
            exports: 'angular'
        },
        'angular-resource': {
            src: '/js/lib/angular/angular-resource.js',
            exports: 'angular-resource'
        },
        'bootstrapjs':{
            src: '/stylesheets/bootstrap/js/bootstrap.min.js',
            export: 'bootstrapjs'
        }
    }
})