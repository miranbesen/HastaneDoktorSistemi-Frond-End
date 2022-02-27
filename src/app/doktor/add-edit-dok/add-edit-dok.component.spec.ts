import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDokComponent } from './add-edit-dok.component';

describe('AddEditDokComponent', () => {
  let component: AddEditDokComponent;
  let fixture: ComponentFixture<AddEditDokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
