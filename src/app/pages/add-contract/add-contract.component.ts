import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDateService } from '@nebular/theme';
import { Contract } from '../../Models/Contract';
import { AdService } from '../../services/ad.service';
import { ClientService } from '../../services/client.service';
import { CompanieService } from '../../services/companie.service';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'ngx-add-contract',
  templateUrl: './add-contract.component.html'
})
export class AddContractComponent implements OnInit {
  selectedItem = '2';
  clients;
  companies;
  ads;
  options = [
    { value: 1, label: '1 day/week' },
    { value: 2, label: '2 day/week' },
    { value: 3, label: '3 day/week' },
    { value: 4, label: '4 day/week' },
    { value: 5, label: '5 day/week' },
    { value: 6, label: '6 day/week' },
    { value: 7, label: '7 day/week' },
  ];
  min: Date;
  max: Date;
  formControl: Date;
  contract;
  constructor(private router: Router,protected dateService: NbDateService<Date>,private _contservice:ContractService, private _adsclient: ClientService, private _compservice: CompanieService, private _adservice: AdService) {
    this.getallCl();
    this.getallCompanie();
    this.getallad();
    this.min = (this.dateService.addDay(this.dateService.today(), 7));
    this.formControl = this.min;
    this.contract=new Contract("","","","",0,0,null,null);
  }

  ngOnInit(): void {
  }
  getallCl() {
    this._adsclient.getallC().subscribe(value => {
      this.clients = value;
    })
  }

  getallCompanie() {
    this._compservice.getallComp().subscribe(value => {
      this.companies = value;
    })
  }

  getallad() {
    this._adservice.getallad().subscribe(value => {
      this.ads = value;
    })
  }
  onSubmit() {
    
      this._contservice.addcont(this.contract).subscribe(response=>{
        this.router.navigate(['pages/contracts']);
      });
    
  }

}
