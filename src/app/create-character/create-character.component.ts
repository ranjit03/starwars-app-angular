import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import {StarWarsService} from '../star-wars.service'

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  @Output() newCharacter = new EventEmitter <{name:string, side:string}>();
  availableSides = [
    {display: 'none', value: ''},
    {display: 'Light', value:'light'},
    {display:'Dark', value:'dark'}
  ]
  swService: StarWarsService

  constructor(swService: StarWarsService) {
    this.swService = swService;
   }

  ngOnInit() {
  }
  onSubmit(SubmittedForm){
    console.log(SubmittedForm.value.name)
    this.swService.addCharacter(SubmittedForm.value.name, SubmittedForm.value.side);
  }

}
