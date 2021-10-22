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
  loaded:boolean = false;
  dayOrWeek:string = 'week';
  page:number = 1;
  pages:number[]=[];
  totalPages: number;

  trendingMovies:TrendingMovieItem[] | null = null;
  tmdbPosterBaseUrl:string = environment.tmdbPosterBaseUrl
  constructor(public trendingService:TrendingService) { }

  ngOnInit(): void {
    this.fetchData();
    setInterval(() => {
      this.loaded = true;
    }, 1000)
  }

  fetchData() {
    this.trendingService.getTrending<TrendingMovieItem[]>('movie', this.dayOrWeek, this.page).subscribe(trendingResp=>{
      this.totalPages = trendingResp.total_pages;
      this.trendingMovies=trendingResp.results;
      console.log(this.totalPages)
    });
  }

  initialPage(number:number) {
    this.page = number;
  }

  onPageChange(pageNo: number) {
    this.page = pageNo;
    this.fetchData();
  }
}
