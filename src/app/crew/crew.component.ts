import { Component } from '@angular/core';
import { CrewDesignationsComponent } from '../crew-designations/crew-designations.component';
@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [CrewDesignationsComponent],
  providers:[],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.scss'
})
export class CrewComponent {

  messageforComponent: string = "from parent";
  userToken: string = "oiweiof33";

  receviedMessage: string ="";

  recevingMessage(message: string): void{
    this.receviedMessage = message;
  }
}
