import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ScriptLoaderService} from '../../../services/script-loader.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class DashboardHomeComponent implements OnInit, AfterViewInit {

    constructor(private _script: ScriptLoaderService) {
        // loadApp();
    }

  ngOnInit() {

  }

    ngAfterViewInit() {
        this._script.load('app-dashboard',  'assets/pages/dashborad.js');
    }

}
