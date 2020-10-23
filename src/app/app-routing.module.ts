import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';



const appRoutes:Routes = [
  {path:'',component: ProductComponent},
  {path:'product-list' ,component:ProductListComponent}
]

@NgModule({
  imports:[ RouterModule.forRoot(appRoutes)],
exports:[RouterModule],
  declarations: [ ],
  bootstrap:    [ ]
})
export class AppRoutingModule { }
