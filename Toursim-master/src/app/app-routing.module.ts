import { FacultyhistoryComponent } from './components/about/info/facultyhistory/facultyhistory.component';
import { FacultyvisionComponent } from './components/about/info/facultyvision/facultyvision.component';
import { FacultymessageComponent } from './components/about/info/facultymessage/facultymessage.component';
import { FacultygoalsComponent } from './components/about/info/facultygoals/facultygoals.component';
import { FacultyPresidentComponent } from './components/about/info/faculty-president/faculty-president.component';
import { ConnectComponent } from './components/about/connect/connect.component';
import { SiteMapComponent } from './components/about/site-map/site-map.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FacultydepartmentsComponent } from './components/about/info/facultydepartments/facultydepartments/facultydepartments.component';
import { FacultysystemComponent } from './components/about/info/facultysystem/facultysystem/facultysystem.component';
import { CollageNewsComponent } from './components/about/collageNews/collage-news/collage-news.component';
import { StudentGuideComponent } from './components/about/info/Student_Guide/student-guide/student-guide.component';
import { HotelStudiesComponent } from './components/about/departments/Hotel_Studies/hotel-studies/hotel-studies.component';
import { TourismStudiesComponent } from './components/about/departments/Tourism_Studies/tourism-studies/tourism-studies.component';
import { TourismGuidanceComponent } from './components/about/departments/Tourism_Guidance/tourism-guidance/tourism-guidance.component';
import { LanguageComponent } from './components/about/info/language/language/language.component';
import { StudentsUnionComponent } from './components/about/info/students_union/students-union/students-union.component';
import { SingleEventComponent } from './components/single-event/single-event.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about/site-map', component: SiteMapComponent },
  { path: 'about/connect', component: ConnectComponent },
  { path: 'about/info/faculty-goals', component:  FacultygoalsComponent},
  {
    path: 'about/info/faculty-message',
    component: FacultymessageComponent ,
  },
  {
    path: 'about/info/faculty-president',
    component: FacultyPresidentComponent,
  },

  {
    path: 'about/info/faculty-vision',
    component: FacultyvisionComponent ,
  },
  {
    path: 'about/info/faculty-history',
    component: FacultyhistoryComponent ,
  },
  {
    path: 'about/info/faculty-departments',
    component: FacultydepartmentsComponent ,
  },
  {
    path: 'about/info/faculty-system',
    component: FacultysystemComponent ,
  },
  {
    path: 'about/info/language',
    component: LanguageComponent ,
  },
  {
    path: 'Collage_News',
    component: CollageNewsComponent ,
  },
  {
    path: 'about/info/student-guide',
    component: StudentGuideComponent ,
  },
  {
    path: 'single-event/:id',
    component: SingleEventComponent ,
  },
  {
    path: 'about/info/student-union',
    component: StudentsUnionComponent ,
  },
  {
    path: 'about/departments/hotel_Studies',
    component: HotelStudiesComponent ,
  },
  {
    path: 'about/departments/Tourism_Studies',
    component: TourismStudiesComponent ,
  },
  {
    path: 'about/departments/Tourism_guidance',
    component: TourismGuidanceComponent ,
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
