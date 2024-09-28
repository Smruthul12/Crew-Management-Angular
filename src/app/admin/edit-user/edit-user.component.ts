import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {

  adminName: string = 'ARC';

  anchorurl: string = 'http://google.com';

  disabled: boolean = true;

  imageUrl: string = 'https://lh3.googleusercontent.com/wAPeTvxh_EwOisF8kMR2L2eOrIOzjfA5AjE28W5asyfGeH85glwrO6zyqL71dCC26R63chADTO7DLOjnqRoXXOAB8t2f4C3QnU6o0BA';

  className: string = 'c1';

  buttonClicked(){
    // console.log("button clicked");
    this.className = this.className === 'c1'? 'c2' : 'c1';
    this.disabled = !this.disabled;
  }

  captureValue(event: any){
    console.log(event.key);
  }

  onMouseover(event: any){
    // console.log("Mouse was hover");
    this.className = this.className === 'c1'? 'c2' : 'c1';
  }

  onMouseout(event: any){
    // console.log("Mouse was out");
    this.className = this.className === 'c2'? 'c1' : 'c2';
  }

  
}
