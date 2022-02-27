import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDokComponent } from './show-dok.component';

describe('ShowDokComponent', () => {
  let component: ShowDokComponent;
  let fixture: ComponentFixture<ShowDokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
