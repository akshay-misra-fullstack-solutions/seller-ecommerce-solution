import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSideNavigationTabComponent } from './add-side-navigation-tab.component';

describe('AddSideNavigationTabComponent', () => {
  let component: AddSideNavigationTabComponent;
  let fixture: ComponentFixture<AddSideNavigationTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSideNavigationTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSideNavigationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
