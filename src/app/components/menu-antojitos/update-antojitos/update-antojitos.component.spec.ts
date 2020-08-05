import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAntojitosComponent } from './update-antojitos.component';

describe('UpdateAntojitosComponent', () => {
  let component: UpdateAntojitosComponent;
  let fixture: ComponentFixture<UpdateAntojitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAntojitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAntojitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
