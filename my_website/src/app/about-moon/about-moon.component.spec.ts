import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMoonComponent } from './about-moon.component';

describe('AboutMoonComponent', () => {
  let component: AboutMoonComponent;
  let fixture: ComponentFixture<AboutMoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
