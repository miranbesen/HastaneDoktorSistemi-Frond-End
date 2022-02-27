import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoktorComponent } from './doktor/doktor.component';
import { HastaneComponent } from './hastane/hastane.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';


const routes: Routes = [
  {path:'',component:AnasayfaComponent},
  {path:'hastane',component:HastaneComponent},
  {path:'doktor',component:DoktorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
