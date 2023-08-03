import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  {path:'Home', component: AboutComponent},
  {path:'guruParampara', component: AboutComponent},
  {path:'courses', component: CourseComponent},
  {path:'thirtaKshetra', component: AboutComponent},
  {path:'articles', component: AboutComponent},
  {path:'aboutus', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
