import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from './mapas-routing.module';
import { MapScreenComponent } from './pages/map-screen/map-screen.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';


@NgModule({
  declarations: [
    MapScreenComponent,
    ZoomRangeComponent
  ],
  imports: [
    CommonModule,
    MapasRoutingModule
  ]
})
export class MapasModule { }
