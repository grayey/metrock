import { Component, OnInit } from '@angular/core';
import * as DT from '../../../../shared/magic-methods/ui';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
DT.run();
  }

}
