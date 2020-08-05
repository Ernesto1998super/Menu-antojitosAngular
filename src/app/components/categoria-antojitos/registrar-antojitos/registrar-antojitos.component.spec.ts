import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAntojitosComponent } from './registrar-antojitos.component';

describe('RegistrarAntojitosComponent', () => {
  let component: RegistrarAntojitosComponent;
  let fixture: ComponentFixture<RegistrarAntojitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarAntojitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAntojitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
