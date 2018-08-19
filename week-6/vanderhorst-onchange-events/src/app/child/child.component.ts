import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="child">
      <h2>Child</h2>
      <div>Greeting: {{ greeting }}</div>
      <br>
      <div>User name: {{ user.name }}</div>
    </div>
  `,
  styles: [`
    .child {
      background: #9e9e9e;
      padding: 25px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 50px;
      width: 60%;
      font-weight: 800;
    }
  `]
})
export class ChildComponent implements OnChanges {

  @Input() greeting: string;
  @Input() user: { name: string };

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }
}
