import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicaddfieldsComponent } from './dynamicaddfields.component';

describe('DynamicaddfieldsComponent', () => {
  let component: DynamicaddfieldsComponent;
  let fixture: ComponentFixture<DynamicaddfieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicaddfieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicaddfieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
