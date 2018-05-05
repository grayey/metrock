import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }


    /*
    * This method sets navigation since the navbar javascript hinders routerlink action
    * */

    public setNavBarNavigation(url: string) {
        let path = `dashboard/setup/${url}`;
        path = (url === 'dashboard') ? 'dashboard' : path;
        return this._router.navigateByUrl(path);
    }

}
