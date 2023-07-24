import {
  Component,
  OnInit
} from '@angular/core';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  user: any

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http
    .fetchData('https://api.github.com/users/hamdi4-beep')
    .subscribe(data => this.user = data)
  }
}
