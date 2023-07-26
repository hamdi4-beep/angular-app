import {Component} from '@angular/core'

@Component({
    selector: 'app-root',
    styleUrls: [
        './app.component.sass'
    ],
    template: `
        <div class="wrapper">
            <app-nav></app-nav>
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {}