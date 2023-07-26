import {
  Component,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  @ViewChild('loadingSpinner') spinnerRef!: ElementRef

  handleClick(e: Event) {
    const spinnerEl = this.spinnerRef.nativeElement as HTMLDivElement
    spinnerEl.classList.toggle('pause-animation')
  }
}
