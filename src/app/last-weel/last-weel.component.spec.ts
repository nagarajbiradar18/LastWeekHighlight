import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastWeelComponent } from './last-weel.component';

describe('LastWeelComponent', () => {
  let component: LastWeelComponent;
  let fixture: ComponentFixture<LastWeelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastWeelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastWeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
