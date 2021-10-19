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
  trendingSeries:TrendingSeriesItem[] | null = null;
   tmdbPosterBaseUrl:string = environment.tmdbPosterBaseUrl

  constructor(public trendingService:TrendingService) { }

  ngOnInit(): void {
    this.trendingService.getTrending<TrendingSeriesItem[]>('tv').subscribe(trendingResp=>this.trendingSeries=trendingResp.results);
  }

}
