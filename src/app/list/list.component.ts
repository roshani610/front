import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  data:any;
  banners = [];
  idtOptions: DataTables.Settings = {};
  constructor(private apiService:ApiService) {
    /* this.apiService.getAllNoteData().subscribe(resp=>{
      this.data=JSON.stringify(resp);
    }) */


    this.idtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
    //  processing: true,
      order: [[1, "desc"]],
      columns: [
        {data:'_id'},
        { data: 'title' },
        { data: 'content'}
      ]
    };
    this.idtOptions.ajax = () => {
      //console.log(dataTablesParameters);
      this.apiService
        .getAllNoteData()
        .subscribe(resp => {
          console.log(JSON.stringify(resp));
         // console.log(resp);
         // if(resp.status === 200){
            this.banners = resp;
          //  console.log(this.banners);
          /* }else{
            this.banners=[];
          } */

        });
       
    };
   }

  ngOnInit() {
    
  }

}
