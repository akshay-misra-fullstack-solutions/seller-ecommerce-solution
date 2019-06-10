import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLayoutConfigComponent } from './add-layout-config.component';

describe('AddLayoutConfigComponent', () => {
  let component: AddLayoutConfigComponent;
  let fixture: ComponentFixture<AddLayoutConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLayoutConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLayoutConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
