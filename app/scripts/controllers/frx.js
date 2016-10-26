angular.module('dengluApp').controller("cen",['$scope','$http','servers','$cookieStore','$state',function ($scope,$http,servers,$cookieStore,$state) {
	
	if($cookieStore.get('abc',$scope.updata)){
			$scope.updata={username:$cookieStore.get('abc').username,password:$cookieStore.get('abc').password};
			if($scope.updata!==null){
				$state.go("nav.cont")
			}	
	}
	$scope.add=function(){
		$http({
			url:servers+"/users/login",
			method:"POST",
			data:$scope.updata
		}).success(function(e){
			if($scope.checkbox==true){
				$cookieStore.put('abc',$scope.updata,{expires:new Date(new Date().getTime()+6)})
			}
			$state.go("nav.cont")
		})
	}
}]).controller("can",['$scope','$http','servers','$cookieStore','$state',function ($scope,$http,servers,$cookieStore,$state) {
	$scope.ad=function(){
		$http({
			url:servers+"/users",
			method:"POST",
			data:$scope.updata
		}).success(function(e){
			$cookieStore.put('abc',$scope.updata,{expires:new Date(new Date().getTime()+6)})
			$state.go("dengl")
		})
	}
}]).controller("cont",['$scope','$http','servers','$cookieStore','$state',function ($scope,$http,servers,$cookieStore,$state) {
	var aa=0
	function http(){
	$http({
			url:servers+"/item",
			method:"GET",
			params:{'$skip':aa,'$limit':10}
		}).success(function(e){
			$scope.ac=e
		})
	}
	http()
	$scope.acc=function(){
		aa+=10;
		http()
	}
	$scope.acc1=function(){
		if(aa>0){
			aa-=10;
			http()
		}
	}
	$scope.sc=function(e){
		$http({
			url:servers+"/item/"+e.id,
			method:"delete"
		}).success(function(){
			$scope.ac.splice($scope.ac.indexOf(e),1)
			$state.go("nav.cont")
		})
	}
}]).controller("nav",['$scope','$http','servers','$cookieStore',function ($scope,$http,servers,$cookieStore) {
	$scope.tc=function(){
		$cookieStore.remove('abc')
	}
}]).controller("adds",['$scope','$http','servers','$window','$location','$state','$stateParams',function ($scope,$http,servers,$window,$location,$state,$stateParams) {
	$scope.addr=function(){
		if($scope.undate!=null){
			$http({
				url:servers+"/item",
				method:"POST",
				data:$scope.undate
			}).success(function(e){
				$state.go("nav.cont")
			})
		}
	}
	$scope.ade=function(){
		$window.history.back();
	}
}]).controller("addss",['$scope','$http','servers','$window','$location','$state','$stateParams',function ($scope,$http,servers,$window,$location,$state,$stateParams) {
	$scope.ade=function(){
		$window.history.back();
	}
	$scope.undates=$stateParams
	
	//var Id=$location.url().split('=')[1]
	$scope.sc=function(e){
		$http({
			url:servers+"/item/"+e.uid,
			method:"delete"
		}).success(function(a){
			
			$state.go("nav.cont")
		})
	}
	$scope.addrd=function(e){
		if($scope.undates!=null){
			$http({
				url:servers+"/item/"+e.uid,
				method:"PUT",
				data:$scope.undates
			}).success(function(e){
				$state.go("nav.cont")
			})
		}
	}
}])