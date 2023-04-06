import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from '../app/product/product.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  // {path: '', redirectTo: 'home', pathMatch: 'full'},
   //{path: 'home', component: ProductComponent},
 
{path: 'Product', loadChildren: () => import('./product/product.module').then(x => x.ProductModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
