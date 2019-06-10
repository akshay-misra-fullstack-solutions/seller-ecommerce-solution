import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationTabComponent } from './side-navigation-tab.component';

describe('SideNavigationTabComponent', () => {
  let component: SideNavigationTabComponent;
  let fixture: ComponentFixture<SideNavigationTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavigationTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavigationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
