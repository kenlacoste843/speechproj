import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechviewComponent } from './speechview.component';

describe('SpeechviewComponent', () => {
  let component: SpeechviewComponent;
  let fixture: ComponentFixture<SpeechviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
