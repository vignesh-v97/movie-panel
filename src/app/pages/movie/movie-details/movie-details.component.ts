import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IMovie } from 'src/app/shared/interfaces/Movie';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails:IMovie | null = null;
  id: string | null = null;
  // posterPath:string = "";

  tmdbBannerBaseUrl:string = environment.tmdbBannerBaseUrl;
  constructor(public moviesService:MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    if(this.id){
      this.moviesService.getMovieDetails(this.id).subscribe((movieDetailsResp)=>{
      console.log(movieDetailsResp)
      console.log(movieDetailsResp.backdrop_path)
      //  this.posterPath = movieDetailsResp.belongs_to_collection.poster_path;
       this.movieDetails = movieDetailsResp
      })
    }
  }

}
