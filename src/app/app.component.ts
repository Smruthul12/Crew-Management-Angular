import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { CrewComponent } from './crew/crew.component';
import { CrewDesignationsComponent } from "./crew-designations/crew-designations.component";
import { UsersModule } from './users/users.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, CrewComponent, CrewDesignationsComponent, UsersModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'crew-management';

}
