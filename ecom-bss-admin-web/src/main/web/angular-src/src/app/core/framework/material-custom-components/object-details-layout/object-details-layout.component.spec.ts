import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectDetailsLayoutComponent } from './object-details-layout.component';

describe('ObjectDetailsLayoutComponent', () => {
  let component: ObjectDetailsLayoutComponent;
  let fixture: ComponentFixture<ObjectDetailsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectDetailsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectDetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
