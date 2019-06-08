import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgxDatatableModule  } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeechService } from './shared/services/Speech.service';
import { NavComponent } from './shared/nav/nav..component';
import { ConfirmComponent } from './shared/modals/confirm/confirm.component';
import { SharetomailComponent } from './shared/modals/share-to-email/share-to-email.component';
import { SpeechlistComponent } from './speechlist/speechlist.component';
import { SpeechviewComponent } from './speechview/speechview.component';
import { SpeechmodifyComponent } from './speechmodify/speechmodify.component';

@NgModule({
  entryComponents: [
    SpeechviewComponent,
    SpeechmodifyComponent,
    SharetomailComponent,
    ConfirmComponent
  ],
  declarations: [
    AppComponent,
    ConfirmComponent,
    SharetomailComponent,
    NavComponent,
    SpeechlistComponent,
    SpeechviewComponent,
    SpeechmodifyComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [SpeechService],
  bootstrap: [AppComponent]
})
export class AppModule { }
