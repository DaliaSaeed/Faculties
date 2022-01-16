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
import { StudentsGuideComponent } from './components/about/info/students_guide/students-guide/students-guide.component';
import { ArabicComponent } from './components/about/departments/arabic/arabic/arabic.component';
import { ChainceComponent } from './components/about/departments/chainice/chaince/chaince.component';
import { EnglishComponent } from './components/about/departments/english/english/english.component';
import { FrenchComponent } from './components/about/departments/french/french/french.component';
import { ItaliyComponent } from './components/about/departments/italiy/italiy/italiy.component';
import { RochineComponent } from './components/about/departments/rochine/rochine/rochine.component';
import { SpainshComponent } from './components/about/departments/spainsh/spainsh/spainsh.component';
import { SingleEventComponent } from './components/single-event/single-event.component';
import { CommitteeListsComponent } from './components/about/info/Committee_Lists/committee-lists/committee-lists.component';
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
    path: 'about/info/students_guide',
    component: StudentsGuideComponent ,
  },
  {
    path: 'about/info/arabic',
    component: ArabicComponent ,
  },
  {
    path: 'about/info/chaince',
    component: ChainceComponent ,
  },
  {
    path: 'about/info/english',
    component: EnglishComponent ,
  },
  {
    path: 'about/info/french',
    component: FrenchComponent ,
  },
  {
    path: 'about/info/Italiy',
    component: ItaliyComponent ,
  },
  {
    path: 'about/info/Rochine',
    component: RochineComponent ,
  },
  {
    path: 'single-event/:id',
    component: SingleEventComponent ,
  },
  {
    path: 'about/info/Spainsh',
    component: SpainshComponent ,
  },
  {
    path: 'collageNews',
    component: CollageNewsComponent ,
  },
  {
    path: 'Committee_Lists',
    component: CommitteeListsComponent ,
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
