(function(){
    'use strict';
    //------WebFormController-------------------------
    var WebFormController = function($scope,$filter,WebFormFactory){
          $scope.isSubmitted=false;
          $scope.locations=[{label:"Michigan",value:"MI"},
                            {label:"Ohio",value:"OH"},
                            {label:"California",value:"CA"},
                            {label:"NewYork",value:"NY"}
                           ];    

          $scope.phoneNumberRegex = (function() {
                var regexp = /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;
                return {
                    test: function(value) {
                        if( $scope.requireTel === false ) {
                            console.log("true")
                            return true;
                        }
                        return regexp.test(value);
                    }
                };
            })();
        
          //----Send new user to remote server----
         $scope.postUser= function(newUser){
             //convert user birthday
             console.log("date: ", newUser.birthday.getDate())
//             newUser.birthday =$filter('date')(new Date(newUser.birthday), "yyyy-MM-dd").toString();
             $scope.isSubmitted=true; //disabled the submit button
             
            var promise= WebFormFactory.postNewUser(newUser);
             
             promise.success(function(data,status,headers,config){
                console.log("successfully: ",data);
                $scope.user={}; //reset user
             });
             
             promise.error(function(data,status,headers,config){
                console.log("error:",status);
                  $scope.isSubmitted=false; //enabled the submit button again
             })
             
         }
    };
    
    //--------------WebFormFactory Service--------------
    var WebFormFactory = function($http){
        var webService={};
        
        webService.postNewUser = function(newUser){
//            return $http.post("http://localhost:3000/saveNewUser",newUser);
            return $http({
                            method: 'POST',
                            url: "http://localhost:3000/saveNewUser",
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                            transformRequest: function(obj) {
                                var str = [];
                                for(var p in obj)
                                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                                return str.join("&");
                            },
                            data: newUser
                        })
        };
             
        return webService;
    }
    
    
    
    WebFormController.$inject=["$scope","$filter","WebFormFactory"];
    
    WebFormFactory.$inject=["$http"];
    
    var webform = angular.module("webform",[])
    .controller("WebFormController",WebFormController)
    .factory("WebFormFactory",WebFormFactory)
}());