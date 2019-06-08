import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

import { SpeechModel } from '../shared/models/Speech.model';
import { SpeechService } from '../shared/services/Speech.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SpeechviewComponent } from '../speechview/speechview.component';
import { SpeechmodifyComponent } from '../speechmodify/speechmodify.component';
import { ConfirmComponent } from '../shared/modals/confirm/confirm.component';
import { SharetomailComponent } from '../shared/modals/share-to-email/share-to-email.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-speechlist',
  templateUrl: './speechlist.component.html',
  styleUrls: ['./speechlist.component.sass']
})
export class SpeechlistComponent implements OnInit {

  @ViewChild('table', null) table: any;
  @ViewChild('colAction', null) colAction: TemplateRef<any>;

  modalRef: BsModalRef;
  speechService: SpeechService;
  speechList: SpeechModel[];
  rows: SpeechModel[];
  columns: any[];

  constructor(speechSvc: SpeechService, private bsModalSvc: BsModalService, private toastr: ToastrService) {
    this.speechService = speechSvc;
  }

  private refreshList() {
    this.rows = this.speechList;
    this.rows = [...this.rows];
    this.table.offset = 0;
  }

  ngOnInit() {

    this.columns = [
      { flexGrow: 2, sortable: false, headerClass: 'cellBlock', cellClass: 'cellBlock', cellTemplate: this.colAction },
      { flexGrow: 2, sortable: false, headerClass: 'visible-xs visible-sm', cellClass: 'visible-xs visible-sm' },
      { flexGrow: 1, name: 'No.', prop: 'id', headerClass: 'hidden-xs hidden-sm', cellClass: 'hidden-xs hidden-sm' },
      { flexGrow: 2, name: 'Title', prop: 'title' },
      { flexGrow: 2, sortable: false, headerClass: 'visible-xs visible-sm', cellClass: 'visible-xs visible-sm' },
      { flexGrow: 2, name: 'Author', prop: 'author' },
      { flexGrow: 2, name: 'Email', prop: 'email', headerClass: 'hidden-xs hidden-sm', cellClass: 'hidden-xs hidden-sm' },
    ]

    this.speechService.getSpeechList().subscribe((data) => {
      this.speechList = data;
      this.refreshList();
    });
  }

  updateFilter(event) {
    const val = event.target.value;
    const temp = this.speechList.filter(function (d) {
      return (d.id !== undefined && d.id.toString().indexOf(val) !== -1 ||
        d.author && d.author.toString().indexOf(val) !== -1 ||
        d.email && d.email.toString().indexOf(val) !== -1 ||
        d.content && d.content.toString().indexOf(val) !== -1 ||
        d.tags && d.tags.toString().indexOf(val) !== -1 ||
        d.title && d.title.toString().indexOf(val) !== -1) || !val
        ;
    });
    this.rows = temp;
    this.refreshList();
  }

  viewSpeech(speechModel: SpeechModel) {
    const initialState = {
      speech: speechModel,
      modal: true
    };
    this.modalRef = this.bsModalSvc.show(SpeechviewComponent, { initialState });
  }

  newSpeech() {
    const initialState = {
      speechList: this.speechList,
      speech: undefined,
      modal: true
    };

    this.modalRef = this.bsModalSvc.show(SpeechmodifyComponent, { initialState });
    this.modalRef.content.onClose.subscribe((data) => {
      if (data.action) {
        this.speechList = data.speechList;
        this.refreshList();
        this.toastr.success('Add speech successful!');
      }
    });
  }

  editSpeech(speechModel: SpeechModel) {
    const initialState = {
      speechList: this.speechList,
      speech: speechModel,
      modal: true
    };

    this.modalRef = this.bsModalSvc.show(SpeechmodifyComponent, { initialState });
    this.modalRef.content.onClose.subscribe((data) => {
      if (data.action) {
        this.speechList = data.speechList;
        this.refreshList();
        this.toastr.success('Edit speech successful!');
      }
    });
  }

  deleteSpeech(speechModel: SpeechModel) {
    this.modalRef = this.bsModalSvc.show(ConfirmComponent, {});
    this.modalRef.content.onClose.subscribe((data) => {
      if (data.action) {
        this.speechList = this.speechList.filter(_ => _ !== speechModel);
        this.refreshList();
        this.toastr.success('Delete speech successful!');
      }
    });
  }

  shareSpeech(speechModel: SpeechModel) {
    const initialState = {
      speech: speechModel
    };
    this.modalRef = this.bsModalSvc.show(SharetomailComponent, { initialState });
  }

}
