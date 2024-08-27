import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FatherComponent } from '../father/father.component';

@Component({
  selector: 'app-son',
  standalone: true,
  imports: [FormsModule, FatherComponent],
  templateUrl: './son.component.html',
  styleUrl: './son.component.css'
})
export class SonComponent {
 
  /* @Input() messageHijo: string ="";

  @Output() messageFronSon = new EventEmitter<string>();

  message : string = ''

  sendinMessage(){
    this.messageFronSon.emit(this.message)
  } */

  /* @Input() messageSon : string = " "; */

  /* @Output() contentSon = new EventEmitter<string>();

  message : string = " ";

  receipMesanje(){
    this.contentSon.emit(this.message);
  } */

  /* @Input() valueSon : string = ""; */

  /* @Output() dataSon = new EventEmitter<string>();

  valueImport = "";

  changeValor(){
    this.dataSon.emit(this.valueImport);
  }
 */

  @Output() getIncrease = new EventEmitter<void>();
  @Output() getDecrease = new EventEmitter<void>();

  increase(){
    this.getIncrease.emit()
  }

  decrease(){

    this.getDecrease.emit()
  }


}
