import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseAddEditComponent } from './course-add-edit/course-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-navbar';

  constructor(private _dialog: MatDialog) {}

  openAddEditCourseForm() {
    this._dialog.open(CourseAddEditComponent);
  }
}
