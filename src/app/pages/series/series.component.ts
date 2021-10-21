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

  trendingSeries:TrendingSeriesItem[] | null = null;
  tmdbPosterBaseUrl:string = environment.tmdbPosterBaseUrl

  constructor(public trendingService:TrendingService) { }

  ngOnInit(): void {
    this.trendingService.getTrending<TrendingSeriesItem[]>('tv', this.dayOrWeek, this.page).subscribe(trendingResp=> {
      console.log(trendingResp)
      this.trendingSeries=trendingResp.results
    });
  }

}
