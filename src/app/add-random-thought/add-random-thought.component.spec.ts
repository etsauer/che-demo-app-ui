import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRandomThoughtComponent } from './add-random-thought.component';

describe('AddRandomThoughtComponent', () => {
  let component: AddRandomThoughtComponent;
  let fixture: ComponentFixture<AddRandomThoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRandomThoughtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRandomThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
