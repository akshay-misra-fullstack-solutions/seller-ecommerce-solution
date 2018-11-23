import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLeftSidebarComponent } from './products-left-sidebar.component';

describe('ProductsLeftSidebarComponent', () => {
  let component: ProductsLeftSidebarComponent;
  let fixture: ComponentFixture<ProductsLeftSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsLeftSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
