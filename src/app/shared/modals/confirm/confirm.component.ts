import { OnInit, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html'
})
export class ConfirmComponent implements OnInit {

    public onClose: Subject<any>;
    
    message = {
        title: "Confirm",
        content: "Do you really wish to proceed?",
        confirm: "Yes",
        cancel: "No"
    }

    constructor(private bsModalRef: BsModalRef) {
        
    }

    ngOnInit(): void {
        this.onClose = new Subject;
    }

    onSubmit(response: boolean) {
        this.onClose.next({ action: response });
        this.bsModalRef.hide();
    }

    onExit() {
        this.bsModalRef.hide();
    }

}