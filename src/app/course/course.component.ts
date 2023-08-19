import { Component } from '@angular/core';
import courseData from   '../../assets/course.json'
import { Course } from './courses';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  displayedColumns: string[] = ['id', 'Name', 'Type', 'Eligibility', 'Batch'];
  dataSource = courseData;

  constructor(private router : Router){}


  navigateToAddCourse(){
    this.router.navigateByUrl('add-course')
  }
}
