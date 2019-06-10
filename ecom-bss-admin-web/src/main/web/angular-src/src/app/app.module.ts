import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import {AngularMaterialModules} from './material-module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {JwtModule} from '@auth0/angular-jwt';
import { NgxSummernoteModule } from 'ngx-summernote';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';


import { AddProductComponent } from './bss/components/product_management/add-product/add-product.component';
import { ViewProductComponent } from './bss/components/product_management/view-product/view-product.component';
import { ProductService } from './bss/components/product_management/services/product.service';
import { AlertComponent } from './core/framework/alert/alert.component';
import { LoginComponent } from './core/framework/login/login.component';
import { RegisterComponent } from './core/framework/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from "./core/framework/guards/auth.guard";
import { AlertService } from "./core/framework/services/alert.service";
import { UserService } from "./core/framework/services/user.service";
import { ErrorInterceptor } from "./core/framework/helpers/error.interceptor";
import { HeaderComponent } from './core/framework/header/header.component';
import { UserProfileComponent } from './core/framework/user-profile/user-profile.component';
import { FooterComponent } from './core/framework/footer/footer.component';
import { WestNavigationComponent } from './core/framework/west-navigation/west-navigation.component';
import { EastNavigationComponent } from './core/framework/east-navigation/east-navigation.component';
import { RevenueManagementComponent } from './bss/components/revenue-management/revenue-management.component';
import { DeliveryManagementComponent } from './bss/components/delivery-management/delivery-management.component';
import { ProductCardComponent } from './bss/views/product-card/product-card.component';
import { TopSectionComponent } from './bss/views/top-section/top-section.component';
import { BottomSectionComponent } from './bss/views/bottom-section/bottom-section.component';
import { ProductsLeftSidebarComponent } from './bss/views/products-left-sidebar/products-left-sidebar.component';
import { ProductDetailsComponent } from './bss/views/product-details/product-details.component';
import { CartComponent } from './bss/components/order-management/cart/cart.component';
import { ProcessOrderComponent } from './bss/components/order-management/process-order/process-order.component';
import { CustomerOrdersComponent } from './bss/components/customer-management/customer-orders/customer-orders.component';
import { CustomerAccountComponent } from './bss/components/customer-management/customer-account/customer-account.component';
import { CustomerAddressComponent } from './bss/components/customer-management/customer-address/customer-address.component';
import { CustomerLoginComponent } from './bss/components/customer-management/customer-login/customer-login.component';
import { OrderSuccessComponent } from './bss/components/order-management/order-success/order-success.component';
import { OrderDetailsComponent } from './bss/components/order-management/order-details/order-details.component';
import { RecentlyViewedProductsComponent } from './bss/components/product_management/recently-viewed-products/recently-viewed-products.component';
import { RecommendedProductsComponent } from './bss/components/product_management/recommended-products/recommended-products.component';
import { ProductCategoriesNavigationComponent } from './bss/components/product_management/product-categories-navigation/product-categories-navigation.component';
import { ProductCategoriesMegamenuComponent } from './bss/views/products/product-categories-megamenu/product-categories-megamenu.component';
import { ProductsSliderComponent } from './bss/components/product_management/products-slider/products-slider.component';
import { ProductCategoriesListComponent } from './bss/components/product_management/product-categories/product-categories-list/product-categories-list.component';
import { AddProductCategoryComponent } from './bss/components/product_management/product-categories/add-product-category/add-product-category.component';
import { AttributeGroupsListComponent } from './core/framework/design/model-schema/attribute-groups-list/attribute-groups-list.component';
import { AddAttributeGroupsComponent } from './core/framework/design/model-schema/add-attribute-groups/add-attribute-groups.component';
import { AttributeListComponent } from './core/framework/design/model-schema/attribute-list/attribute-list.component';
import { AddAttributeComponent } from './core/framework/design/model-schema/add-attribute/add-attribute.component';
import { ProductSpecListComponent } from './bss/components/product_management/attribute-specification/product-spec-list/product-spec-list.component';
import { AddProductSpecComponent } from './bss/components/product_management/attribute-specification/add-product-spec/add-product-spec.component';
import { AttributesSpecsWrapperComponent } from './bss/components/product_management/attribute-specification/attributes-specs-wrapper/attributes-specs-wrapper.component';
import { DataTableComponent } from './core/framework/material-custom-components/data-table/data-table.component';
import { MatReferenceFieldComponent } from './core/framework/material-custom-components/mat-reference-field/mat-reference-field.component';
import { AttributeValueListComponent } from './core/framework/design/model-schema/attribute-value-list/attribute-value-list.component';
import { AddAttributeValueComponent } from './core/framework/design/model-schema/add-attribute-value/add-attribute-value.component';
import { ApplicationLayoutWrapperComponent } from './core/framework/design/layout/application-layout-wrapper/application-layout-wrapper.component';
import { LayoutConfigComponent } from './core/framework/design/layout/layout-config/layout-config.component';
import { TabLayoutComponent } from './core/framework/design/layout/tab-layout/tab-layout.component';
import { SideNavigationTabComponent } from './core/framework/design/layout/side-navigation-tab/side-navigation-tab.component';
import { AddLayoutConfigComponent } from './core/framework/design/layout/add-layout-config/add-layout-config.component';
import { AddTabLayoutComponent } from './core/framework/design/layout/add-tab-layout/add-tab-layout.component';
import { AddSideNavigationTabComponent } from './core/framework/design/layout/add-side-navigation-tab/add-side-navigation-tab.component';
import { ApplicationModelWrapperComponent } from './core/framework/design/model-schema/application-model-wrapper/application-model-wrapper.component';
import { ObjectTypeComponent } from './core/framework/design/model-schema/object-type/object-type.component';
import { AddObjectTypeComponent } from './core/framework/design/model-schema/add-object-type/add-object-type.component';
import { CharacteristicListComponent } from './bss/components/product_management/attribute-specification/characteristic-list/characteristic-list.component';
import { AddCharacteristicComponent } from './bss/components/product_management/attribute-specification/add-characteristic/add-characteristic.component';

export function tokenGetter() {
  return localStorage.getItem('AuthToken');
}

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ViewProductComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    UserProfileComponent,
    FooterComponent,
    WestNavigationComponent,
    EastNavigationComponent,
    RevenueManagementComponent,
    DeliveryManagementComponent,
    ProductCardComponent,
    TopSectionComponent,
    BottomSectionComponent,
    ProductsLeftSidebarComponent,
    ProductDetailsComponent,
    CartComponent,
    ProcessOrderComponent,
    CustomerOrdersComponent,
    CustomerAccountComponent,
    CustomerAddressComponent,
    CustomerLoginComponent,
    OrderSuccessComponent,
    OrderDetailsComponent,
    RecentlyViewedProductsComponent,
    RecommendedProductsComponent,
    ProductCategoriesNavigationComponent,
    ProductCategoriesMegamenuComponent,
    ProductsSliderComponent,
    ProductCategoriesListComponent,
    AddProductCategoryComponent,
    AttributeGroupsListComponent,
    AddAttributeGroupsComponent,
    AttributeListComponent,
    AddAttributeComponent,
    ProductSpecListComponent,
    AddProductSpecComponent,
    AttributesSpecsWrapperComponent,
    DataTableComponent,
    MatReferenceFieldComponent,
    AttributeValueListComponent,
    AddAttributeValueComponent,
    ApplicationLayoutWrapperComponent,
    LayoutConfigComponent,
    TabLayoutComponent,
    SideNavigationTabComponent,
    AddLayoutConfigComponent,
    AddTabLayoutComponent,
    AddSideNavigationTabComponent,
    ApplicationModelWrapperComponent,
    ObjectTypeComponent,
    AddObjectTypeComponent,
    CharacteristicListComponent,
    AddCharacteristicComponent,
  ],

  //Modules go here
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModules,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InfiniteScrollModule,
    NgxSummernoteModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8080'],
        skipWhenExpired: true
      }
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  //All the services go here
  providers:
    [ AuthGuard,
      AlertService,
      UserService,
      ProductService,
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
      ],

  bootstrap: [AppComponent]
})
export class AppModule { }
