import { Component, OnInit, Optional } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { SpeechModel } from '../shared/models/Speech.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SpeechService } from '../shared/services/Speech.service';

@Component({
  selector: 'app-speechview',
  templateUrl: './speechview.component.html',
  styleUrls: ['./speechview.component.sass']
})
export class SpeechviewComponent implements OnInit {

  modal = false;
  speechService: SpeechService;
  speech: SpeechModel;
  service: any;

  constructor(speechSvc: SpeechService,
    @Optional() private bsModalRef: BsModalRef,
    @Optional() private route: ActivatedRoute,
    @Optional() private router: Router) { 
      this.speechService = speechSvc;
    }

  ngOnInit() {
    if (this.route) {
      let data = this.route.snapshot.paramMap.get('id');
      let id: number;

      id = parseInt(data);
      this.speechService.getSpeechList().subscribe((data) => {
        this.speech = data.filter(_ => _.id === id)[0];
      });
    }

    this.speech = this.speech ? this.speech : new SpeechModel();
  }

  close() {
    this.bsModalRef.hide();
  }
}
