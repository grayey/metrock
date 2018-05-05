import { Component, OnInit } from '@angular/core';
import * as DT from '../../../../shared/magic-methods/ui';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    DT.run();
  }

}
