import { Component, OnInit } from '@angular/core';
import { GetPopularMoviesService } from 'src/app/core/get-popular-movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(private getPopularMoviesService: GetPopularMoviesService) { }
  movie:any = [];

  ngOnInit(): void {
    this.getPopularMoviesService.getMovies().subscribe(data => this.movie = data);
    setTimeout(()=>{
      console.log(this.movie.results[0].adult)
    },3000)
  }

}
