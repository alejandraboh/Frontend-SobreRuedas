import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarInformesFechaComponent } from './buscar-informes-fecha.component';

describe('BuscarInformesFechaComponent', () => {
  let component: BuscarInformesFechaComponent;
  let fixture: ComponentFixture<BuscarInformesFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarInformesFechaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarInformesFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
