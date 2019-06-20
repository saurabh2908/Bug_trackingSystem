const app = angular.module('app',[]);
app.run(['fac', function(fac) {
   fac.check();
}]);