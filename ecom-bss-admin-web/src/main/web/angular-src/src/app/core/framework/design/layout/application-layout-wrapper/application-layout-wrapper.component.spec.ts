import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationLayoutWrapperComponent } from './application-layout-wrapper.component';

describe('ApplicationLayoutWrapperComponent', () => {
  let component: ApplicationLayoutWrapperComponent;
  let fixture: ComponentFixture<ApplicationLayoutWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationLayoutWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationLayoutWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
