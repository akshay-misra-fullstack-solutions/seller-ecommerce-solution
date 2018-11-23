import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EastNavigationComponent } from './east-navigation.component';

describe('EastNavigationComponent', () => {
  let component: EastNavigationComponent;
  let fixture: ComponentFixture<EastNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EastNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EastNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
