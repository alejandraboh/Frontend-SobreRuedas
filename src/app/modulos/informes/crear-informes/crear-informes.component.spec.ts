import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInformesComponent } from './crear-informes.component';

describe('CrearInformesComponent', () => {
  let component: CrearInformesComponent;
  let fixture: ComponentFixture<CrearInformesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearInformesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearInformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
