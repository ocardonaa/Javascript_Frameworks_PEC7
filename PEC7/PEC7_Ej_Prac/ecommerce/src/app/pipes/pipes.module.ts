import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { PricePipe } from './price.pipe';



@NgModule({
  declarations: [ImagePipe, PricePipe],
  imports: [
    CommonModule
  ],
  exports: [ImagePipe, PricePipe]
})
export class PipesModule { }
