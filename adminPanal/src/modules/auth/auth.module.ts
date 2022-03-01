/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as authComponents from './components';

/* Containers */
import * as authContainers from './containers';

/* Guards */
import * as authGuards from './guards';

/* Services */
import * as authServices from './services';
import { AddNewsComponent } from './containers/addNews/add-news/add-news.component';
import { ProfileComponent } from './containers/profile/profile/profile.component';
import { ShowUsersComponent } from './containers/ShowUsers/show-users/show-users.component';
import { AllNewsComponent } from './containers/All_News/all-news/all-news.component';
import { EditNewComponent } from './containers/editNew/edit-new/edit-new.component';
import { AddFciNewsComponent } from './containers/addFciNews/add-fci-news/add-fci-news.component';
import { AddFineArtNewsComponent } from './containers/addFineArtNews/add-fine-art-news/add-fine-art-news.component';
import { AddToursimNewsComponent } from './containers/addToursimNews/add-toursim-news/add-toursim-news.component';
import { AddArchaeologyNewsComponent } from './containers/addArchaeologyNews/add-archaeology-news/add-archaeology-news.component';
import { AddAlsunNewsComponent } from './containers/addAlsunNews/add-alsun-news/add-alsun-news.component';
import { AddMedicineNewsComponent } from './containers/addMedicineNews/add-medicine-news/add-medicine-news.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...authServices.services, ...authGuards.guards],
    declarations: [...authContainers.containers, ...authComponents.components, AddNewsComponent, ProfileComponent, ShowUsersComponent, AllNewsComponent, EditNewComponent, AddFciNewsComponent, AddFineArtNewsComponent, AddToursimNewsComponent, AddArchaeologyNewsComponent, AddAlsunNewsComponent, AddMedicineNewsComponent],
    exports: [...authContainers.containers, ...authComponents.components],
})
export class AuthModule {}
