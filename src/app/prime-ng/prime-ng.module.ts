import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import {CardModule} from 'primeng/card';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
    RippleModule,
  ],
})
export class PrimeNgModule { }
