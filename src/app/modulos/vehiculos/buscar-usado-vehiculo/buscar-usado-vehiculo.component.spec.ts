import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarUsadoVehiculoComponent } from './buscar-usado-vehiculo.component';

describe('BuscarUsadoVehiculoComponent', () => {
  let component: BuscarUsadoVehiculoComponent;
  let fixture: ComponentFixture<BuscarUsadoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarUsadoVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarUsadoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
