import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ShowHasComponent } from 'src/app/hastane/show-has/show-has.component';
@Component({
  selector: 'app-add-edit-has',
  templateUrl: './add-edit-has.component.html',
  styleUrls: ['./add-edit-has.component.css']
})
export class AddEditHasComponent implements OnInit 
{
  
  constructor(private service:SharedService,private showHascomponent:ShowHasComponent) { }

  @Input() has:any;
  Id!:string;
  Adi!:string;

  ngOnInit(): void {
    this.Id=this.has.id;
    this.Adi=this.has.adi;
  }


  addHastane(){
    var val={Id:this.Id,
              Adi:this.Adi};
    this.service.addHastane(val).subscribe(res =>{
    this.showHascomponent.closeClick();
    })

  }

  updateHastane()
  {
      var val={Id:this.Id,
      Adi:this.Adi};
      this.service.updateHastane(val).subscribe(res =>{
      this.showHascomponent.closeClick();
      }); 

  }

}
