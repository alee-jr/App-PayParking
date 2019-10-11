import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUserPage } from './listar-user.page';

describe('ListarUserPage', () => {
  let component: ListarUserPage;
  let fixture: ComponentFixture<ListarUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
