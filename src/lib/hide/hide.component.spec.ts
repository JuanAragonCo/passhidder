import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HideComponent } from './hide.component';

describe('HideComponent', () => {
  let component: HideComponent;
  let fixture: ComponentFixture<HideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
