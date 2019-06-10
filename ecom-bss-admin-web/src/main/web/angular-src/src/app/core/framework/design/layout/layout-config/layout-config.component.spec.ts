import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutConfigComponent } from './layout-config.component';

describe('LayoutConfigComponent', () => {
  let component: LayoutConfigComponent;
  let fixture: ComponentFixture<LayoutConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
