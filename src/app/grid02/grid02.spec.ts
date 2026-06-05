import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid02 } from './grid02';

describe('Grid02', () => {
  let component: Grid02;
  let fixture: ComponentFixture<Grid02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grid02]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grid02);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
