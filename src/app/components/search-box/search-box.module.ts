import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [SearchBoxComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],exports: [SearchBoxComponent]
})
export class SearchBoxModule { }
