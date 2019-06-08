import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechlistComponent } from './speechlist.component';

describe('SpeechlistComponent', () => {
  let component: SpeechlistComponent;
  let fixture: ComponentFixture<SpeechlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
