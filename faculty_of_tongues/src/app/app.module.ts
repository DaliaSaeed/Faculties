import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ConnectComponent } from './components/about/connect/connect.component';
import { SiteMapComponent } from './components/about/site-map/site-map.component';
import { CollegesComponent } from './components/academic-affairs/colleges/colleges.component';
import { ElectronicServicesComponent } from './components/academic-affairs/electronic-services/electronic-services.component';
import { PostgraduateProgramComponent } from './components/academic-affairs/postgraduate-program/postgraduate-program.component';
import { AvailableOnlineServicesComponent } from './components/academic-affairs/electronic-service/available-online-services/available-online-services.component';
import { CurrentServicesComponent } from './components/academic-affairs/electronic-service/current-services/current-services.component';
import { GeneralServicesComponent } from './components/academic-affairs/electronic-service/general-services/general-services.component';
import { HolidayComponent } from './components/academic-affairs/electronic-service/holiday/holiday.component';
import { PersonnelServicesComponent } from './components/academic-affairs/electronic-service/personnel-services/personnel-services.component';
import { ServicesOfFacultyComponent } from './components/academic-affairs/electronic-service/services-of-faculty/services-of-faculty.component';
import { DepartmentOfInsuranceAndPensionsComponent } from './components/academic-affairs/electronic-service/Departments/department-of-insurance-and-pensions/department-of-insurance-and-pensions.component';
import { DepartmentOfSpecialStaffAffairsComponent } from './components/academic-affairs/electronic-service/Departments/department-of-special-staff-affairs/department-of-special-staff-affairs.component';
import { EmployeeWelfareDepartmentComponent } from './components/academic-affairs/electronic-service/Departments/employee-welfare-department/employee-welfare-department.component';
import { GeneralStaffAffairsDepartmentComponent } from './components/academic-affairs/electronic-service/Departments/general-staff-affairs-department/general-staff-affairs-department.component';
import { PublicDepartmentComponent } from './components/academic-affairs/electronic-service/Departments/public-department/public-department.component';
import { ElectronicDeliveryComponent } from './components/academic-affairs/electronic-service/electronic-ser/electronic-delivery/electronic-delivery.component';
import { IntegrityCheckComponent } from './components/academic-affairs/electronic-service/electronic-ser/integrity-check/integrity-check.component';
import { TitleOfScientificThesesComponent } from './components/academic-affairs/electronic-service/electronic-ser/title-of-scientific-theses/title-of-scientific-theses.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActionRequiredComponent } from './components/academic-affairs/postgraduate-programs/action-required/action-required.component';
import { AdmissionDateComponent } from './components/academic-affairs/postgraduate-programs/admission-date/admission-date.component';
import { ScrollComponent } from './components/scroll/scroll.component';
import { GraduateStudiesHandbooksComponent } from './components/academic-affairs/postgraduate-programs/graduate-studies-handbooks/graduate-studies-handbooks.component';
import { PostgraduateBylawsComponent } from './components/academic-affairs/postgraduate-programs/postgraduate-bylaws/postgraduate-bylaws.component';
import { LoginComponent } from './components/academic-affairs/login/login.component';
import { ImagePipePipe } from './pipe/image-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { FacultyPresidentComponent } from './components/about/info/faculty-president/faculty-president.component';
import { FacultygoalsComponent } from './components/about/info/facultygoals/facultygoals.component';
import { FacultymessageComponent } from './components/about/info/facultymessage/facultymessage.component';
import { FacultyvisionComponent } from './components/about/info/facultyvision/facultyvision.component';
import { FacultyhistoryComponent } from './components/about/info/facultyhistory/facultyhistory.component';
import { FacultydepartmentsComponent } from './components/about/info/facultydepartments/facultydepartments/facultydepartments.component';
import { FacultysystemComponent } from './components/about/info/facultysystem/facultysystem/facultysystem.component';
import { ArabicComponent } from './components/about/departments/arabic/arabic/arabic.component';
import { EnglishComponent } from './components/about/departments/english/english/english.component';
import { FrenchComponent } from './components/about/departments/french/french/french.component';
import { ItaliyComponent } from './components/about/departments/italiy/italiy/italiy.component';
import { RochineComponent } from './components/about/departments/rochine/rochine/rochine.component';
import { ChainceComponent } from './components/about/departments/chainice/chaince/chaince.component';
import { SpainshComponent } from './components/about/departments/spainsh/spainsh/spainsh.component';
import {ViewAllNewsComponent} from './components/view-all-news/view-all-news.component';
import { CollageNewsComponent } from './components/about/collageNews/collage-news/collage-news.component';
import { StudentsGuideComponent } from './components/about/info/students_guide/students-guide/students-guide.component'
import { SingleEventComponent } from './components/single-event/single-event.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ConnectComponent,
    SiteMapComponent,
    CollegesComponent,
    ElectronicServicesComponent,
    PostgraduateProgramComponent,
    AvailableOnlineServicesComponent,
    CurrentServicesComponent,
    GeneralServicesComponent,
    HolidayComponent,
    PersonnelServicesComponent,
    ServicesOfFacultyComponent,
    DepartmentOfInsuranceAndPensionsComponent,
    DepartmentOfSpecialStaffAffairsComponent,
    EmployeeWelfareDepartmentComponent,
    GeneralStaffAffairsDepartmentComponent,
    PublicDepartmentComponent,
    ElectronicDeliveryComponent,
    IntegrityCheckComponent,
    TitleOfScientificThesesComponent,
    HeaderComponent,
    FooterComponent,
    ActionRequiredComponent,
    AdmissionDateComponent,
    ScrollComponent,
    GraduateStudiesHandbooksComponent,
    PostgraduateBylawsComponent,
    LoginComponent,
    ImagePipePipe,
    HeaderComponent ,
    ScrollComponent,
    FooterComponent,
    SearchComponent,
    FacultyPresidentComponent,
    SiteMapComponent,
    FacultygoalsComponent,
    FacultymessageComponent,
    FacultyvisionComponent,
    ConnectComponent,
    FacultyhistoryComponent,
    FacultydepartmentsComponent,
    FacultysystemComponent,
    ArabicComponent,
    EnglishComponent,
    FrenchComponent,
    ItaliyComponent,
    RochineComponent,
    ChainceComponent,
    SpainshComponent,
    ViewAllNewsComponent,
    CollageNewsComponent,
    StudentsGuideComponent,
    SingleEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

})
export class AppModule { }
