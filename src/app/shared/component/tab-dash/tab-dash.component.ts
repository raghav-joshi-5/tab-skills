import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-dash',
  templateUrl: './tab-dash.component.html',
  styleUrls: ['./tab-dash.component.scss'],
})
export class TabDashComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  selectedSkill: string = 'html';

  // onSelect(skill: string) {
  //   // console.log(skill);
  //   this.selectedSkill = skill;
  // }
}
