/**
 * Created by luor on 2016/9/23.
 */
var angular = require('angular');
var ngRoute = require('angular-route');
/**
 * sub module
 */
var myApp_home = require('./home/app');
var myApp_setting = require('./setting/app');
/**
 * directives
 */
//var myEchart = require('./directive/myecharts');
/**
 *
 * @type {angular.Module}
 */
module.exports = angular.module('myApp', [
    ngRoute,
    myApp_home,
    myApp_setting
]).config(['$locationProvider','$routeProvider',function($locationProvider, $routeProvider) {
    $routeProvider.otherwise({redirectTo: '/login'});
}]).controller('menus',['$scope','$http',function($scope,$http){
    $http.get("mock/menu.json").success(function(data){
        $scope.menus = data;
        //初始选中菜单项默认为第一项、子菜单项默认为第一项
        $scope.menuIndex = 0;
        $scope.submenuIndex = 0;
        $scope.submenus = data[0].children||[];
        //切换一级菜单，更新当前选中，项更新子菜单内容
        $scope.toggleMenu = function(index){
            $scope.menuIndex = index;
            $scope.submenus = data[index].children||[];
        }
        //切换二级菜单，更新当前选中项
        $scope.toggleSubMenu = function(index){
            $scope.submenuIndex = index;
        }
    });
}]).name;