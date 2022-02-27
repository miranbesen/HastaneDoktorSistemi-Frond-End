import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HastaneComponent } from './hastane.component';

describe('HastaneComponent', () => {
  let component: HastaneComponent;
  let fixture: ComponentFixture<HastaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HastaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HastaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
