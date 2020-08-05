import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAntojitosComponent } from './register-antojitos.component';

describe('RegisterAntojitosComponent', () => {
  let component: RegisterAntojitosComponent;
  let fixture: ComponentFixture<RegisterAntojitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAntojitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAntojitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
