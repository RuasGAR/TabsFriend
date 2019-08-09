import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepostComponent } from './prepost.component';

describe('PrepostComponent', () => {
  let component: PrepostComponent;
  let fixture: ComponentFixture<PrepostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepostComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
