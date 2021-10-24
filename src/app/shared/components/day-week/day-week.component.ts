import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TrendingMovieItem, TrendingPeopleItem, TrendingSeriesItem } from '../../interfaces/Trending';
import { TrendingService } from '../../services/trending/trending.service';

@Component({
  selector: 'app-day-week',
  templateUrl: './day-week.component.html',
  styleUrls: ['./day-week.component.scss']
})
export class DayWeekComponent implements OnInit {
  trendingMovies:TrendingMovieItem[] | null = null;
  trendingSeries:TrendingSeriesItem[] | null = null;
  trendingPeopls:TrendingPeopleItem[] | null = null;
  @Output() dayOrWeek = new EventEmitter<string>();

  constructor(public trendingService: TrendingService) { }

  ngOnInit(): void {
  }

  chooseDayOrWeek(value: string) {
    this.dayOrWeek.emit(value);
  }

}
