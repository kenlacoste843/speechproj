import { OnInit, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SpeechModel } from '../../models/Speech.model';
import { CommonModule } from '../../common.module';

@Component({
    selector: 'app-share-to-email',
    templateUrl: './share-to-email.component.html'
})
export class SharetomailComponent implements OnInit {

    eJsRegx = CommonModule.emailRegex;

    submitForm = new FormGroup({
        email: new FormControl('', Validators.compose([
            Validators.pattern(this.eJsRegx),
            Validators.required
        ])),
    });

    speech: SpeechModel;

    public onClose: Subject<any>;

    constructor(private bsModalRef: BsModalRef) {

    }

    ngOnInit(): void {
        this.onClose = new Subject;
    }

    onSubmit(input: any) {
        const host = window.location.origin;
        const subject = encodeURI(`Title:${this.speech.title}`);
        const body = encodeURI(`Click to see speech ${host}/speechview/${this.speech.id}`);
        const mailTo = `mailto:${input.email}?subject=${subject}&body=${body}`;
        window.location.href = mailTo;
        this.bsModalRef.hide();
    }

    onExit() {
        this.bsModalRef.hide();
    }

}