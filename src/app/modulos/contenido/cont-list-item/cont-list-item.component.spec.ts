import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContListItemComponent } from './cont-list-item.component';

describe('ContListItemComponent', () => {
  let component: ContListItemComponent;
  let fixture: ComponentFixture<ContListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
