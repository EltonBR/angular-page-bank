import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { SearchBoxModule } from './../search-box/search-box.module';
import { MenuLinksModule } from './../menu-links/menu-links.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [TopbarComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    SearchBoxModule,
    MenuLinksModule,
    FontAwesomeModule
  ],
  exports: [TopbarComponent]
})
export class TopbarModule { }
