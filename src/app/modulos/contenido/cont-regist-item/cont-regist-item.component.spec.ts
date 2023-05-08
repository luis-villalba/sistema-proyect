import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContRegistItemComponent } from './cont-regist-item.component';

describe('ContRegistItemComponent', () => {
  let component: ContRegistItemComponent;
  let fixture: ComponentFixture<ContRegistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContRegistItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContRegistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
