export class Productmodel {
    public ProductID?:number;
    public Product?:string ;
    public Price?:number ;
    public Quantity?:string;
}
export class Productbill {
    public ProductID?:number;
    public Product?:string ;
    public Price?:number ;
    public Quantity?:number;
    public invoice?:number;
    public totalAmount?: number;
}