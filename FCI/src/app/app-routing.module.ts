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
import { ComputerScienceComponent } from './components/about/department/computer-science/computer-science.component';
import { InformationSystemsComponent } from './components/about/department/information-systems/information-systems.component';
import { InformationTechnologyComponent } from './components/about/department/information-technology/information-technology.component';
import { MultimediaComponent } from './components/about/department/multimedia/multimedia.component';
import { AboutTheQualityComponent } from './components/about/units/QualityAssuranceUnit/about-the-quality/about-the-quality.component';
import { OrganizationalChartComponent } from './components/about/units/QualityAssuranceUnit/organizational-chart/organizational-chart.component';
import { CounselingCenterComponent } from './components/about/units/SpecialUnits/counseling-center/counseling-center.component';
import { CreditHoursComponent } from './components/about/academiclife/credit-hours/credit-hours.component';
import { GraduationProjectsComponent } from './components/about/academiclife/graduation-projects/graduation-projects.component';
import { CollageNewsComponent } from './components/about/collageNews/collage-news/collage-news.component';
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
  {path: 'about/department/computer-science', component:ComputerScienceComponent},
  {path: 'about/department/information-system', component:InformationSystemsComponent},
  {path: 'about/department/information-technology', component:InformationTechnologyComponent},
  {path: 'about/department/multimedia', component:MultimediaComponent},
  {path: 'units/about-unit', component:AboutTheQualityComponent},
  {path: 'units/organition-chart', component:OrganizationalChartComponent},
  {path: 'units/counsoling-center', component:CounselingCenterComponent},
  {path: 'academciclife/credit-hours', component:CreditHoursComponent},
  {path: 'academciclife/graduation-projects', component:GraduationProjectsComponent},
  {path: 'collageNews', component:CollageNewsComponent},

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
