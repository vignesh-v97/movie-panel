import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ISeries } from 'src/app/shared/interfaces/Series';
import { ISeriesCredit } from 'src/app/shared/interfaces/Series-credit';
import { SeriesCreditsService } from 'src/app/shared/services/series-credit/series-credits.service';
import { SeriesService } from 'src/app/shared/services/series/series.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.scss']
})
export class SeriesDetailComponent implements OnInit {
  seriesCredits: ISeriesCredit | null = null;
  seriesDetails: ISeries | null = null;
  id: string | null = null;

  tmdbBannerBaseUrl:string = environment.tmdbBannerBaseUrl;

  constructor(
    public seriesCreditService: SeriesCreditsService, 
    public seriesService: SeriesService,
    private route: ActivatedRoute) 
  { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    if(this.id) {
      this.seriesService.getSeriesDetails(this.id).subscribe((seriesDetailsResp)=>{
        this.seriesDetails = seriesDetailsResp
      })
    }

    if(this.id) {
      this.seriesCreditService.getSeriesCredits(this.id).subscribe((seriesCreditResp) => {
        this.seriesCredits = seriesCreditResp
      })
    }
  }

}
