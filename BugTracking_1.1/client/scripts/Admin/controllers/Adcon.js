app.controller("Dashctrl",function($scope){
    var object = localStorage.getItem('rights');
    $scope.arr = JSON.parse(object);    
})