import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() startClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }
  ngOnInit(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  OnRatingClicked(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

  OnStarClicked(num: number): void {
    // console.log(num);
    this.startClicked.emit(num);
  }
}
