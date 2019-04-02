import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeGroupsListComponent } from './attribute-groups-list.component';

describe('AttributeGroupsListComponent', () => {
  let component: AttributeGroupsListComponent;
  let fixture: ComponentFixture<AttributeGroupsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeGroupsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeGroupsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
