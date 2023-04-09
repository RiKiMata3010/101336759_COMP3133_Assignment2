import { Component, OnInit, Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { first } from 'rxjs';

@Component({
  selector: 'app-employee-settings',
  templateUrl: './employee-settings.component.html',
  styleUrls: ['./employee-settings.component.scss']
})
export class EmployeeSettingsComponent implements OnInit {

  empForm: FormGroup;

  constructor(private _fb: FormBuilder, private _empService: EmployeeService, private _dialogRef: MatDialogRef<EmployeeSettingsComponent>, @Inject(MAT_DIALOG_DATA) public data: any){
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: ''
    })
  }
  ngOnInit(): void {
      this.empForm.patchValue(this.data)
  }
  onFormSubmit(){
    if(this.empForm.valid){
      if(this.data){
        this._empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
          next: (val: any) => {
            alert('Employee Updated Status : Success!');
            this._dialogRef.close(true);
          },
          error: (err:any) => {
           console.error(err);
          },
        });
      }else{
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            alert('Employee Added Status : Success!');
            this._dialogRef.close(true);
          },
          error: (err:any) => {
           console.error(err);
          },
        });
      }
      }
    }
  }
