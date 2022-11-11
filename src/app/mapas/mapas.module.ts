import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MapScreenComponent } from './pages/map-screen/map-screen.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';


@NgModule({
  declarations: [
    MapScreenComponent,
    ZoomRangeComponent
  ],
  imports: [
    CommonModule
    
  ],
  exports:[
    MapScreenComponent
  ]

})
export class MapasModule { }
