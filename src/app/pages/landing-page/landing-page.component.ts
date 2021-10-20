import { Component, OnInit, Output } from '@angular/core';
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
   tmdbPosterBaseUrl:string = environment.tmdbPosterBaseUrl;

   selectedMovie:any = [];
   selectedSeries:any = [];
   selectedPeople:any = [];

   dayOrWeek:'week' | 'day' = 'week'

  constructor(public trendingService:TrendingService) {}

  ngOnInit(): void {
   this.fetchTrendingData()
  }

  fetchTrendingData(){
     // Movies
     this.trendingService.getTrending<TrendingMovieItem[]>('movie', this.dayOrWeek).subscribe(trendingResp=> {
      this.trendingMovies = trendingResp.results.slice(0, 5);
    });

    // Series
    this.trendingService.getTrending<TrendingSeriesItem[]>('tv', this.dayOrWeek).subscribe(trendingResp=>
      {
        this.trendingSeries=trendingResp.results.slice(0, 5)
      });

    // People
    this.trendingService.getTrending<TrendingPeopleItem[]>('person', this.dayOrWeek).subscribe(trendingResp=>
      {
        this.trendingPeopls=trendingResp.results.slice(0, 5)
      });
  }
  chooseDayOrWeek(value:"week" | "day") {
    if(this.dayOrWeek !== value){
      this.dayOrWeek = value;
      this.fetchTrendingData();
    }
  }

}
