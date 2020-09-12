import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonPaisComponent } from './boton-pais.component';

describe('BotonPaisComponent', () => {
  let component: BotonPaisComponent;
  let fixture: ComponentFixture<BotonPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
