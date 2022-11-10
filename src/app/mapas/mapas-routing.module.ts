import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapScreenComponent } from './pages/map-screen/map-screen.component';

const routes: Routes = [


  {
    path:'',
    children:[
      {path:'fullscreen',component:MapScreenComponent},
      {path:'**',component:MapScreenComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
