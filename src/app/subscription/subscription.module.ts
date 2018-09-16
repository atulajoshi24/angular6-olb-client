import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSubscriptionComponent } from './product-subscription.component';
import {RouterModule} from '@angular/router'
import { ConfirmSubscriptionComponent } from './confirm-subscription.component';
import { ProductSubscriptionService } from './product-subscription.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'subscribe',component:ProductSubscriptionComponent},
      {path:'subscribeSuccess',component:ConfirmSubscriptionComponent}
    ]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [ProductSubscriptionComponent,ConfirmSubscriptionComponent],
  providers:[ProductSubscriptionService]
})
export class SubscriptionModule { }
