(function(){
	"use strict";
	// content...
	angular
		.module('QuoteManager', [])
		.controller('Calculator', Calculator);

	function Calculator() {
		var vm = this;

		vm.nUnits = 1;
		vm.basePrice = 151200;
		vm.deliveryPricePerUnit = 200;
		vm.unitsChanged = UnitsChanged;

		UnitsChanged();

		function UnitsChanged() {
			vm.deliveryCharge = vm.nUnits * vm.deliveryPricePerUnit;
			vm.subTotal = vm.basePrice + vm.deliveryCharge;
			vm.importDuty = vm.subTotal * 0.058;
			vm.salesTax = (vm.subTotal + vm.importDuty) * 0.063;
			vm.localSalesTax = vm.salesTax * 0.017;
			vm.taxAndDuty = vm.importDuty + vm.salesTax + vm.localSalesTax;
			vm.Total = vm.subTotal + vm.importDuty + vm.salesTax;
		}
	};	
	
})();