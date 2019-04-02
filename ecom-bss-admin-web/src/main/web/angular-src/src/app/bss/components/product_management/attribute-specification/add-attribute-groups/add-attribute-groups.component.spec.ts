import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttributeGroupsComponent } from './add-attribute-groups.component';

describe('AddAttributeGroupsComponent', () => {
  let component: AddAttributeGroupsComponent;
  let fixture: ComponentFixture<AddAttributeGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAttributeGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAttributeGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
