import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { MisiComponent } from './component/misi/misi.componeny';
import { MottoComponent } from './component/motto/motto.component';
import { VisiComponent } from './component/visi/visi.component';


const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
        {
            path: '',
            component: VisiComponent
        },
        {
            path: 'visi',
            component: VisiComponent
        },
        {
            path: 'misi',
            component: MisiComponent
        },
        {
            path: 'motto',
            component: MottoComponent
        }
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }