import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';


@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
    imports: [NgIf, NgFor] ,
})
export class ContentComponent {
 
   showAboutme = false;
   skills = ['Angular', 'TypeScript', 'CSS', 'Git','Node.js','REST APIs'];
}
