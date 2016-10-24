angular.module('dengluApp').controller("cen",['$scope','$http','servers','$cookieStore',function ($scope,$http,servers,$cookieStore) {
	
	if($cookieStore.get('abc',$scope.updata)){
			$scope.updata={username:$cookieStore.get('abc').username,password:$cookieStore.get('abc').password};
			if($scope.updata!==null){
				alert('登陆成功')	
			}	
	}
	$scope.add=function(){
		$http({
			url:servers+"/users/login",
			method:"POST",
			data:$scope.updata
		}).success(function(e){
			debugger
			if($scope.checkbox==true){
				$cookieStore.put('abc',$scope.updata,{expires:new Date(new Date().getTime()+6)})
			}
			alert('登陆成功')
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
}])