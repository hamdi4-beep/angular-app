import { Component } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.sass']
})
export class ThumbnailComponent {
  imgUrl: string

  constructor() {
    this.imgUrl = './assets/wallpaper.jpg'
  }
}
