import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamicaddfields',
  templateUrl: './dynamicaddfields.component.html',
  styleUrls: ['./dynamicaddfields.component.css']
})
export class DynamicaddfieldsComponent implements OnInit {

  form: FormGroup;
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      name: '',
      address: '',
      experience: this.fb.array([])
    })
   }
   onSubmit(){

   }
   //Get the form Data
   getExp(){
     return this.form.get('experience') as FormArray;
   }
   // Add form instance
   addExp(){
     this.getExp().push(this.expForm());
   }
   remove(i:any){
    this.getExp().removeAt(i);
   }
   // Create form instance
   expForm(){
     return this.fb.group({
       company: '',
       from: '',
       till: '',
       position: ''
     })
   }

  ngOnInit(): void {
  }

}
