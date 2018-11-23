import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoriesNavigationComponent } from './product-categories-navigation.component';

describe('ProductCategoriesNavigationComponent', () => {
  let component: ProductCategoriesNavigationComponent;
  let fixture: ComponentFixture<ProductCategoriesNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategoriesNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoriesNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
