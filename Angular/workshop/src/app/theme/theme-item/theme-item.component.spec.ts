import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeItemComponent } from './theme-item.component';

describe('ThemeItemComponent', () => {
  let component: ThemeItemComponent;
  let fixture: ComponentFixture<ThemeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
