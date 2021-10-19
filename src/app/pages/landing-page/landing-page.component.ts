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

   dayOrWeek:string = 'week'

  constructor(public trendingService:TrendingService) {}

  ngOnInit(): void {
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

  movieDetail(movieData:any) {
    this.selectedMovie = movieData;
    setTimeout(() => {
      console.log(this.selectedMovie, "Selected Movie")
    }, 2000);
  }

  seriesDetail(seriesData:any) {
    this.selectedSeries = seriesData;
    setTimeout(() => {
      console.log(this.selectedSeries, "Selected Series")
    }, 2000);
  }

  peopleDetail(peopleData:any) {
    this.selectedPeople = peopleData;
    setTimeout(() => {
      console.log(this.selectedPeople, "Selected People")
    }, 2000);
  }

  chooseDayorWeek(event:any) {
    this.dayOrWeek = event.target.value;
  }

}
