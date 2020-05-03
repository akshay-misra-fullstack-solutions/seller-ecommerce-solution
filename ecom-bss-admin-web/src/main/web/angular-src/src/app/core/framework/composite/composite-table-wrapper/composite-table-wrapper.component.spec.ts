import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositeTableWrapperComponent } from './composite-table-wrapper.component';

describe('CompositeTableWrapperComponent', () => {
  let component: CompositeTableWrapperComponent;
  let fixture: ComponentFixture<CompositeTableWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompositeTableWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositeTableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
