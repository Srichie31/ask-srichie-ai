import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBarComponent } from './input-bar.component';

describe('InputBarComponent', () => {
  let component: InputBarComponent;
  let fixture: ComponentFixture<InputBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
