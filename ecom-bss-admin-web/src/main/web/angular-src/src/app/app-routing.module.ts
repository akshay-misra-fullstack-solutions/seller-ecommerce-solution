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
import {ProcessOrderComponent} from "./bss/components/order-management/process-order/process-order.component";
import {CustomerOrdersComponent} from "./bss/components/customer-management/customer-orders/customer-orders.component";
import {CustomerAccountComponent} from "./bss/components/customer-management/customer-account/customer-account.component";
import {CustomerAddressComponent} from "./bss/components/customer-management/customer-address/customer-address.component";
import {OrderSuccessComponent} from "./bss/components/order-management/order-success/order-success.component";
import {OrderDetailsComponent} from "./bss/components/order-management/order-details/order-details.component";
import {ProductCategoriesListComponent} from "./bss/components/product_management/product-categories/product-categories-list/product-categories-list.component";
import {AddProductCategoryComponent} from './bss/components/product_management/product-categories/add-product-category/add-product-category.component';
import {AttributeGroupsListComponent} from "./bss/components/product_management/attribute-specification/attribute-groups-list/attribute-groups-list.component";
import {AddAttributeGroupsComponent} from "./bss/components/product_management/attribute-specification/add-attribute-groups/add-attribute-groups.component";
import {AttributeListComponent} from "./bss/components/product_management/attribute-specification/attribute-list/attribute-list.component";
import {AddAttributeComponent} from "./bss/components/product_management/attribute-specification/add-attribute/add-attribute.component";
import { AddProductSpecComponent } from "./bss/components/product_management/attribute-specification/add-product-spec/add-product-spec.component";
import {AttributesSpecsWrapperComponent} from "./bss/components/product_management/attribute-specification/attributes-specs-wrapper/attributes-specs-wrapper.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  /*{ path: '', component: ViewProductComponent },*/
  { path: '', component: ProductCategoriesListComponent},
  { path: 'catalog/attribute/specifications', component: AttributesSpecsWrapperComponent},
  { path: 'catalog/attribute/groups', component: AttributeGroupsListComponent},
  { path: 'catalog/add/attribute/group', component: AddAttributeGroupsComponent},
  { path: 'catalog/attributes', component: AttributeListComponent},
  { path: 'catalog/add/attribute', component: AddAttributeComponent},
  { path: 'catalog/add/product/specification', component: AddProductSpecComponent},
  { path: 'catalog/add/category', component: AddProductCategoryComponent},
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
