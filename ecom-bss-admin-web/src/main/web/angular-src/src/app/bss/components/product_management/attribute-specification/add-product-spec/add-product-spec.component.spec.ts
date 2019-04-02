import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductSpecComponent } from './add-product-spec.component';

describe('AddProductSpecComponent', () => {
  let component: AddProductSpecComponent;
  let fixture: ComponentFixture<AddProductSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
