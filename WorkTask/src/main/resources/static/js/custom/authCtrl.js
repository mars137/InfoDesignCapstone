app.controller('authCtrl',function($scope,$http,$location){
	console.log("Authentication function");
	
		//$location.path('dashboard');
	$scope.signup = {email:'',password:'',name:'',l_name:''};
    $scope.signUp = function (customer) {
    	$scope.PortfolioVisible=false;
    	 dataObj=JSON.stringify(customer);
     //    dataObj=JSON.parse(customer);
   		var res = $http.post('http://localhost:8080/LoginInsert', dataObj);
   		res.success(function(data, status, headers, config) {
   			$scope.message = data;
   		//	swal("It seems you forgot your login credentials!", "Try Again!", "error")
   			swal({
   			  title: "Welcome!",
   			  text: "Get your work done!!!!.",
   			//  timer:20000,
   			  imageUrl: "images/homepage/Minion.gif"
   			});
   			
   			//$location.path('dashboard');
   			
   		});
   		res.error(function(data, status, headers, config) {
   			alert( "failure message: " + JSON.stringify({data: data}));
   		});	
    };
	
	
	
})