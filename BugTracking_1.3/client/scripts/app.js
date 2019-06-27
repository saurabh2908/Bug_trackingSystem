const app = angular.module('app',['ngRoute','ngFileUpload']);
app.run(['fac', function(fac) {
   fac.check();
}]);