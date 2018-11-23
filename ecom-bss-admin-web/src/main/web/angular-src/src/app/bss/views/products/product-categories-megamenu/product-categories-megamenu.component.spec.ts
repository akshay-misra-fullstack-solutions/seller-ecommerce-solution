import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoriesMegamenuComponent } from './product-categories-megamenu.component';

describe('ProductCategoriesMegamenuComponent', () => {
  let component: ProductCategoriesMegamenuComponent;
  let fixture: ComponentFixture<ProductCategoriesMegamenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategoriesMegamenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoriesMegamenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
