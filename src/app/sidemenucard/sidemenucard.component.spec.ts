import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenucardComponent } from './sidemenucard.component';

describe('SidemenucardComponent', () => {
  let component: SidemenucardComponent;
  let fixture: ComponentFixture<SidemenucardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidemenucardComponent]
    });
    fixture = TestBed.createComponent(SidemenucardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
