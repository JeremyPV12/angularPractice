import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FatherComponent } from "./father/father.component";
import { SonComponent } from "./son/son.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrotherComponent } from "./brother/brother.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FatherComponent, SonComponent, FormsModule, ReactiveFormsModule, BrotherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularPractice';
}
