import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdComponent } from './ad.component';

describe('AdComponent', () => {
  let component: AdComponent;
  let fixture: ComponentFixture<AdComponent>;

 

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdComponent]
    });
    fixture = TestBed.createComponent(AdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
