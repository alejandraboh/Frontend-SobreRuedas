import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarInformesComponent } from './eliminar-informes.component';

describe('EliminarInformesComponent', () => {
  let component: EliminarInformesComponent;
  let fixture: ComponentFixture<EliminarInformesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarInformesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarInformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
