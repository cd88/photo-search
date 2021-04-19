import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowItemComponent } from './grow-item.component';

describe('GrowItemComponent', () => {
  let component: GrowItemComponent;
  let fixture: ComponentFixture<GrowItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
