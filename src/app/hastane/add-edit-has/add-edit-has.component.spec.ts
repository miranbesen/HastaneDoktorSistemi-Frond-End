import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditHasComponent } from './add-edit-has.component';

describe('AddEditHasComponent', () => {
  let component: AddEditHasComponent;
  let fixture: ComponentFixture<AddEditHasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditHasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditHasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
