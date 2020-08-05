import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLinksComponent } from './menu-links.component';



@NgModule({
  declarations: [MenuLinksComponent],
  imports: [
    CommonModule
  ], exports: [MenuLinksComponent]
})
export class MenuLinksModule { }
