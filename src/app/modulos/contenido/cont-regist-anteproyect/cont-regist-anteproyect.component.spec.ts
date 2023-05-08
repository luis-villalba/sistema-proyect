import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContRegistAnteproyectComponent } from './cont-regist-anteproyect.component';

describe('ContRegistAnteproyectComponent', () => {
  let component: ContRegistAnteproyectComponent;
  let fixture: ComponentFixture<ContRegistAnteproyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContRegistAnteproyectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContRegistAnteproyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
