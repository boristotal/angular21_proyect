import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header02 } from './header02';

describe('Header02', () => {
  let component: Header02;
  let fixture: ComponentFixture<Header02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header02]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header02);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
