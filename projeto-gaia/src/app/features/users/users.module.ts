import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


@NgModule({
  declarations: [
    UserRegistrationComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    // SharedModule

  ],
  exports: [
    UserRegistrationComponent
  ],
  providers: [
    // UsersService
  ]


})
export class UsersModule { }
