import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ContentComponent } from "../content/content.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-canvas',
  standalone: true, 
  imports: [HeaderComponent, ContentComponent, FooterComponent],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.css'
})
export class CanvasComponent {

}
