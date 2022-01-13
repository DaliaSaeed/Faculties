import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';

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

import { FacultyPresidentComponent } from './components/about/info/faculty-president/faculty-president.component';
import { FacultygoalsComponent } from './components/about/info/facultygoals/facultygoals.component';
import { FacultymessageComponent } from './components/about/info/facultymessage/facultymessage.component';
import { FacultyvisionComponent } from './components/about/info/facultyvision/facultyvision.component';
import { FacultyhistoryComponent } from './components/about/info/facultyhistory/facultyhistory.component';
import { FacultydepartmentsComponent } from './components/about/info/facultydepartments/facultydepartments/facultydepartments.component';
import { FacultysystemComponent } from './components/about/info/facultysystem/facultysystem/facultysystem.component';
import { ViewAllNewsComponent } from './components/view-all-news/view-all-news.component';
import { ComputerScienceComponent } from './components/about/department/computer-science/computer-science.component';
import { InformationSystemsComponent } from './components/about/department/information-systems/information-systems.component';
import { MultimediaComponent } from './components/about/department/multimedia/multimedia.component';
import { InformationTechnologyComponent } from './components/about/department/information-technology/information-technology.component';
import { GraduationProjectsComponent } from './components/about/academiclife/graduation-projects/graduation-projects.component';
import { CreditHoursComponent } from './components/about/academiclife/credit-hours/credit-hours.component';
import { AboutTheQualityComponent } from './components/about/units/QualityAssuranceUnit/about-the-quality/about-the-quality.component';
import { OrganizationalChartComponent } from './components/about/units/QualityAssuranceUnit/organizational-chart/organizational-chart.component';
import { CounselingCenterComponent } from './components/about/units/SpecialUnits/counseling-center/counseling-center.component';
import { CollageNewsComponent } from './components/about/collageNews/collage-news/collage-news.component';
import { StudentsUnionComponent } from './components/about/info/students_Union/students-union/students-union.component';
import { CollegeListComponent } from './components/about/info/college_list/college-list/college-list.component';
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
    
    FacultyPresidentComponent,
    SiteMapComponent,
    FacultygoalsComponent,
    FacultymessageComponent,
    FacultyvisionComponent,
    ConnectComponent,
    FacultyhistoryComponent,
    FacultydepartmentsComponent,
    FacultysystemComponent,
    ViewAllNewsComponent,
    ComputerScienceComponent,
    InformationSystemsComponent,
    MultimediaComponent,
    InformationTechnologyComponent,
    GraduationProjectsComponent,
    CreditHoursComponent,
    AboutTheQualityComponent,
    OrganizationalChartComponent,
    CounselingCenterComponent,
    CollageNewsComponent,
    StudentsUnionComponent,
    CollegeListComponent,
    SingleEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

})
export class AppModule { }
