import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTabLayoutComponent } from './add-tab-layout.component';

describe('AddTabLayoutComponent', () => {
  let component: AddTabLayoutComponent;
  let fixture: ComponentFixture<AddTabLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTabLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTabLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
