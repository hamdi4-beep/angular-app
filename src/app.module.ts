import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import {CommonModule} from '@angular/common'

// components
import { AppComponent } from './app/app.component';
import { NavComponent } from './app/nav/nav.component'
import { HomeComponent } from './app/home/home.component';
import { NotfoundComponent } from './app/notfound/notfound.component';
import { UserComponent } from './app/user/user.component';

// services
import { HttpService } from './services/http.service';
import { AboutComponent } from './app/about/about.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        UserComponent,
        NotfoundComponent,
        AboutComponent
    ],
    providers: [
        HttpService
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: '', redirectTo: '/home', pathMatch: 'full'},
            {path: 'home', component: HomeComponent},
            {path: 'profile', component: UserComponent},
            {path: 'about', component: AboutComponent},
            {path: '**', component: NotfoundComponent}
        ])
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}