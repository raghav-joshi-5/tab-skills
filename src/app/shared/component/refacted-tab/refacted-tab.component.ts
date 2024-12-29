import { Component, OnInit } from '@angular/core';
import { Itab } from '../../module/tab';
import { tabs } from '../../const/tab';

@Component({
  selector: 'app-refacted-tab',
  templateUrl: './refacted-tab.component.html',
  styleUrls: ['./refacted-tab.component.scss'],
})
export class RefactedTabComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  selectedSkill: string = 'html';

  tabArr: Array<Itab> = tabs;
}
