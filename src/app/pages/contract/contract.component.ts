import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { Contract } from '../../Models/Contract';
import { ContractService } from '../../services/contract.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ngx-contract',
  templateUrl: './contract.component.html'
})
export class ContractComponent  {
  settings = {
    add: {
      confirmCreate: true,
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      confirmSave: true,
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id_contract: {
        title: 'id contract',
        type: 'string',
      },
      id_client: {
        title: 'id client',
        type: 'string',
      },
      id_Companie: {
        title: 'id Companie',
        type: 'string',
      },
      id_ad: {
        title: 'id_ad',
        type: 'string',
      },
      loop: {
        title: 'loop',
        type: 'number',
      },
      days: {
        title: 'days',
        type: 'number',
      },
      start_date: {
        title: 'start_date',
        type: 'shortDate',
      },
      end_date: {
        title: 'end_date',
        type: 'shortDate',
      },
      created:{
        title: 'created',
        valuePrepareFunction: (created) => {
        
        console.log('created: ', created);
        var raw = new Date(created);
    
        var formatted = this.datePipe.transform(raw, 'dd MMM yyyy');
        console.log('formatted: ', formatted);
        return formatted;
      }}
      
    },
  };
  data:Contract[]=[];

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,private datePipe: DatePipe,private _contractservice:ContractService) {
    this.getallCl();
    this.source.load(this.data);
  }

  getallCl(){
    this._contractservice.getallContract().subscribe(value=>{
      this.data=value;
      console.log(value);
    }
      
      )
  }

 

}
