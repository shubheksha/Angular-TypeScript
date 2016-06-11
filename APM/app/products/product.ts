module app.domain {
 export interface IProduct{
        productId: number;
        productName: string;
        productCode: string;
        releaseDate: Date;
        price: number;
        description: string;
        imageUrl: string;
      //  calculateDiscount(percent: number): number;
    }

    /**
     *  Product
     */
 export class Product {
        constructor(public productId: number, 
                    public productName: string, 
                    public productCode: string, 
                    public releaseDate: Date,
                    public price: number,
                    public description: string, 
                    public imageUrl: string
                    ) {
            
        }

        calculateDiscount(percent: number){
            return this.price - (this.price * percent/100);
        }
    }
}