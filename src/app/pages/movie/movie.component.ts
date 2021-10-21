import { Component, OnInit } from '@angular/core';
import { TrendingMovieItem } from 'src/app/shared/interfaces/Trending';
import { TrendingService } from 'src/app/shared/services/trending/trending.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  dayOrWeek:string = 'week';
  page:number = 1;

  trendingMovies:TrendingMovieItem[] | null = null;
  tmdbPosterBaseUrl:string = environment.tmdbPosterBaseUrl
  constructor(public trendingService:TrendingService) { }

  ngOnInit(): void {
    this.trendingService.getTrending<TrendingMovieItem[]>('movie', this.dayOrWeek, this.page).subscribe(trendingResp=>this.trendingMovies=trendingResp.results);
  }

}
