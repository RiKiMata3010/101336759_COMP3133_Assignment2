import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { first } from 'rxjs';

@Component({
  selector: 'app-employee-settings',
  templateUrl: './employee-settings.component.html',
  styleUrls: ['./employee-settings.component.scss']
})
export class EmployeeSettingsComponent {

  empForm: FormGroup;

  constructor(private _fb: FormBuilder, private _empService: EmployeeService, private _dialogRef: MatDialogRef<EmployeeSettingsComponent>){
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: ''
    })
  }
  onFormSubmit(){
    if(this.empForm.valid){
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
