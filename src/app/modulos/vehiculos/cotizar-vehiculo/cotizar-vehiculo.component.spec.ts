import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizarVehiculoComponent } from './cotizar-vehiculo.component';

describe('CotizarVehiculoComponent', () => {
  let component: CotizarVehiculoComponent;
  let fixture: ComponentFixture<CotizarVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotizarVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizarVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
