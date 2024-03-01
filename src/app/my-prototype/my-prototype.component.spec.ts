import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPrototypeComponent } from './my-prototype.component';

describe('MyPrototypeComponent', () => {
  let component: MyPrototypeComponent;
  let fixture: ComponentFixture<MyPrototypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPrototypeComponent]
    });
    fixture = TestBed.createComponent(MyPrototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
