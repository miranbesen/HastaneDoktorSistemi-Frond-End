import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ModalService } from 'src/app/reusable/_modal';


@Component({
  selector: 'app-show-has',
  templateUrl: './show-has.component.html',
  styleUrls: ['./show-has.component.css']
})
export class ShowHasComponent implements OnInit {
  
  constructor(private service:SharedService,private modalService: ModalService) { }

  HastaneList:any=[];
  attributeSortResultButton={ type:"button", class:"btn btn-light", textDown:"arrow_circle_down",textUp:"arrow_circle_up" }
  attributeUpdateButton={ type:"button", class:"btn btn-light mr-1", text:"mode_edit" }
  attributeDeleteButton={ type:"button", class:"btn btn-light mr-1", text:"delete_sweep" }

  // ModalTitle!:string;
  ActivateAddEditHasComp:boolean=false;
  has:any;

  HastaneIdFilter:string="";
  HastaneNameFilter:string="";
  HastaneListWithoutFilter:any=[];

  ngOnInit(): void {
    
     this.refreshHasList();
  }
  
  openModal(id: string) 
  {
    this.modalService.open(id);
  }

  closeModal(id: string) 
  {
    this.modalService.close(id);
  }
  addClick()
  {
    this.openModal('custom-modal-1');
    this.has={
      id:0,
      adi:""
    }
    // this.ModalTitle="Hastane Ekle";
    this.ActivateAddEditHasComp=true;

  }

  editClick(item:any){
    this.openModal('custom-modal-1');
    this.has=item;
    // this.ModalTitle="Hastane Güncelle";
    this.ActivateAddEditHasComp=true;

  }

  deleteClick(item:any){
    if(confirm('Silmek istediğine emin misin?')) {
      this.service.deleteHastane(item.id).subscribe(data=>{       
      this.refreshHasList();
      })
    }
  }

  refreshHasList()
  {
    this.service.getHasList().subscribe(data =>{
      this.HastaneList=data;
      this.HastaneListWithoutFilter=data;
    });
  }

  closeClick(){
    this.closeModal('custom-modal-1');
    this.ActivateAddEditHasComp=false;
    this.refreshHasList()
  }
  FilterFn(){
    var HastaneIdFilter = this.HastaneIdFilter;
    var HastaneNameFilter =this.HastaneNameFilter;


    this.HastaneList= this.HastaneListWithoutFilter.filter(function(el:any){
      return el.id.toString().toLowerCase().includes( HastaneIdFilter.toString().trim().toLowerCase()
      ) &&
      el.adi.toString().toLowerCase().includes(
        HastaneNameFilter.toString().trim().toLowerCase()
      )
    });
  
  }

  sortResult(prop:any,asc:any){
    this.HastaneList=this.HastaneListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop])?-1:0);
      }
      else {
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop])?-1:0);
      }
    })
  }

  
}
