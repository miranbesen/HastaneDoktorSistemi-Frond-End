import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HastaneComponent } from './hastane/hastane.component';
import { ShowHasComponent } from './hastane/show-has/show-has.component';
import { AddEditHasComponent } from './hastane/add-edit-has/add-edit-has.component';
import { DoktorComponent } from './doktor/doktor.component';
import { ShowDokComponent } from './doktor/show-dok/show-dok.component';
import { AddEditDokComponent } from './doktor/add-edit-dok/add-edit-dok.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from  '@angular/forms';
import { ReusableButtonComponent,MyButton} from './reusable/reusable-button/reusable-button.component';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { SidebarModule } from 'ng-sidebar';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule} from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { ModalModule } from './reusable/_modal';




@NgModule({
  
  declarations: [
    AppComponent,
    HastaneComponent,
    ShowHasComponent,
    AddEditHasComponent,
    DoktorComponent,
    ShowDokComponent,
    AddEditDokComponent,
    ReusableButtonComponent,
    MyButton,
    AnasayfaComponent,
    SidenavComponent,
    HeaderComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    SidebarModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    ModalModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
 
  
})
export class AppModule { }
