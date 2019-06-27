app.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    
    $routeProvider.when('/add',{

       templateUrl:"../admin views/upload.html"
        
   
    }).when('/newIssue',{

        templateUrl:"../tester views/create.html"
         
    
     })
})