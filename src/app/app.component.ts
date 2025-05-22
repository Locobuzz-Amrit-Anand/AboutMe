import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CanvasComponent } from "./canvas/canvas.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CanvasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AboutMe';
}
