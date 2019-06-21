const app = angular.module('app',['ngRoute']);
app.run(['fac', function(fac) {
   fac.check();
}]);