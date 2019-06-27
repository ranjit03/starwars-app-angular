import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  @Input() characters;
  @Output() sideAssigned = new EventEmitter <{name: string, side: string}>();


  constructor() { }

  ngOnInit() {
  }
  onSideAssigned(charInfo){
  
    this.sideAssigned.emit(charInfo)

  }
 

}
