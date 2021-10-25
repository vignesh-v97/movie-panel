import { Component, OnInit } from '@angular/core';
import { TrendingSeriesItem } from 'src/app/shared/interfaces/Trending';
import { TrendingService } from 'src/app/shared/services/trending/trending.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  dayOrWeek:string = 'week';
  page:number = 1;

  trendingSeries:TrendingSeriesItem[] | any[]  =Array();
  tmdbPosterBaseUrl:string = environment.tmdbPosterBaseUrl

  constructor(public trendingService:TrendingService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.trendingService.getTrending<TrendingSeriesItem[]>('tv', this.dayOrWeek, this.page).subscribe(trendingResp=> {
      this.trendingSeries = [...this.trendingSeries, ...trendingResp.results];
    });
  }

  onScroll() {
    this.page += 1;
    this.fetchData();
  }

}
