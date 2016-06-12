module app.productDetail{
	interface IProductDetailModel {
		title: string;
		product: app.domain.IProduct;
	}

	class ProductDetailCtrl implements IProductDetailModel {
		title: string;
		product: app.domain.IProduct;
		static $inject = ['$routeParams','dataAccessService'];
		constructor(private $routeParams, private dataAccessService: app.common.DataAccessService) {
			this.title = "Product Detail";

			var productResource = dataAccessService.getProductResource();
			productResource.get({ 
				productId: $routeParams.productId
			},
				((data: app.domain.IProduct) => {
					this.product = data;
				}));
		}
	}
	angular
		.module("productManagement")
		.controller("ProductDetailCtrl",
					ProductDetailCtrl)
}