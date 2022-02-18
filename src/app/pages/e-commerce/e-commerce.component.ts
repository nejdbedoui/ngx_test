import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { Ad } from '../../models/Ad';
import { AdService } from '../../services/ad.service';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id_ad: {
        title: 'ID',
        type: 'string',
      },
      id_client: {
        title: 'id_client',
        type: 'string',
      },
      link: {
        title: 'link',
        type: 'string',
      },
    },
  };

  data:Ad[]=[];

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,private _adservice:AdService) {
    this.getallad();
    console.log(this.data);
    this.source.load(this.data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  getallad(){
    this._adservice.getallad().subscribe(value=>{
      this.data=value;
    }
      
      )
  }
}
