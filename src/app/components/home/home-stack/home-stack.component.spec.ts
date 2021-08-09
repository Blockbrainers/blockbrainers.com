import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStackComponent } from './home-stack.component';

describe('HomeStackComponent', () => {
  let component: HomeStackComponent;
  let fixture: ComponentFixture<HomeStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeStackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
