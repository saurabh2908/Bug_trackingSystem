app.controller('ctrl',($scope,$location,fac)=>{
   
   $scope.login=()=>{  // this is for login
       var select=$scope.select;
       var user= $scope.user;
       var pass = $scope.pass;
       $scope.data={
       'user':select,
       'username':user,
       'password':pass
       }
     
       
       let promise= fac.fetch($scope.data);
       promise.then(data=>{ // promise to fetch data from factory
        console.log('data is ',data);
           if(data.data.doc){
               
               if(data.data.doc.flag){
                console.log('data is ',data.data.doc.flag);
                $location.path('/change');
               }
               else{ 
                   if(data.data.doc.user=='admin'){
                 
                   $location.path('/admin');
                  
               }
               if(data.data.doc.user=='developer'){
                 
                $location.path('/developer');
               
            }
            if(data.data.doc.user=='tester'){
                 
                $location.path('/tester');
               
            }
            }
                           
               
           }
           
       },err=>{
           console.log("error is",err);
       })
   }
//<-------------------------------------------change password------------------------------------------------------>
   $scope.change=()=>{
       console.log("i am here");
         $scope.data = {
             'username':$scope.olduser,
             'password':$scope.oldpassword,
             'newuser': $scope.newuser,
             'newpass' : $scope.newpassword,
             'email':$scope.email
         }
        
       console.log(  $scope.olduser);
         let promise= fac.changefetch($scope.data);
         promise.then(data=>{
             console.log("i am in controller");
             console.log('data is ',data);
         },err=>{
             console.log("error is",err);
         })
   }
   
})
