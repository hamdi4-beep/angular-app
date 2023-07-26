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
  created_date: string

  constructor(private http: HttpService) {
    this.created_date = ''
  }

  ngOnInit(): void {
    this.http
    .fetchData(
      'https://api.github.com/users/hamdi4-beep',
      data => {
        if (!data) console.log('We were unable to get the results!')
        this.user = data

        this.created_date = new Date(this.user.created_at).toDateString()
      }
    )
  }
}
