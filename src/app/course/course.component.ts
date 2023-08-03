import { Component } from '@angular/core';
import courseData from   '../../assets/course.json' 
import { Course } from './courses';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  displayedColumns: string[] = ['id', 'Name', 'Type', 'Eligibility', 'Batch'];
  dataSource = courseData; 
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}
