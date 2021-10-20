import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ICredits } from 'src/app/shared/interfaces/Credits';
import { IMovie } from 'src/app/shared/interfaces/Movie';
import { CreditsService } from 'src/app/shared/services/credits/credits.service';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails:IMovie | null = null;
  credits:ICredits | null = null;
  id: string | null = null;

  tmdbBannerBaseUrl:string = environment.tmdbBannerBaseUrl;
  constructor(
    public moviesService:MoviesService, 
    public creditService: CreditsService, 
    private route: ActivatedRoute
  )  { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    if(this.id){
      this.moviesService.getMovieDetails(this.id).subscribe((movieDetailsResp)=>{
      this.movieDetails = movieDetailsResp
      })

      this.creditService.getCredits(this.id).subscribe((creditResp) => {
        this.credits = creditResp
      })
    }
  }

}
