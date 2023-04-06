import { Injectable } from '@angular/core';
import { Productmodel } from '../Model/productmodel';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProducserviceService {

  constructor(private http:HttpClient) { }

  getallproducts(){
    console.log("Request has sent for Get All Products");
    return this.http.get("http://localhost/Productwebapi/api/product/GetAllProducts");
  }
}
