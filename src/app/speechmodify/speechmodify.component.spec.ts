import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechmodifyComponent } from './speechmodify.component';

describe('SpeechmodifyComponent', () => {
  let component: SpeechmodifyComponent;
  let fixture: ComponentFixture<SpeechmodifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechmodifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechmodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
