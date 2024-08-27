import { Component, OnInit } from '@angular/core';
import { SonComponent } from "../son/son.component";
import { ServiceFamilyService } from '../service-family.service';
import { inject } from '@angular/core/testing';
import { MyOwnPipePipe } from '../my-own-pipe.pipe';

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [SonComponent, MyOwnPipePipe],
  templateUrl: './father.component.html',
  styleUrl: './father.component.css'
})
export class FatherComponent implements OnInit{

  name ?: string;

  /* private _serviceFamily = inject (ServiceFamilyService) */

  /* ngOnInit(): void {
    this._serviceFa
  } */

  constructor(private _serviceFamily : ServiceFamilyService){

  }

  ngOnInit(): void {
    this._serviceFamily.setOldBrother('Pedro');
    this.name = this._serviceFamily.getOldBrother();
  }

  greet(){
    this._serviceFamily.greet(this._serviceFamily.getYoungerBrother() || "")
  }

  message(){
    console.log(this._serviceFamily.message())
  }

 
  /* name ?: string;

  constructor(private _serviceFamily : ServiceFamilyService){

  } */

  /* private _serviceFamily2 = inject(ServiceFamilyService); */

  /* ngOnInit(): void {
    this._serviceFamily.setOldBrother('Juan');
    this.name = this._serviceFamily.getOldBrother();
  }

  greet(){
    this._serviceFamily.greet(this._serviceFamily.getYoungerBrother() || '');
  }

  ask(){
    console.log(this._serviceFamily.askToSon())
  } */



  /* contentDate = '';

  dateContent($event : string){
    this.contentDate = $event
  }



  message : string = "Hi, I'm learning ANGULAR"

  word : string = "I'm well";

  number : number = 0;

  increase(){
    this.number++;
  };

  decrease(){
    this.number--;
  };


  change(){
    if (this.word=="I'm well") {
      this.word = "I'm bad"
    }else{
      this.word = "I'm well"
    }
  }
  
  element : string = "Enviando un mesanje al hijo" */

  /* message : string = "I'm senting a message to my son" */
  

  /* dateContent = '';

  sendDate12($event : string ){
    this.dateContent = $event
  } */

  
  /* info : string = "How are you?"; */


  /* data = "";

  getData($event : string){
    this.data = $event;
  } */

  /* dateInfo : number = 0;

  increase(){
    this.dateInfo++;
  }

  decrease(){
    this.dateInfo--;
  } */



}
