import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { VisiComponent } from './component/visi/visi.component';



@NgModule({
  declarations: [
    AboutComponent,
    VisiComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,

  ]
})
export class AboutModule { }
