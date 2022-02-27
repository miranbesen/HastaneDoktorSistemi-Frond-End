import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-reusable-button',
  templateUrl: './reusable-button.component.html',
  styleUrls: ['./reusable-button.component.css']
})
export class ReusableButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
}

@Component({
  selector: "my-button",
  template: `<button mat-icon-button  style={{style}} type={{type}} class={{class}} (click)="onClickButton($event)" ><mat-icon>{{text}}</mat-icon></button>`
  
})


export class MyButton
{

  @Input() style="";
  @Input() text = "";
  @Input() type ="";
  @Input() class="";
  

  @Input() functionCall!:string;
  @Output() onClick = new EventEmitter<any>();
  
  onClickButton(event:any) {
    this.onClick.emit(event);
  }
  
  
}

