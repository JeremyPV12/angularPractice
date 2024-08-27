import { Injectable, VERSION } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceFamilyService {

  /* oldBrother ?: string;
  youngerBrother ?: string;

  getOldBrother(): string{
    return this.oldBrother || '';
  }

  setOldBrother(brother: string){
    this.oldBrother = brother;
  }

  getYoungerBrother():string{
    return this.youngerBrother || '';
  }

  setYoungerBrother(brother: string){
    this.youngerBrother = brother
  }

  greet(brother: string){
    console.log(`Hi, ${brother}`)
  }

  askToSon(): string{
    return "How are you?";
  }

  constructor() { } */


  oldBrother ?: string ;
  youngerBrother ?: string;

  getOldBrother(): string{
    return this.oldBrother || "";
  }

  setOldBrother(brother : string){
    this.oldBrother = brother
  }

  getYoungerBrother():string{
    return this.youngerBrother || "";
  }

  setYoungerBrother(brother : string){
    this.youngerBrother = brother
  }

  greet(brother : string){
    console.log(`Hi, ${brother}`)
  }

  message(){
    return "What's up? "
  }

}
