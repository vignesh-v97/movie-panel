import { Component, OnInit } from '@angular/core';
import { TrendingPeopleItem } from 'src/app/shared/interfaces/Trending';
import { TrendingService } from 'src/app/shared/services/trending/trending.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
   trendingPeopls:TrendingPeopleItem[] | null = null;
   tmdbPosterBaseUrl:string = environment.tmdbPosterBaseUrl

  constructor(public trendingService:TrendingService) { }

  ngOnInit(): void {
    this.trendingService.getTrending<TrendingPeopleItem[]>('person').subscribe(trendingResp=>this.trendingPeopls=trendingResp.results);
  }

}
