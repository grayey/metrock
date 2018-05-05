import { Component, OnInit } from '@angular/core';
import * as DT from '../../../../shared/magic-methods/ui';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    DT.run();
  }

}
