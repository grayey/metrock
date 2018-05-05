import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AuthenticationComponent} from './authentication/authentication.component';
import {APP_ROUTES} from './app-routing';
import {ErrorPageComponent} from './error-page/error-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NotificationService} from '../services/notification.service';
import {NotificationComponent} from '../shared/components/notification/notification.component';
import {ValidationErrorService} from '../services/validation-error.service';
import {EventsService} from "../services/event.service";
import {ScriptLoaderService} from "../services/script-loader.service";


@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        ErrorPageComponent,
        NotificationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(APP_ROUTES)
    ],
    providers: [NotificationService, ValidationErrorService, EventsService,ScriptLoaderService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
