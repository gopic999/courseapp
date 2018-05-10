import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../../services/review.service';

@Component({
  selector: 'reviewlist',
  templateUrl: './reviewlist.component.html',
  styleUrls: ['./reviewlist.component.css']
})
export class ReviewlistComponent implements OnInit {

  reviews;
  constructor(private reviewService: ReviewService) { 
    reviewService.getReviews().subscribe(
      (data) => { this.reviews = data},
      () => {alert('Something went wrong');}
    )
  }

  ngOnInit() {
  }

}
