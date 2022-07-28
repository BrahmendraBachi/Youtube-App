import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachHomeComponent } from './serach-home.component';

describe('SerachHomeComponent', () => {
  let component: SerachHomeComponent;
  let fixture: ComponentFixture<SerachHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerachHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
