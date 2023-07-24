import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.sass']
})
export class NotfoundComponent {
  currentURL: string

  constructor(router: Router) {
    this.currentURL = router.url
  }
}
