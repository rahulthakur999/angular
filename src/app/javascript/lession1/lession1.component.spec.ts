import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lession1Component } from './lession1.component';

describe('Lession1Component', () => {
  let component: Lession1Component;
  let fixture: ComponentFixture<Lession1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lession1Component]
    });
    fixture = TestBed.createComponent(Lession1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
