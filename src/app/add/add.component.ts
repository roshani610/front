import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  demoForm: FormGroup;
  private formBuilder:FormBuilder;
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm(){
    this.demoForm=new FormGroup({
       title:new FormControl({value:"",disabled:false},Validators.required),
       content:new FormControl({value:"",disabled:false},Validators.required)
    });

    //another way
    // this.demoForm=this.formBuilder.group({
    //   title:[null,[Validators.required]],
    //   content:[null,[Validators.required]]  
    // })
  }
  onSubmit(){
      this.apiService.createNote(this.demoForm.value).subscribe(resp=>{
        console.log(this.demoForm.value);
        console.log(resp);
      })
  }

}
