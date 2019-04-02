import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesSpecsWrapperComponent } from './attributes-specs-wrapper.component';

describe('AttributesSpecsWrapperComponent', () => {
  let component: AttributesSpecsWrapperComponent;
  let fixture: ComponentFixture<AttributesSpecsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributesSpecsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributesSpecsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
