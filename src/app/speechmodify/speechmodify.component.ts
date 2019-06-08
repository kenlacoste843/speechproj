import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SpeechModel } from '../shared/models/Speech.model';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CommonModule } from '../shared/common.module';

@Component({
  selector: 'app-speechmodify',
  templateUrl: './speechmodify.component.html',
  styleUrls: ['./speechmodify.component.sass']
})
export class SpeechmodifyComponent implements OnInit {

  public onClose: Subject<any>;
  eJsRegx = CommonModule.emailRegex;
  
  speechForm = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([
      Validators.pattern(this.eJsRegx),
      Validators.required
    ])),
    date: new FormControl(''),
    content: new FormControl('', Validators.required)
  });

  speechList: SpeechModel[];
  speech: SpeechModel;
  validate = false;

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.onClose = new Subject();
    this.speech = this.speech ? this.speech : new SpeechModel();

    this.speechForm.patchValue({
      title: this.speech.title,
      author: this.speech.author,
      email: this.speech.email,
      content: this.speech.content,
      date: this.speech.date
    });
  }

  onSubmit(speechEntry: any) {
    let model = this.speech ? this.speech : new SpeechModel;
    model.title = speechEntry.title;
    model.author = speechEntry.author;
    model.content = speechEntry.content;
    model.date = speechEntry.date ? speechEntry.date : new Date();
    model.email = speechEntry.email;
    model.id = model.id !== undefined ? model.id : undefined;

    let found: any;
    if (model.id !== undefined) {
      found = this.speechList.find(_ => _.id === model.id);
    }

    if (!(found)) {
      model.id = Math.max(...this.speechList.map(_ => _.id), 0);
      model.id++;
      this.speechList.push(model);
    } else {
      if (found.length) { found[0] = model; } else { found = model; }
    }

    this.onClose.next({
      speechList: this.speechList,
      action: true
    });
    this.bsModalRef.hide();
  }

  onExit() {
    this.onClose.next({
      action: false
    });
    this.bsModalRef.hide();
  }

  returnString(prop) {
    var jsonObject = this.speechForm.controls[prop];
    return JSON.stringify(jsonObject.errors);
  }

}
