import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms'
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviewForm: any;
  courses: string[] = ['Java', '.Net', 'Angular', 'SQL', 'ReactJS'];
  constructor(private formBuilder: FormBuilder, private reviewService: ReviewService) { 
    this.reviewForm = this.formBuilder.group({
      name: ['', [Validators.required, isSymbols]],
      message: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      course: ['JAVA']
    });
  }

  ngOnInit() {
  }

  saveReview() {
    var temp: any = {
      name: this.reviewForm.value.name,
      email: this.reviewForm.value.email,
      course: this.reviewForm.value.course,
      message: this.reviewForm.value.message,
      reviewdate: new Date().toString()
    }

    this.reviewService.postReviews(temp).subscribe(
      data => {
        alert('Your review is saved');
        location.reload();
      },
      (error) => alert('Not saved --- some Error')
    )
  }

}

function isSymbols(input: FormControl) {
  let temp: RegExp = new RegExp('[\._$@0-9]'); //change to backward slash
  let temp1: boolean = false;
  if(!temp.test(input.value))
    temp1 = true;
  
    return temp1 ? null : {needFormat: true};
}
