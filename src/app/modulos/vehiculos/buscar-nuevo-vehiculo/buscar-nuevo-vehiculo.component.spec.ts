import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarNuevoVehiculoComponent } from './buscar-nuevo-vehiculo.component';

describe('BuscarNuevoVehiculoComponent', () => {
  let component: BuscarNuevoVehiculoComponent;
  let fixture: ComponentFixture<BuscarNuevoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarNuevoVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarNuevoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
