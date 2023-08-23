import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangChangeComponent } from './lang-change.component';

describe('LangChangeComponent', () => {
  let component: LangChangeComponent;
  let fixture: ComponentFixture<LangChangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LangChangeComponent]
    });
    fixture = TestBed.createComponent(LangChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
