import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeListComponent } from './attribute-list.component.ts';

describe('AttributeListComponent', () => {
  let component: AttributeListComponent;
  let fixture: ComponentFixture<AttributeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});