import { Component, OnInit } from '@angular/core';
import { ServiceFamilyService } from '../service-family.service';
import { EstyleBrotherDirective } from '../estyle-brother.directive';
import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-brother',
  standalone: true,
  imports: [EstyleBrotherDirective, DatePipe, CurrencyPipe, DecimalPipe, PercentPipe],
  templateUrl: './brother.component.html',
  styleUrl: './brother.component.css'
})
export class BrotherComponent implements OnInit {

  name ?: string;

  fecha : Date = new Date();

  dolar : number = 100.5

  valuePi :  number = Math.PI

  percent : number = 0.5;

  constructor(private _serviceFamily : ServiceFamilyService){}

  ngOnInit(): void {
    this._serviceFamily.setYoungerBrother('juan')
    this.name = this._serviceFamily.getYoungerBrother()
  }

  greet(){
    this._serviceFamily.greet(this._serviceFamily.getOldBrother() || "")
  }

  message(){
    console.log(this._serviceFamily.message())
  }






  /* name ?: string;

  constructor(private _servideFamily : ServiceFamilyService){

  }


  ngOnInit(): void {
    this._servideFamily.setYoungerBrother('Pedro');
    this.name = this._servideFamily.getYoungerBrother();
  }

  greet(){
    this._servideFamily.greet(this._servideFamily.getOldBrother() || "")
  }

  ask(){
    console.log(this._servideFamily.askToSon())
  } */

}
