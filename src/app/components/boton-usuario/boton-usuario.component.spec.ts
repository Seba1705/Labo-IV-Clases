import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonUsuarioComponent } from './boton-usuario.component';

describe('BotonUsuarioComponent', () => {
  let component: BotonUsuarioComponent;
  let fixture: ComponentFixture<BotonUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
