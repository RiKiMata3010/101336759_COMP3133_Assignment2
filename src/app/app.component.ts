import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { EmployeeSettingsComponent } from './employee-settings/employee-settings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'COMP3133-Assignment2';

  constructor(private _dialog: MatDialog) {}

  openAddEditEmpForm(){
    this._dialog.open(EmployeeSettingsComponent)
  }
}
