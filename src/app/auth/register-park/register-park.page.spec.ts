import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterParkPage } from './register-park.page';

describe('RegisterParkPage', () => {
  let component: RegisterParkPage;
  let fixture: ComponentFixture<RegisterParkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterParkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterParkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
