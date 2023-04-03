import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomThoughtsComponent } from './random-thoughts.component';

describe('RandomThoughtsComponent', () => {
  let component: RandomThoughtsComponent;
  let fixture: ComponentFixture<RandomThoughtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomThoughtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
