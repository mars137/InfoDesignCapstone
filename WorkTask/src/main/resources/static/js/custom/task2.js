


app.controller('TabController', ['$scope','$rootScope',function($scope,$rootScope){
	$rootScope.portfolio=true;
	$rootScope.about=true;
	$rootScope.contact=true;
	$rootScope.errandify=true;
	$rootScope.view=true;
  	$rootScope.header=true;
console.log("inside functionlityu");
    this.setTab = function(newValue){
      this.tab = newValue;
      if(newValue==2)
      {
            $scope.$emit('CallParentMethod',{});
}



 if(newValue==3)
      {    
            $scope.$emit('CallAnotherParentMethod',{});
}



};
    this.isSet = function(tabName){
      return this.tab === tabName;
    };
 

  }]);
  
  app.controller("retriveCtrl",['$rootScope','$scope','$http','$window','$filter',function($rootScope,$scope,$http,$filter,$window){
	
 //$scope.names = ["InComplete", "Complete"];
 //lastVal = $cookieStore.get('lastValue');
	  var Val="";
	  
 // getting  call from tab controller..............
 $rootScope.$on("CallParentMethod", function(){
	 //var Val= $window.sessionStorage.getItem("uid");
           $scope.refreshData();
        });

$scope.names= {
    "type": "select", 
    "name": "Service",
    "value": "Pending", 
    "values": [ "Pending", "Complete","Incomplete"] 
  };
  



$scope.check=function(user)
{
  var d = new Date();
   var curr_date = d.getDate();
   var curr_month = d.getMonth() + 1; //Months are zero based
   if(curr_month<10)
	   curr_month="0"+curr_month;
    var curr_year = d.getFullYear();
    var comdate=curr_year+"-"+curr_month+"-"+curr_date;
 if (user=== comdate)
 return true;
 else return false;
}

 $scope.refreshData=function(){
	 Val=  $rootScope.uid;
  var parameters = {
		  
		 // id:1
               id: Val
              //  startDate=,
               // endDate=
            };
  var config = {
                params: parameters
            };
   $http.get('http://localhost:8080/editemp/', config)
            .success(function (data, status, headers, config) {
                $scope.Details = data;
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
     

}
//alert(lastVal);



$scope.retriveTask=function(){

var date1 = $scope.myDate1;
var date2=$scope.myDate2;


};
 var config = {
                headers : {
                    'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
                    
                }
            }
$scope.updatetask=function(user){
 // $scope.user={};
 var p =JSON.stringify(user);
 p=JSON.parse(p);
app.config(function ($httpProvider) {
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
});
alert(user.status);
var doo = new Date(user.due_date);
//user.due_date=new Date(doo.getTime()+doo.getTimezoneOffset()*60000);

 $http.post('http://localhost:8080/editstatus/', p)
            .success(function (data, status, headers, config) {
             //  $scope.succcessMessage = data;
                  alert( "success message: " + JSON.stringify({data: data}));
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
}



  }]);
  
  
  
  
  
  app.directive('jqdatepicker', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
         link: function (scope, element, attrs, ngModelCtrl) {
            element.datepicker({
                dateFormat: 'dd/mm/yy',
                onSelect: function (date) {
                    scope.date = date;
                    scope.$apply();
              ngModelCtrl.$setViewValue(date);
                }
            });
        }
    };
});
  
  







  app.controller("assign", ['$rootScope','$scope','$http','$window',function($rootScope,$scope,$http,$window,$mdDateLocale) {
    var lastVal="";
    var p;
	 lastVal= $window.sessionStorage.getItem("uid");
	 $rootScope.uid= $window.sessionStorage.getItem("uid");
    //  lastVal = $cookieStore.get('lastValue');
alert("uid"+ lastVal);


	//  var a =$scope.uid;
$scope.counter = 0;
 $scope.names = ["Daily", "Weekly", "Monthly"];
  $scope.multiple = [1,2,3,4];
  $scope.user = [{ }];
   

 //$scope.getNames=function(){
  var parameters = {
                id: lastVal
              //  startDate=,
               // endDate=
            };
  var config = {
                params: parameters
            };
   $http.get('http://localhost:8080/getNames/', config)
            .success(function (data, status, headers, config) {
                $scope.user = data;
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
     

//}

        $scope.remove = function(){
            var newDataList=[];
            $scope.selectedAll = false;
            angular.forEach($scope.personalDetails1, function(selected){
                if(!selected.selected){
                    newDataList.push(selected);
                }
            }); 
            $scope.personalDetails1 = newDataList;
        };
  
        
        


 $rootScope.$on("CallAnotherParentMethod", function(){
   $scope.counter=0;
 //  $scope.getNames();
  $scope.personalDetail1=[{     'assignename' : '',
		
		'module' :'',
    
		'startdate':'',
     'enddate':'',
		 'frequency':'',
		  /*'users':[{
"id": 1,
"name": "Varun",
}, {
"id": 3,
"name": "Vat",
}, {
"id": 5,
"name": "Vasu"
}],*/

		 'users':$scope.user,
		 
"multiple":""
	}];
       
  
        });


    	$scope.addstatus = function(){		
	//	$scope.personalDetails.push({ 'fname':$scope.fname, 'module': $scope.module, 'moduleid':$scope.moduleid,'description':$scope.description });
		// Writing it to the server
		//	
var dataObj = [{
				assignename:'',
			
            taskName:'',
           
			 start_date:'',
			 end_date:'',
			 frequency:'',


			 participants:[{}],
			 
		multiple:'',
		login_id:''
		}];
      var s=$scope.counter;
      
      
	  
	  
	  
	 
	  {            if($scope.personalDetail1[0].module!='')
		    
		//  Date start =$scope.personalDetail1[0].startdate;
	//    var end =$scope.personalDetail1[0].enddate;
	    var day = $scope.personalDetail1[0].startdate.getDate();
	    var monthIndex = $scope.personalDetail1[0].startdate.getMonth();
	    var year = $scope.personalDetail1[0].startdate.getFullYear();

	    var day1 = $scope.personalDetail1[0].enddate.getDate();
	    var monthIndex1 = $scope.personalDetail1[0].enddate.getMonth();
	    var year1 = $scope.personalDetail1[0].enddate.getFullYear();
	    
	    var  start= day + '/' + (monthIndex + 1) + '/' + year;
		  
	  var  end= day1 + '/' + (monthIndex1 + 1) + '/' + year1;
		  
		   dataObj.push( {
				'assignename' : $scope.personalDetail1[0].assignename,
				
			
                
				'startDate':start,
                 'endDate':end,
				 'frequency':$scope.personalDetail1[0].frequency,
				 'name':$scope.personalDetail1[0].users.uid,
				 'multipleParticipants':1,
				 'login_id':$rootScope.uid,
          'taskName' :$scope.personalDetail1[0].module
	  })};	
	  
	  
	  
	  
	  
	  
	  
	  
       dataObj=JSON.stringify(dataObj);
      dataObj=JSON.parse(dataObj);
		var res = $http.post('http://localhost:8080/insert', dataObj);
		res.success(function(data, status, headers, config) {
			$scope.message = data;
alert(data);
$scope.personalDetail1 = angular.copy($scope.initial);
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});		
		// Making the fields empty
		//
	
	};
    $scope.checkAll = function () {
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.personalDetails, function(personalDetail) {
            personalDetail.selected = $scope.selectedAll;
        });
    };    
    
    
}]);



app.controller('showChart', function ($scope,$rootScope) {



$scope.demo=true;

 $scope.myDate = new Date();

  $scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() - 2,
      $scope.myDate.getDate());

  $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());

   $scope.retriveReport = function () {
        alert("aa");
$scope.demo=false;
    }; 






             $scope.selectedValue = "Please click on any column above.";
      $scope.events = {
        dataplotclick: function(ev, props) {
          $scope.$apply(function() {
            //create a table if possible to show all data for that person
            $scope.colorValue = "background-color:" + props.categoryLabel + ";";
            $scope.selectedValue = "You clicked on " + props.categoryLabel + "  column!";

                

          



          });
        }
      };
      $scope.dataSource = {
        "chart": {
          "caption": "Missed Work",
          "captionFontSize": "30",
          "captionPadding": "25",
          "baseFontSize": "16",
          "canvasBorderAlpha": "0",
          "showPlotBorder": "0",
          "placevaluesInside": "1",
          "valueFontColor": "#ffffff",
          "captionFontBold": "0",
          "bgColor": "#ffffff",
          "divLineAlpha": "50",
          "plotSpacePercent": "10",
          "bgAlpha": "95",
          "canvasBgAlpha": "0",
          "outCnvBaseFontColor": "#FFFFFF",
          "showValues": "0",
          "baseFont": "Open Sans",
          "paletteColors": "#ffffff, #ffffff, #ffffff, #FFD700, #FF1493",
          "theme": "zune",
          
          // tool-tip customization
          "toolTipBorderColor": "#FFFFFF",
          "toolTipBorderThickness": "1",
          "toolTipBorderRadius": "2",
          "toolTipBgColor": "#000000",
          "toolTipBgAlpha": "70",
          "toolTipPadding": "12",
          "toolTipSepChar": " - ",
          // axis customization
          "xAxisNameFontSize": "18",
          "yAxisNameFontSize": "18",
          "xAxisNamePadding": "10",
          "yAxisNamePadding": "10",
          "xAxisName": "Name",
          "yAxisName": "No of times missed",
          "xAxisNameFontBold": "0",
          "yAxisNameFontBold": "0",
          "showXAxisLine": "1",
          "xAxisLineColor": "#999999",
        },
        "data": [{
          "label": "Varun",
          "value": "1"
        }, {
          "label": "Nitin",
          "value": "2"
        }, {
          "label": "Shauktik",
          "value": "0"
        }, {
          "label": "Bindra",
          "value": "2"
        }, {
          "label": "Manish",
          "value": "4"
        }]
      };
    });



