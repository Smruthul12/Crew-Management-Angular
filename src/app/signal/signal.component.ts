import { Component, effect, Injector, signal } from '@angular/core';

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

  setCounter(){
    this.counter.set(30);
  }

  setVideo(){
    this.videos.set({
      "title":"New Title",
      "descripition": "New Description"
    })
  }

  updateCounter(){
    this.counter.update(counter => counter +50);
  }

  constructor(private injector: Injector){
    
  }

  counterEffect(): void{
    effect(() => {
      console.log("Value of counter" + this.counter());
      console.log("Value of counter" + this.videos().title);
    },{injector: this.injector})
  }



}
