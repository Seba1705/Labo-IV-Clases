import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPaisComponent } from './control-pais.component';

describe('ControlPaisComponent', () => {
  let component: ControlPaisComponent;
  let fixture: ComponentFixture<ControlPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
