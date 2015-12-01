//! Author: Martin K. Schröder <mkschreder.uk@gmail.com>

JUCI.app
.controller("UPNPMainPage", function($scope, $uci, $systemService, $network, $firewall, $upnp, $tr, gettext){
	$systemService.find("miniupnpd").done(function(service){
		$scope.service = service;
		$scope.$apply();
	});
	$scope.networks = [];

	$scope.acls = [];
	$scope.action = [
		{ label: $tr(gettext("Allow")),	value:"allow" },
		{ label: $tr(gettext("Deny")),	value:"deny" }
	];

	$scope.onStartStopService = function(){
		if(!$scope.service) return;
		if($scope.service.running){
			$scope.service.stop().done(function(){
				$scope.$apply();
			});
		} else {
			$scope.service.start().done(function(){
				$scope.$apply();
			});
		}
	}

	$scope.onEnableDisableService = function(){
		if(!$scope.service) return;
		if($scope.service.enabled){
			$scope.service.disable().done(function(){
				$scope.$apply();
			});
		} else {
			$scope.service.enable().done(function(){
				$scope.$apply();
			});
		}
	}

	$upnp.getConfig().done(function(config){
		$scope.upnp = config;
		$network.getNetworks().done(function(data){
			$scope.networks = data.map(function(x){
				return {
					label: String(x[".name"]).toUpperCase(),
					value: x[".name"]
				}
			});
			$scope.$apply();
		});
	});
	$uci.$sync(["upnpd"]).done(function(){
	$scope.acls = $uci.upnpd["@perm_rule"];
		$scope.$apply();
	});
});
