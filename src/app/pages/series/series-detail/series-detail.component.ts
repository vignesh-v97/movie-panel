import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ISeries } from 'src/app/shared/interfaces/Series';
import { SeriesService } from 'src/app/shared/services/series/series.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.scss']
})
export class SeriesDetailComponent implements OnInit {
  seriesDetails: ISeries | null = null;
  id: string | null = null;

  tmdbBannerBaseUrl:string = environment.tmdbBannerBaseUrl;

  constructor(public seriesService: SeriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    if(this.id) {
      this.seriesService.getSeriesDetails(this.id).subscribe((seriesDetailsResp)=>{
        this.seriesDetails = seriesDetailsResp
      })
    }
  }

}
