import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAntojitosComponent } from './menu-antojitos.component';

describe('MenuAntojitosComponent', () => {
  let component: MenuAntojitosComponent;
  let fixture: ComponentFixture<MenuAntojitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAntojitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAntojitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
