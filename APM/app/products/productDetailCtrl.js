var app;
(function (app) {
    var productDetail;
    (function (productDetail) {
        var ProductDetailCtrl = (function () {
            function ProductDetailCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = "Product Detail";
                var productResource = dataAccessService.getProductResource();
                productResource.get({
                    productId: $routeParams.productId
                }, (function (data) {
                    _this.product = data;
                }));
            }
            ProductDetailCtrl.$inject = ['$routeParams', 'dataAccessService'];
            return ProductDetailCtrl;
        }());
        angular
            .module("productManagement")
            .controller("ProductDetailCtrl", ProductDetailCtrl);
    })(productDetail = app.productDetail || (app.productDetail = {}));
})(app || (app = {}));
