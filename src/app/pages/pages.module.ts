import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ClientsModule } from './clients/clients.module';
import { CompanieModule } from './companie/companie.module';
import { ContractModule } from './contract/contract.module';
import { AdModule } from './ad/ad.module';
import { DatePipe } from '@angular/common';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    ECommerceModule,
    ClientsModule,
    CompanieModule,
    ContractModule,
    AdModule
  ],
  declarations: [
    PagesComponent,
  ],
  providers: [
    DatePipe
  ],
})
export class PagesModule {
}
