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
import { CarvingComponent } from './components/about/department/carving/carving/carving.component';
import { DecorationComponent } from './components/about/department/Decoration/decoration/decoration.component';
import { GraphicComponent } from './components/about/department/Graphica/graphic/graphic.component';
import { PhotographyComponent } from './components/about/department/photography/photography/photography.component';
import { StudentsUnionComponent } from './components/about/info/Students_Union/students-union/students-union.component';
import { CollageNewsComponent } from './components/about/collageNews/collage-news/collage-news.component';
import { StudentGuideComponent } from './components/about/info/Student_Guide/student-guide/student-guide.component';
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
    path: 'about/info/faculty-system',
    component: FacultysystemComponent ,
  },
  {
    path: 'about/info/faculty-departments',
    component: FacultydepartmentsComponent ,
  },
  {
    path: 'carving-department',
    component: CarvingComponent ,
  },
  {
    path: 'decoration-department',
    component: DecorationComponent ,
  },
  {
    path: 'graphic-department',
    component: GraphicComponent ,
  },
  {
    path: 'photography-department',
    component: PhotographyComponent ,
  },
  {
    path: 'Union-students',
    component: StudentsUnionComponent ,
  },
  {
    path: 'collage-News',
    component: CollageNewsComponent ,
  },
  {
    path: 'Student-Guide',
    component:StudentGuideComponent ,
  },
  {
    path: 'Committee_Lists',
    component: CommitteeListsComponent ,
  },
  {
    path: 'single-event/:id',
    component: SingleEventComponent ,
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
