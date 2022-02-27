import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ShowDokComponent } from 'src/app/doktor/show-dok/show-dok.component'

@Component({ 
  selector: 'app-add-edit-dok',
  templateUrl: './add-edit-dok.component.html',
  styleUrls: ['./add-edit-dok.component.css']
})
export class AddEditDokComponent implements OnInit {
  
  @Input() doktor:any;

 
  Id!:string;
  Adi!:string;
  Soyadi!:string;
  Uzmanligi!:string;

  hastaneList!:any[]

  constructor(private service:SharedService,private showDokcomponent:ShowDokComponent) { }

  ngOnInit(): void {
    this.Id=this.doktor.id;
    this.Adi=this.doktor.adi;
    this.Soyadi=this.doktor.soyadi;
    this.Uzmanligi=this.doktor.uzmanligi;
  }


 

  addDoktor(){
    var val={Id:this.Id,
              Adi:this.Adi,
              Soyadi:this.Soyadi,
              Uzmanligi:this.Uzmanligi,
            };
    this.service.addDoktor(val).subscribe(res =>{
      this.showDokcomponent.closeClick();
    })
  }

  updateDoktor() 
  {
     
      var val={Id:this.Id,
        Adi:this.Adi,
        Soyadi:this.Soyadi,
        Uzmanligi:this.Uzmanligi,
      };
      this.service.updateDoktor(val).subscribe(res =>{
      this.showDokcomponent.closeClick();
    })

  }


}
