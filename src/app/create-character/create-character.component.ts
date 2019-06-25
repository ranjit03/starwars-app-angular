import { Component, OnInit } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    {display: 'none', value: ''},
    {display: 'Light', value:'light'},
    {display:'Dark', value:'dark'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
