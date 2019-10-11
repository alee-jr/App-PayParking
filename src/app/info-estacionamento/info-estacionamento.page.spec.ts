import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEstacionamentoPage } from './info-estacionamento.page';

describe('InfoEstacionamentoPage', () => {
  let component: InfoEstacionamentoPage;
  let fixture: ComponentFixture<InfoEstacionamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoEstacionamentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEstacionamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
