import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
  counter = signal(0);

  username = signal('');

  users = signal([
    'Smruthul',
    'smruthul'
  ]);

  videos = signal({ //object
    title: 'Ready Player One',
    descripition:'Futuristic Movie about gaming'
});

}
