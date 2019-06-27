app.controller('ctrl',($scope,$location,fac,$window)=>{
   
   $scope.login=()=>{
       var select=$scope.select;
       var user= $scope.user;
       var pass = $scope.pass;
       $scope.data={
       'user':select,
       'username':user,
       'password':pass
       }
     
       $scope.arr=[];
       let promise= fac.fetch($scope.data);
       promise.then(data=>{
           
        console.log('data is ',data);

                   if(data.data.doc){
              
            
           
               if(data.data.doc.flag){
                console.log('data is ',data.data.doc.flag);
            $window.location.href = '/client/views/change.html';
                
                
               }
               else{ 
                        
                   if(data.data.doc.user== 'admin'){
                
                console.log("admin here");
               
                  localStorage.setItem('rights', JSON.stringify(data.data.meta.adminRight));
               $window.location.href = '/client/lumino/index.html';
               
               
               
               }
               if(data.data.doc.user=='developer'){
                 
                
                localStorage.setItem('rights', JSON.stringify(data.data.meta.developerRight));
                $window.location.href = '/client/lumino/index.html';
               
            }
            if(data.data.doc.user=='tester'){
                 console.log("i am here");
                
                 localStorage.setItem('rights', JSON.stringify(data.data.meta.testerRight));
                 $window.location.href = '/client/lumino/index.html';
            }
            }
                           
               
           }
           
       },err=>{
           console.log("error is",err);
       })
   }

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
             if(data.data.doc){
                $window.location.href = '/client/Login/index.html';
             }
         },err=>{
             console.log("error is",err);
         })
   }
   
})