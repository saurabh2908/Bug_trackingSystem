app.factory('fac',($http,$q,FETCH,CHANGE,CHECK)=>{
    return{
        fetch(data){
            console.log("factory called")
            let defer =$q.defer();
            console.log("factory",data);
            $http.post(FETCH,JSON.stringify(data)).then((data)=>{
                defer.resolve(data);

            },(error)=>{
                defer.reject(error);
            });
            console.log("return promise");
            return defer.promise;
        },

        changefetch(data){
            console.log("factory called")
            let defer =$q.defer();
            console.log("factory",data);
            $http.post(CHANGE,JSON.stringify(data)).then((data)=>{
                defer.resolve(data);

            },(error)=>{
                defer.reject(error);
            });
            console.log("return promise");
            return defer.promise;
        },
        check(){
            console.log("Inside Fetch Product factory");
            let defer = $q.defer();
            console.log("Calling Ajax in Factory");
            $http.get(CHECK).then((data)=>{
                console.log("Rec Output in  Fetch Product factory ",data);
                defer.resolve(data);
            },(error)=>{
                defer.reject(error);
            });
            console.log("Return Promise");
            return defer.promise;
        }
    


    }
})