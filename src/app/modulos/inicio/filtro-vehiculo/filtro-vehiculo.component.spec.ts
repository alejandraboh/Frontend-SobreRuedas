import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroVehiculoComponent } from './filtro-vehiculo.component';

describe('FiltroVehiculoComponent', () => {
  let component: FiltroVehiculoComponent;
  let fixture: ComponentFixture<FiltroVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
