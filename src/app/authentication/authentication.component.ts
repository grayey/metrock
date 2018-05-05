import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {NotificationService} from '../../services/notification.service';
import {Router} from "@angular/router";
import {ScriptLoaderService} from "../../services/script-loader.service";

declare const $: any;


@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

    public userLoginForm: FormGroup;

    static userLoginForm() {
        return {
            username: ['', Validators.compose([Validators.required])],
            password: ['', Validators.compose([Validators.required])]
        };
    }

    constructor(private fb: FormBuilder,
                private _router: Router,
                private _script: ScriptLoaderService,
                private Alert: NotificationService) {
        this.userLoginForm = this.fb.group(AuthenticationComponent.userLoginForm());
    }

    ngOnInit() {

        $('#trycn').modal();
    }



    public logUserIn() {
        this.authenticateUser();
    }


    private authenticateUser() {
        const loginObject = this.userLoginForm.value;
        return (loginObject['username'].toLowerCase() === 'jeph'
            &&
            loginObject['password'].toLowerCase() === 'emeka') ?
            this._router.navigateByUrl('/dashboard') :
            this.Alert.error('Invalid Credentials');
    }

}
