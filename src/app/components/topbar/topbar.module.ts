import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SearchBoxModule } from './../search-box/search-box.module';
import { MenuLinksModule } from './../menu-links/menu-links.module';

@NgModule({
  declarations: [TopbarComponent],
  imports: [
    CommonModule,
    NgbModule,
    SearchBoxModule,
    MenuLinksModule
  ],
  exports: [TopbarComponent]
})
export class TopbarModule { }
