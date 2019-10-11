import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUserPage } from './info-user.page';

describe('InfoUserPage', () => {
  let component: InfoUserPage;
  let fixture: ComponentFixture<InfoUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
