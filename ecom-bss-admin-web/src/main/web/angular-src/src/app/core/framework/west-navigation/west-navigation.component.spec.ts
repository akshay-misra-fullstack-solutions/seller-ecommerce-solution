import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WestNavigationComponent } from './west-navigation.component';

describe('WestNavigationComponent', () => {
  let component: WestNavigationComponent;
  let fixture: ComponentFixture<WestNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WestNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
