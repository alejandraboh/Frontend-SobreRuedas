import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarInformesComponent } from './buscar-informes.component';

describe('BuscarInformesComponent', () => {
  let component: BuscarInformesComponent;
  let fixture: ComponentFixture<BuscarInformesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarInformesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarInformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
