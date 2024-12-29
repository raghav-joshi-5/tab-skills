import { Component, OnInit } from '@angular/core';
import { Itab } from '../../module/tab';

@Component({
  selector: 'app-refacted-tab',
  templateUrl: './refacted-tab.component.html',
  styleUrls: ['./refacted-tab.component.scss'],
})
export class RefactedTabComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  selectedSkill: string = 'html';

  tabArr: Array<Itab> = [
    {
      tabtitle: 'HTML',
      tabContent: `<p class="alert alert-warning"><strong>HTML</strong> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Laudantium dolor unde architecto, animi tenetur
            molestias explicabo iste iure omnis ratione quibusdam numquam, culpa
            beatae quidem!</p>`,
      skillName: 'html',
    },
    {
      tabtitle: 'CSS',
      tabContent: `<p class="alert alert-warning"><strong>css</strong> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Laudantium dolor unde architecto, animi tenetur
            molestias explicabo iste iure omnis ratione quibusdam numquam, culpa
            beatae quidem!</p>`,
      skillName: 'css',
    },
    {
      tabtitle: 'JAVASCRIPT',
      tabContent: `<p class="alert alert-warning"><strong>javascript</strong> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Laudantium dolor unde architecto, animi tenetur
            molestias explicabo iste iure omnis ratione quibusdam numquam, culpa
            beatae quidem!</p>`,
      skillName: 'javascript',
    },
    {
      tabtitle: 'ANGULAR 14',
      tabContent: `<p class="alert alert-warning"><strong>angular 14</strong> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Laudantium dolor unde architecto, animi tenetur
            molestias explicabo iste iure omnis ratione quibusdam numquam, culpa
            beatae quidem!</p>`,
      skillName: 'angular 14',
    },
  ];
}
