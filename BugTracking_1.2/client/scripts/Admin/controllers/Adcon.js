app.controller("Dashctrl",function($scope){
    var object = localStorage.getItem('rights');
    $scope.arr = JSON.parse(object);  
    
    $scope.msg = '';
    $scope.submit = function(fileObject) {
    console.log('File is ',fileObject);
    $scope.upload($scope.file); 
};



  

  $scope.upload = function (file) {
    
    Upload.upload({
        url: 'http://localhost:1234/upload',  // Server Side URL to Upload
        data: {file: file}
    }).then(function (resp) {
        $scope.msg = resp.data.msg;
        console.log('Success ',resp);
        //console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
    }, function (resp) {
        console.log('Error status: ' + resp);
    }, function (evt) {
        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        console.log('progress: ' + progressPercentage + '% ' );
        $scope.percentage = progressPercentage;
    });
};
})
