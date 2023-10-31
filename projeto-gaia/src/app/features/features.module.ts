import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    ProductsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
