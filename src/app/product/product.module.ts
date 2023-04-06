import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { Routes } from '@angular/router';

import { ButtonModule } from 'primeng/button';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  
  {path: 'Product', component: ProductComponent}
];

@NgModule({
  declarations: [
    ProductComponent
  ],
  
  imports: [
 
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    ButtonModule,

    TableModule,
    DropdownModule,
    FormsModule,
    AccordionModule,
    AutoCompleteModule,
    TagModule,
    InputTextModule,
    ToastModule
  ]
})
export class ProductModule { }
