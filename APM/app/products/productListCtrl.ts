module app.productList {
    interface IProductListModel {
    title: string;
    showImage: boolean;
    products: app.domain.IProduct []; 
    toggleImage(): void;
}

/**
 * ProductListCtrl
 */
class ProductListCtrl implements IProductListModel{
    title: string;
    showImage: boolean;
    products: any []; 
    static $inject = ['dataAccessService']
    constructor(private dataAccessService: app.common.DataAccessService) {
        this.title = "Product List";
        this.showImage = false;
        this.products = [];

        var productResource = dataAccessService.getProductResource();
        productResource.query((data: app.domain.IProduct[]) => {
            this.products = data;
        });
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }
}



angular
    .module("productManagement")
    .controller("ProductListCtrl", ProductListCtrl);
}