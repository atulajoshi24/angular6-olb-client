import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
     {path:'login',component:LoginComponent}
    ]),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
