
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ModalService } from 'src/app/reusable/_modal';

@Component({
  selector: 'app-show-dok',
  templateUrl: './show-dok.component.html',
  styleUrls: ['./show-dok.component.css']
})

export class ShowDokComponent implements OnInit {

  
  constructor(private service:SharedService,private modalService: ModalService) { }

  DoktorList:any=[];
  attributeAddButton={ butonAddTxt:"Doktor Ekle",butonAddStyle:"float:right;",butonAddType:"button",butonAddClass:"btn btn-danger m-2"  }
  attributeSortResultButton={ type:"button", class:"btn btn-light", textDown:"arrow_circle_down",textUp:"arrow_circle_up" }
  attributeUpdateButton={ type:"button", class:"btn btn-light mr-1", text:"mode_edit" }
  attributeDeleteButton={ type:"button", class:"btn btn-light mr-1", text:"delete_sweep" }
  attributeModal={ModalTitle:"", appOpen:"app-add-edit-dok", inputval:"doktor", outputval:"dok", appClose:"/app-add-edit-dok"}
  // ModalTitle!:string;
  ActivateAddEditDokComp:boolean=false;
  dok:any;
  DoktorIdFilter:string="";
  DoktorNameFilter:string="";
  DoktorSoyadFilter:string="";
  DoktorUzmanligiFilter:string="";
  DoktorListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshDokList();
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
    this.dok={
      id:0,
      adi:"",
      soyadi:"",
      uzmanligi:""
    }
    // this.ModalTitle="Doktor Ekle";
    this.ActivateAddEditDokComp=true;

  }

  editClick(item:any)
  {
    this.openModal('custom-modal-1');
    this.dok=item;
    // this.ModalTitle="Doktor Güncelle";
    this.ActivateAddEditDokComp=true;
  }

  deleteClick(item:any){
    if(confirm('Silmek istediğinden emin misin?')) {
      this.service.deleteDoktor(item.id).subscribe(data=>{
      this.refreshDokList();
      })
    }
  }

  refreshDokList()
  {
    this.service.getDokList().subscribe(data =>
    {
      this.DoktorList=data;
      this.DoktorListWithoutFilter=data;  
    });
  }

  closeClick()
  {
    this.closeModal('custom-modal-1');
    this.ActivateAddEditDokComp=false;
    this.refreshDokList();
  }

  FilterFn()
  {
    var DoktorIdFilter = this.DoktorIdFilter;
    var DoktorNameFilter =this.DoktorNameFilter;
    var DoktorSoyadFilter=this.DoktorSoyadFilter;
    var DoktorUzmanligiFilter=this.DoktorUzmanligiFilter;

    this.DoktorList= this.DoktorListWithoutFilter.filter(function(el:any){
      return el.id.toString().toLowerCase().includes( DoktorIdFilter.toString().trim().toLowerCase()
      ) &&
      el.adi.toString().toLowerCase().includes(
        DoktorNameFilter.toString().trim().toLowerCase()
      ) &&
      el.soyadi.toString().toLowerCase().includes( DoktorSoyadFilter.toString().trim().toLowerCase()
      )&&
      el.uzmanligi.toString().toLowerCase().includes(
        DoktorUzmanligiFilter.toString().trim().toLowerCase()
      )
    });
  
  }

  sortResult(prop:any,asc:any)
  {
    this.DoktorList=this.DoktorListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop])?-1:0);
      }
      else {
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop])?-1:0);
      }
    })
  }

}
