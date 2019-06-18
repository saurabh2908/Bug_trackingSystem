app.factory('fac',($http,$q,FETCH,CHANGE)=>{
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
       



    }
})