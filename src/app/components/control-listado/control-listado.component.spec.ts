import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlListadoComponent } from './control-listado.component';

describe('ControlListadoComponent', () => {
  let component: ControlListadoComponent;
  let fixture: ComponentFixture<ControlListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
