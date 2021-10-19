import { Component, OnInit } from '@angular/core';
import { TrendingMovieItem,TrendingSeriesItem,TrendingPeopleItem } from 'src/app/shared/interfaces/Trending';
import { TrendingService } from 'src/app/shared/services/trending/trending.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
   trendingMovies:TrendingMovieItem[] | null = null;
   trendingSeries:TrendingSeriesItem[] | null = null;
   trendingPeopls:TrendingPeopleItem[] | null = null;
   tmdbPosterBaseUrl:string = environment.tmdbPosterBaseUrl

  constructor(public trendingService:TrendingService) {}

  ngOnInit(): void {
    // Movies
    this.trendingService.getTrending<TrendingMovieItem[]>('movie').subscribe(trendingResp=>this.trendingMovies=trendingResp.results);

    // Series
    this.trendingService.getTrending<TrendingSeriesItem[]>('tv').subscribe(trendingResp=>this.trendingSeries=trendingResp.results);

    // People
    this.trendingService.getTrending<TrendingPeopleItem[]>('person').subscribe(trendingResp=>this.trendingPeopls=trendingResp.results);
  }

}
