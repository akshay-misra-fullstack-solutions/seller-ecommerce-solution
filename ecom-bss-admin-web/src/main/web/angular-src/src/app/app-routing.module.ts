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
import {AttributeGroupsListComponent} from "./core/framework/design/model-schema/attribute-groups-list/attribute-groups-list.component";
import {AddAttributeGroupsComponent} from "./core/framework/design/model-schema/add-attribute-groups/add-attribute-groups.component";
import {AttributeListComponent} from "./core/framework/design/model-schema/attribute-list/attribute-list.component";
import {AddAttributeComponent} from "./core/framework/design/model-schema/add-attribute/add-attribute.component";
import { AddProductSpecComponent } from "./bss/components/product_management/attribute-specification/add-product-spec/add-product-spec.component";
import {AttributesSpecsWrapperComponent} from "./bss/components/product_management/attribute-specification/attributes-specs-wrapper/attributes-specs-wrapper.component";
import {AttributeValueListComponent} from "./core/framework/design/model-schema/attribute-value-list/attribute-value-list.component";
import {AddAttributeValueComponent} from "./core/framework/design/model-schema/add-attribute-value/add-attribute-value.component";
import {ApplicationLayoutWrapperComponent} from "./core/framework/design/layout/application-layout-wrapper/application-layout-wrapper.component";
import {AddLayoutConfigComponent} from "./core/framework/design/layout/add-layout-config/add-layout-config.component";
import {AddTabLayoutComponent} from "./core/framework/design/layout/add-tab-layout/add-tab-layout.component";
import {AddSideNavigationTabComponent} from "./core/framework/design/layout/add-side-navigation-tab/add-side-navigation-tab.component";
import {ApplicationModelWrapperComponent} from "./core/framework/design/model-schema/application-model-wrapper/application-model-wrapper.component";
import {AddObjectTypeComponent} from "./core/framework/design/model-schema/add-object-type/add-object-type.component";

//noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  /*{ path: '', component: ViewProductComponent },*/
  { path: 'application/design/layout', component: ApplicationLayoutWrapperComponent },
  { path: 'application/design/layout/add/layout/config', component: AddLayoutConfigComponent },
  { path: 'application/design/layout/edit/layout/config/:id', component: AddLayoutConfigComponent },
  { path: 'application/design/layout/add/tab/layout', component: AddTabLayoutComponent },
  { path: 'application/design/layout/edit/tab/layout/:id', component: AddTabLayoutComponent },
  { path: 'application/design/layout/add/side/nav/tab', component: AddSideNavigationTabComponent },
  { path: 'application/design/layout/edit/side/nav/tab/:id', component: AddSideNavigationTabComponent },

  { path: 'application/design/model', component: ApplicationModelWrapperComponent },

  { path: 'application/design/model/add/attribute/group', component: AddAttributeGroupsComponent},
  { path: 'application/design/model/edit/attribute/group/:id', component: AddAttributeGroupsComponent},
  { path: 'application/design/model/add/attribute', component: AddAttributeComponent},
  { path: 'application/design/model/edit/attribute/:id', component: AddAttributeComponent},
  { path: 'application/design/model/attribute/values/:id', component: AttributeValueListComponent},
  { path: 'application/design/model/add/attribute/value', component: AddAttributeValueComponent},
  { path: 'application/design/model/edit/attribute/value/:id', component: AddAttributeValueComponent},
  { path: 'application/design/model/add/object/type', component: AddObjectTypeComponent },
  { path: 'application/design/model/edit/object/type/:id', component: AddObjectTypeComponent },

  { path: '', component: ProductCategoriesListComponent},
  { path: 'catalog/attribute/specifications', component: AttributesSpecsWrapperComponent},

  { path: 'catalog/add/product/specification', component: AddProductSpecComponent},
  { path: 'catalog/edit/product/specification/:id', component: AddProductSpecComponent},
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
