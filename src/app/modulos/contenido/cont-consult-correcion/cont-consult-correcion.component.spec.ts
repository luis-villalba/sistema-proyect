import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContConsultCorrecionComponent } from './cont-consult-correcion.component';

describe('ContConsultCorrecionComponent', () => {
  let component: ContConsultCorrecionComponent;
  let fixture: ComponentFixture<ContConsultCorrecionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContConsultCorrecionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContConsultCorrecionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
