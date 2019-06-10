import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationModelWrapperComponent } from './application-model-wrapper.component';

describe('ApplicationModelWrapperComponent', () => {
  let component: ApplicationModelWrapperComponent;
  let fixture: ComponentFixture<ApplicationModelWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationModelWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationModelWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
