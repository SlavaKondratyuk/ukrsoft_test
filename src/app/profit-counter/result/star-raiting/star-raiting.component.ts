import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-star-raiting',
  templateUrl: './star-raiting.component.html',
  styleUrls: ['./star-raiting.component.scss'],
  providers: [MatSnackBar]
})
export class StarRatingComponent implements OnInit {
  @Input() private rating = 3;
  @Input() private starCount = 5;
  @Input() color = 'white';
  @Output() private ratingUpdated = new EventEmitter();

  private snackBarDuration = 2000;
  ratingArr: Array<number> = [];

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    console.log("a "+this.starCount)
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  onClick(rating:number) {
    console.log(rating)
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdated.emit(rating);
    this.rating = rating;
    return false;
  }

  showIcon(index:number) {
    if (this.rating >= index + 1) {
      return 'white';
    } else {
      return 'transparent';
    }
  }
}
