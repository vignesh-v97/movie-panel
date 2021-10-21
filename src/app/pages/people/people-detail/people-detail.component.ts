import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IPeople } from 'src/app/shared/interfaces/People';
import { PeopleService } from 'src/app/shared/services/people/people.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {
  personDetail:IPeople | null = null;
  id: string | null = null;

  tmdbBannerBaseUrl:string = environment.tmdbBannerBaseUrl;
  constructor( private route: ActivatedRoute, private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    })
    if(this.id) {
      this.peopleService.getPeopleDetails(this.id).subscribe(
        (peopleDetailsResp) => {
          this.personDetail = peopleDetailsResp
          if(this.personDetail.gender == 1) 
            return this.personDetail.gender = "Female";
          else 
            return this.personDetail.gender = "Male";
        }
      )
    }
  }

}
