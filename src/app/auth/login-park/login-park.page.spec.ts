import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginParkPage } from './login-park.page';

describe('LoginParkPage', () => {
  let component: LoginParkPage;
  let fixture: ComponentFixture<LoginParkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginParkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginParkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
