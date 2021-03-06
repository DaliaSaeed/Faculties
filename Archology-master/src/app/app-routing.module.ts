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
import { FacultysystemComponent } from './components/about/info/facultysystemm/facultysystem/facultysystem.component';
import { AntiquitiesRestorationComponent } from './components/about/departments/Antiquities_Restoration/antiquities-restoration/antiquities-restoration.component';
import { IslamicAntiquitiesComponent } from './components/about/departments/Islamic_Antiquities/islamic-antiquities/islamic-antiquities.component';
import { EgyptionAntiquitiesComponent } from './components/about/departments/Egyption_Antiquities/egyption-antiquities/egyption-antiquities.component';
import { CollageNewsComponent } from './components/about/collageNews/collage-news/collage-news.component';
import { StusentGuideComponent } from './components/about/info/stusent_guide/stusent-guide/stusent-guide.component';
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
    path: 'about/info/stusent-guid',
    component: StusentGuideComponent ,
  },
  {
    path: 'about/info/students_union',
    component: StudentsUnionComponent ,
  },
  {
    path: 'single-event/:id',
    component: SingleEventComponent ,
  },
  {
    path: 'about/departments/Antiquities_Restoration',
    component: AntiquitiesRestorationComponent ,
  },
  {
    path: 'about/departments/Islamic_Antiquities',
    component: IslamicAntiquitiesComponent ,
  },
  {
    path: 'about/departments/Egyption_Antiquities',
    component: EgyptionAntiquitiesComponent ,
  },
  {
    path: 'collageNews',
    component: CollageNewsComponent ,
  },

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
