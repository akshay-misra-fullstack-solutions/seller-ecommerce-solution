import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import {AngularMaterialModules} from './material-module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {JwtModule} from '@auth0/angular-jwt';
import { NgxSummernoteModule } from 'ngx-summernote';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { FormsModule} from '@angular/forms';
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
import { AttributeGroupsListComponent } from './bss/components/product_management/attribute-specification/attribute-groups-list/attribute-groups-list.component';
import { AddAttributeGroupsComponent } from './bss/components/product_management/attribute-specification/add-attribute-groups/add-attribute-groups.component';
import { AttributeListComponent } from './bss/components/product_management/attribute-specification/attribute-list/attribute-list.component';
import { AddAttributeComponent } from './bss/components/product_management/attribute-specification/add-attribute/add-attribute.component';
import { ProductSpecListComponent } from './bss/components/product_management/attribute-specification/product-spec-list/product-spec-list.component';
import { AddProductSpecComponent } from './bss/components/product_management/attribute-specification/add-product-spec/add-product-spec.component';
import { AttributesSpecsWrapperComponent } from './bss/components/product_management/attribute-specification/attributes-specs-wrapper/attributes-specs-wrapper.component';
import { DataTableComponent } from './bss/views/data-table/data-table.component';

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
  ],

  //Modules go here
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModules,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
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
    [AuthGuard,
    AlertService,
    UserService,
    ProductService,
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
      ],

  bootstrap: [AppComponent]
})
export class AppModule { }
