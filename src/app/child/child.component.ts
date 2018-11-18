import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h1 (click)="output.next(type)">Alert {{type}}</h1>
    <input [(ngModel)]="type" type="text" (ngModelChange)="onChangeQty($event)">
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() type: string = "success";
  @Output() output = new EventEmitter();

  onChangeQty(type: any){
    //this.output.next(type);
    this.output.emit(type);
  }

  constructor() { }

  ngOnInit() {
  }

}
