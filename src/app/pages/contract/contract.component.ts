import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { Contract } from '../../Models/Contract';
import { ContractService } from '../../services/contract.service';
import { DatePipe } from '@angular/common';
const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'ngx-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['contract.component.scss'],
})
export class ContractComponent  {
  settings = {
    actions:{
      add:false,
      edit:false,
      delete:false,
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
      id_companie: {
        title: 'id companie',
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
        valuePrepareFunction: (date) => { 
          var raw = new Date(date);
  
          var formatted = this.datePipe.transform(raw, 'dd MMM yyyy');
          return formatted; 
        }
      },
      end_date: {
        title: 'end_date',
        valuePrepareFunction: (date) => { 
          var raw = new Date(date);
  
          var formatted = this.datePipe.transform(raw, 'dd MMM yyyy');
          return formatted; 
        }
      },
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


  

  onSubmit(event) {

    let dates = event.start_date.getDate()+"/"+(event.start_date.getMonth()+1)+"/"+event.start_date.getFullYear();
    let datee = event.end_date.getDate()+"/"+(event.end_date.getMonth()+1)+"/"+event.end_date.getFullYear();

    var docDefinition = { pageSize: 'A4',
    header: {text: 'Contrat ', fontSize:30 ,alignment: 'center',bold:true},
    content: [
	    
	    {text: "Le présent contrat est établi entre le client "+event.id_client+" et l'entreprise "+event.id_companie+" pour afficher la publicite "+event.id_ad+" du "+dates+" au "+datee+" elle vas etre afficher "+event.loop+" fois par jour et "+event.days+" jour par semaine", fontSize: 14,alignment: 'center',
	    margin: [0, 50, 0, 0]},
	    
	    {text: "signature client", listType: 'none',bold: true,italics: true,margin: [0, 40, 0, 0]},
	    {text: "signature entreprise", listType: 'none',bold: true,italics: true,margin: [0, -12, 0, 0], alignment:'right'},
		
	
	]
  
  };
  pdfMake.createPdf(docDefinition).open();  
  }

}
