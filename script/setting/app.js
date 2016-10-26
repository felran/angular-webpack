/**
 * Created by luor on 2016/9/23.
 */
'use strict';
var ngRoute = require('angular-route');
module.exports = angular.module('myApp.setting', [ngRoute])
.config(['$routeProvider',function($routeProvider) {
    $routeProvider.when('/setting',{
        templateUrl: 'views/setting/log.html',
        controller: 'logCtrl'
    }).when('/log', {
        templateUrl: 'views/setting/log.html',
        controller: 'logCtrl'
    }).when('/user',{
        templateUrl: 'views/setting/user.html',
        controller: 'userCtrl'
    });
}])
.controller('logCtrl', [function() {

}]).controller('userCtrl', [function() {

}]).name;