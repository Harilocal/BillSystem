import { Component, OnInit } from '@angular/core';
import { Productmodel } from '../Model/productmodel';
import { Productbill } from '../Model/productmodel';
import { ProducserviceService } from '../Service/producservice.service';
import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService,ProducserviceService]
})
export class ProductComponent implements OnInit{
  constructor(private Producservice:ProducserviceService,private messageService: MessageService,private fb: FormBuilder) { }
  cols: any[] = <any[]>[];
  qcols: any[] = <any[]>[];
  editableColumns:any[] = <any[]>[];
    ProductDetails: Productmodel[] = <Productmodel[]>[];
    Productbill: Productbill[] = <Productbill[]>[];
    Productbillonj :Productbill = <Productbill>{};
    loading: boolean = true;
    clonedProducts: { [s: string]: Productmodel } = {};

    

   
    incrementQuantity(rowData:any) {
      rowData.Quantity++;
      console.log(rowData);
    }
  
    decrementQuantity(rowData:any,rowIndex:any) {
      rowData.Quantity--;
      if (rowData.Quantity == 0) {
        console.log(this.Productbill.indexOf(rowData));
      
        //console.log(this.ProductDetails.splice(this.data.indexOf(rowData), 1));
        //this.ProductDetails.splice(this.data.indexOf(rowData), rowIndex);
        const index = this.Productbill.indexOf(rowData);
      if (index !== -1) {
        this.Productbill.splice(index, 1);
      }
      }
    }
    // addRow(){
    //   this.ProductDetails.push(new Productmodel());
    //   // this.ProductDetails.push({ name: '', value: 0 });
    // }
    deleteRow(rowData:any,rowIndex:any) {
      console.log(this.Productbill.indexOf(rowData));
      
      //console.log(this.ProductDetails.splice(this.data.indexOf(rowData), 1));
      //this.ProductDetails.splice(this.data.indexOf(rowData), rowIndex);
      const index = this.Productbill.indexOf(rowData);
    if (index !== -1) {
      this.Productbill.splice(index, 1);
    }
    }
 
    save() {
      console.log(this.Productbill);
      // You can add code here to send the updated data to a server or to store it locally
    }
  ngOnInit() {

    this.qcols = [
      
      { field: 'Product', header: 'Product Name' ,editable: true},
      { field: 'Price', header: 'Price' ,editable: true},
      { field: 'Quantity', header: 'Quantity' ,editable: true},
      
      
  ];

    this.cols = [
      { field: 'ProductID', header: 'ProductID' ,editable: false},
      { field: 'Product', header: 'Product Name' ,editable: true},
      { field: 'Price', header: 'Price' ,editable: true},
      { field: 'Quantity', header: 'Quantity' ,editable: true},
      
      
  ];
  this.editableColumns = this.cols.filter(col => col.editable).map(col => col.field);
  
    // this.Producservice.getallproducts().subscribe((res) => {
    //   this.ProductDetails = <Productmodel[]>res;
    //   console.log(this.user);
    // }).catch((err) => {
    //   console.log(err);
    // });

  //   this.Producservice.getallproducts().toPromise().then((res) => {
  //     this.ProductDetails = <Productmodel[]>res;
  //     this.loading = false;

      
  // });

  this.Producservice.getallproducts().subscribe(res =>{
    this.ProductDetails = <Productmodel[]>res;
    this.loading = false;
},err => {
console.log("An Error Occured while Getting All Products" + err);
},()=>{
console.log("Request has Completed for Get All Products");
console.log(this.ProductDetails);
});

}
handleInput(event:any,product:any){
  console.log(event.target.value);
  console.log(product);
  if (this.Productbill.some((item) => item.ProductID == product.ProductID)) {
    this.Productbill.forEach((object:any) => {
      if (object.ProductID === product.ProductID) {
        
        for (let key in product) {
          if(key!="Quantity"){
          if (product.hasOwnProperty(key) && object.hasOwnProperty(key)) {
          object[key] = product[key];
          }
          }
        }
      }
    });
}
}
applyFilterGlobal(event: any) {
 
  return event.target.value;
}
totalAmount?:number;
editclick(product:any){
  console.log(product.Product);
  this.Productbillonj = <Productbill>{};
  this.Productbillonj.ProductID=product.ProductID;
  this.Productbillonj.Price=product.Price;
  this.Productbillonj.Product=product.Product;
  this.Productbillonj.Quantity=1;
  this.Productbillonj.invoice=1;
  
  if (!this.Productbill.some((item) => item.ProductID == product.ProductID)) {
    this.Productbill.push(this.Productbillonj);
   
}
this.Productbill.forEach((object:any) => {
  if (object.ProductID === product.ProductID) {
   
    for (let key in product) {
    if(key!="Quantity"){
      console.log(key);
      if (product.hasOwnProperty(key) && object.hasOwnProperty(key)) {
      object[key] = product[key];
      }
    }
      
    }
  }
});


   console.log(this.Productbill);
   
}


calculateTotal(rowData: any) {
  return rowData.Price * rowData.Quantity;
  console.log(rowData.Price * rowData.Quantity);
}

calculateOverallTotal() {
 
  let total = 0;
  for (const rowData of this.Productbill) {
    
    total += this.calculateTotal(rowData);
    console.log(rowData);
  }
  return total;
}


onRowEditInit(productedit:any){
  this.clonedProducts[productedit.ProductID] = { ...productedit };
  console.log(this.clonedProducts[productedit.ProductID]);
}

// onRowEditSave(product:any){

// }
// onRowEditCancel(p:any,index:any){

// }

}
