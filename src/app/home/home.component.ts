import {
  Component,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  isAnimationPaused = false

  handleClick(e: Event) {
    this.isAnimationPaused = !this.isAnimationPaused
  }
}
