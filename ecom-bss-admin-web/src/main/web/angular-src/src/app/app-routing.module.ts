import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AuthGuard} from "./core/framework/guards/auth.guard";
import {LoginComponent} from "./core/framework/login/login.component";
import {RegisterComponent} from "./core/framework/register/register.component";
import {ViewProductComponent} from "./bss/components/product_management/view-product/view-product.component";
import {UserProfileComponent} from "./core/framework/user-profile/user-profile.component";
import {CartComponent} from "./bss/components/order-management/cart/cart.component";
import {RevenueManagementComponent} from "./bss/components/revenue-management/revenue-management.component";
import {DeliveryManagementComponent} from "./bss/components/delivery-management/delivery-management.component";
import {ProductDetailsComponent} from "./bss/views/product-details/product-details.component";
import {ProcessOrderComponent} from "./bss/components/order-management/process-order/process-order.component";
import {CustomerOrdersComponent} from "./bss/components/customer-management/customer-orders/customer-orders.component";
import {CustomerAccountComponent} from "./bss/components/customer-management/customer-account/customer-account.component";
import {CustomerAddressComponent} from "./bss/components/customer-management/customer-address/customer-address.component";
import {OrderSuccessComponent} from "./bss/components/order-management/order-success/order-success.component";
import {OrderDetailsComponent} from "./bss/components/order-management/order-details/order-details.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: ViewProductComponent },
  { path: 'product/details', component: ProductDetailsComponent},
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  { path: 'products/cart', component: CartComponent, canActivate: [AuthGuard]},
  { path: 'process/order', component: ProcessOrderComponent, canActivate: [AuthGuard]},
  { path: 'order/success', component: OrderSuccessComponent, canActivate: [AuthGuard]},
  { path: 'order/details', component: OrderDetailsComponent, canActivate: [AuthGuard]},
  { path: 'customer/orders', component: CustomerOrdersComponent, canActivate: [AuthGuard]},
  { path: 'customer/account', component: CustomerAccountComponent, canActivate: [AuthGuard]},
  { path: 'customer/address', component: CustomerAddressComponent, canActivate: [AuthGuard]},
  { path: 'billing', component: RevenueManagementComponent, canActivate: [AuthGuard]},
  { path: 'delivery', component: DeliveryManagementComponent, canActivate: [AuthGuard]},


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
