import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInformesComponent } from './editar-informes.component';

describe('EditarInformesComponent', () => {
  let component: EditarInformesComponent;
  let fixture: ComponentFixture<EditarInformesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarInformesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
