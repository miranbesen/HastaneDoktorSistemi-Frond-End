import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHasComponent } from './show-has.component';

describe('ShowHasComponent', () => {
  let component: ShowHasComponent;
  let fixture: ComponentFixture<ShowHasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
