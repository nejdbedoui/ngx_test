import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { ClientsComponent } from './clients/clients.component';
import { AdComponent } from './ad/ad.component';
import { CompanieComponent } from './companie/companie.component';
import { ContractComponent } from './contract/contract.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {path: 'dashboard',component: ECommerceComponent},
    {path: 'ad',component: AdComponent},
    {path: 'clients',component: ClientsComponent},
    {path: 'companies',component: CompanieComponent},
    {path: 'contracts',component: ContractComponent},
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
