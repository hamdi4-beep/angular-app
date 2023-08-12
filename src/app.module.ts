import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HttpClientModule} from '@angular/common/http';
import { AppLayoutModule } from './modules/app-layout.module';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app/app.component';
import { ThumbnailComponent } from './app/thumbnail/thumbnail.component';

@NgModule({
    declarations: [
        AppComponent,
        ThumbnailComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppLayoutModule,
        BrowserAnimationsModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}