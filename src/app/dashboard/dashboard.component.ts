import {AfterViewInit, Component, OnInit} from '@angular/core';

import {ScriptLoaderService} from '../../services/script-loader.service';
import {NavigationStart, Router} from '@angular/router';
 import * as DT from '../../shared/magic-methods/ui';



@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor(private _script: ScriptLoaderService,
                private _router: Router) {

    }

    ngOnInit() {
    }





}
