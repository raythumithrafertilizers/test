angular.module("App")


.controller("editStockController", function ($scope,toastr, $routeParams, $http, $q, $route, $location, $alert, $timeout){


    $scope.load = $http({
	  		method: 'GET',
			  url: '/superuser/company-bill',
			}).then(function (response){
		    		$scope.billsList = [];
		    		console.log(response, '0000000')
		    		var blist = JSON.parse(response.data.bills_list);

		    		$.each(blist, function(i){
                        var obj = {};
                        obj.bill_id = blist[i].pk;
                        obj.company_name = blist[i].fields.company_name;
                        obj.bill_number = blist[i].fields.company_invoice_number;
                        obj.invoice_date = blist[i].fields.invoice_date;
                        obj.bill_image = process_image_path(blist[i].fields.bill_image);

                        $scope.billsList.push(obj);
                        $timeout(function(){
                            $("#example1_modify_stock").DataTable();
                        },500)
                    })
			}, function errorCallback(response){
		    		console.log(response);
			});



    $timeout(function(){
        $('#datepicker') .datepicker({
            format: 'dd/mm/yyyy'

        })
    },500)

    $timeout(function(){
        $('#datepicker1') .datepicker({
            format: 'dd/mm/yyyy'

        })
    },500)


   /* $scope.stockType = [
        {'name': 'Fertilizers', 'id': 'Fertilizers'},
        {'name': 'Pesticides', 'id': 'Pesticides'},
        {'name': 'Seeds', 'id': 'Seeds'}
    ]*/

    $scope.stockType = [
        {'name': 'Fertilizers', 'id': 'Fertilizers'},
        {'name': 'Pesticides', 'id': 'Pesticides'},
        {'name': 'Seeds', 'id': 'Seeds'},
        {'name': 'Bio Pesticides', 'id': 'Bio Pesticides'},
        {'name': 'Bio Fertilizers', 'id': 'Bio Fertilizers'}
    ]


    $scope.quantityList = [
        {'name': 'kgs', 'id': 'kgs'},
        {'name': 'liters', 'id': 'liters'},
        {'name': 'units', 'id': 'units'},
        {'name': 'grams', 'id': 'grams'}
    ]

    $scope.quantityRateList = [
        {'name': 'kgs', 'id': 'kgs'},
        {'name': 'liters', 'id': 'liters'},
        {'name': 'units', 'id': 'units'},
        {'name': 'grams', 'id': 'grams'}
    ]

     $scope.isLegalProduct = [
        {'name': 'legal', 'id': 'legal', 'display_name': 'invoice stock'},
        {'name': 'illegal', 'id': 'illegal', 'display_name': 'Quotation stock'},
    ]

    $scope.updateStock = function(){


        $scope.load = $http({
					  method: 'post',
					  url: '/superuser/edit-stock',
					  data: {
		                    "stockdata" : $scope.stock,
		                },
					  headers: {
					  	'Content-Type': 'application/x-www-form-urlencoded'}
							}).then(function successCallback(response)
								{
						    		// toastr.success("stock has been created successfully")
						    		$scope.master = {};
						    		$scope.formData = angular.copy($scope.master);
						    		toastr.success('successfully added new stock...')
								}, function errorCallback(response)
								{
						    		// console.log("not sent");
						    		toastr.error('failed  to add new stock...')
								});

    }

    function dateString(date){
        if(date){
            var splitedOne = date.split('-')
            return splitedOne[2]+"/"+splitedOne[1]+"/"+splitedOne[0]
        }
    }
	$scope.editstock = function () {
    	$scope.load = $http({
			  method: 'post',
			  url: '/superuser/editstock',
			  data: {
	                "stockdata" : $scope.stock,
	            },
			  headers: {
			  	'Content-Type': 'application/x-www-form-urlencoded'}
					}).then(function successCallback(response)
						{
				    		$alert({
					                title: "stock details saved successfully",
					                placement: 'top', type: 'success',
					                show: true
					            });
						}, function errorCallback(response)
						{
				    		// console.log("not sent");
						});

	}


	$scope.load = $http({
		method : 'GET',
		url : "/superuser/get-one-stock",
		params : {
			"stockId" : $routeParams.stockId,
		}
	}).then(function successsCallBack(response){

		var stockdata = JSON.parse(response.data.stockdata);
		console.log('dddddddddgot stock data is', stockdata)
		$scope.stock = {};

		$scope.stock.stockId = stockdata[0].pk;

        $scope.stock.stock_name = stockdata[0].fields.item_name;
        $scope.stock.expired_date =  dateString(stockdata[0].fields.expire_date)

        $scope.stock.stockType = stockdata[0].fields.item_type

        $scope.stock.available_stock = stockdata[0].fields.available_stock

        $scope.stock.isLegal = stockdata[0].fields.isLegal

        $scope.stock.invoice_bill = stockdata[0].fields.invoice_bill

        $scope.stock.batch_number = stockdata[0].fields.item_batch_number;
        $scope.stock.mfg_date = dateString(stockdata[0].fields.mfg_date)
        $scope.stock.lot_number = stockdata[0].fields.item_lot_number;
        $scope.stock.purchase_from = stockdata[0].fields.purchase_form;

        $scope.stock.quantity_count = stockdata[0].fields.quantity_weight;
        $scope.stock.quantity = stockdata[0].fields.quantity_type;

        $scope.stock.quantity_rate = stockdata[0].fields.rate_per_type;
        $scope.stock.rate = stockdata[0].fields.item_cost;
        $scope.stock.invoice_price = stockdata[0].fields.invoice_cost;

	}, function errorCallBack(error){
		console.log(error);
	})


})


.controller("addStockController", function ($scope,$timeout, $q, $http, $alert, toastr){
    $scope.stockType = 'Select Stock Type'

    $scope.disable_batch_number = false;
    $scope.disable_lot_number = false;

    $scope.changed_stock_type = function(){
        if($scope.stock.stock_type.name == 'Seeds'){
            $scope.disable_batch_number = true;
            $scope.disable_lot_number = false;

        }else{
            $scope.disable_batch_number = false;
            $scope.disable_lot_number = true;

        }
    }

    $scope.load = $http({
	  		method: 'GET',
			  url: '/superuser/company-bill',
			}).then(function (response){
		    		$scope.billsList = [];
		    		console.log(response, '0000000')
		    		var blist = JSON.parse(response.data.bills_list);

		    		$.each(blist, function(i){
                        var obj = {};
                        obj.bill_id = blist[i].pk;
                        obj.company_name = blist[i].fields.company_name;
                        obj.bill_number = blist[i].fields.company_invoice_number;
                        obj.invoice_date = blist[i].fields.invoice_date;
                        obj.bill_image = process_image_path(blist[i].fields.bill_image);

                        $scope.billsList.push(obj);
                        $timeout(function(){
                            $("#example1_modify_stock").DataTable();
                        },500)
                    })
			}, function errorCallback(response){
		    		console.log(response);
			});



     $timeout(function(){
        $('#datepicker') .datepicker({
            format: 'dd/mm/yyyy',
        })
    },500)

    $timeout(function(){
        $('#datepicker1') .datepicker({
            format: 'dd/mm/yyyy',
        })
    },500)



    $scope.stockType = [
        {'name': 'Fertilizers', 'id': 'Fertilizers'},
        {'name': 'Pesticides', 'id': 'Pesticides'},
        {'name': 'Seeds', 'id': 'Seeds'},
        {'name': 'Bio Pesticides', 'id': 'Bio Pesticides'},
        {'name': 'Bio Fertilizers', 'id': 'Bio Fertilizers'}

    ]

    $scope.isLegalProduct = [
        {'name': 'legal', 'id': 'legal', 'display_name': 'invoice stock'},
        {'name': 'illegal', 'id': 'illegal', 'display_name': 'Quotation stock'},
    ]

    $scope.quantityList = [
        {'name': 'kgs', 'id': 'kgs'},
        {'name': 'liters', 'id': 'liters'},
        {'name': 'units', 'id': 'units'},
        {'name': 'grams', 'id': 'grams'},
        {'name': 'milli liters', 'id': 'milli liters'}
    ]

    $scope.quantityRateList = [
        {'name': 'kgs', 'id': 'kgs'},
        {'name': 'liters', 'id': 'liters'},
        {'name': 'units', 'id': 'units'},
        {'name': 'grams', 'id': 'grams'},
        {'name': 'milli liters', 'id': 'milli liters'}

    ]

    $scope.setType = function(type){
        $scope.stockType = type;
    }



		$scope.createStock = function (){


                $scope.load = $http({
					  method: 'post',
					  url: '/superuser/add-stock',
					  data: {
		                    "stockdata" : $scope.stock,
		                },
					  headers: {
					  	'Content-Type': 'application/x-www-form-urlencoded'}
							}).then(function successCallback(response)
								{
						    		// toastr.success("stock has been created successfully")
						    		$scope.master = {};
						    		$scope.formData = angular.copy($scope.master);
						    		toastr.success('successfully added new stock...')

								}, function errorCallback(response)
								{
						    		toastr.error(response.data.response)
								});
			}
})




.controller("modifyStockCtrl", function ($scope,toastr, $http, $q, $route, $location, $timeout){
		$scope.load = $http({
	  		method: 'GET',
			  url: '/superuser/stock-list',
			}).then(function (response) 
				{

				    console.log(response)
		    		$scope.stockslist = [];
		    		var stockdata = JSON.parse(response.data.stockslist);
		    		$.each(stockdata, function(i){
				    			var obj = {};
				    			obj.stockId = stockdata[i].pk;
				    			obj.stock_name = stockdata[i].fields.item_name;
				    			obj.expired_date =  stockdata[i].fields.expire_date;
				    			obj.stock_type = stockdata[i].fields.item_type;
				    			obj.quantity_weight = stockdata[i].fields.quantity_weight;
				    			obj.available_stock = stockdata[i].fields.available_stock;
				    			obj.company_invoice_number = stockdata[i].fields.company_invoice_number;


				    			console.log(stockdata[i].fields,'------------')
				    			//obj.invoice_number = stockdata[i].fields.invoice_bill.company_invoice_number
				    			$scope.stockslist.push(obj);
				    			$timeout(function(){
								    $("#example1_modify_stock").DataTable();
								},500)
				    		})
				}, function errorCallback(response) 
				{
		    		console.log(response);
				});

		$scope.EditStock =  function(stockId){
			 $location.path("/edit-stock-details/"+stockId);
			 // console.log("storage data: ", window.localStorage.getItem('stock_id'));
		}

        $scope.confirmDelete = function(stockId){
            $("#myModal3").modal("show");
            $scope.deletingStock = stockId;
        }

        $scope.hideModel = function(){
                $("#myModal3").modal("hide");
        }

		$scope.deleteStock = function(){

		    $scope.load = $http({
	  		method: 'post',
			  url: '/superuser/delete-stock',
			  data:{
			  	"stockId" : $scope.deletingStock,
			  }
			}).then(function (response) 
				{    $scope.hideModel()
                     toastr.success('stock is deleted successfully')

                     $timeout(function(){
                        $route.reload();
                     },500)

				}, function errorCallback(response)
				{
		    		toastr.error('unable to delete stock')
				});
		}

})