import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../services/enquiry.service';

@Component({
  selector: 'enquiryform',
  templateUrl: './enquiryform.component.html',
  styleUrls: ['./enquiryform.component.css']
})
export class EnquiryformComponent implements OnInit {

  name:string;
  email: string;
  message: string;
  errors: boolean = false;
  errorlist: string[];
  sending: boolean;
  filename: string;
  constructor(private enquiryService: EnquiryService) { }

  ngOnInit() {
  }

  sendEnquiry() {
    var regex=/^[a-zA-Z][a-zA-Z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]{3,5}$/;
    this.errorlist=[];
    this.errors = false;
    if(this.name == undefined || this.name.length==0)
      this.errorlist.push("Name must be filled");
      else if (!regex.test(this.email))
      this.errorlist.push("Email form not correct");

      if(this.errorlist.length > 0)
      this.errors=true;
      else {
        this.sending=true;
        this.filename = 'loading.gif';

        let temp={name: this.name, email: this.email, message: this.message};
        this.enquiryService.sendEnquiry(temp).subscribe(
          (data) => {
            this.filename='sent.png';
            setTimeout(() => {
              this.sending=false;
              this.name='';
              this.name='';
              this.email='';
              this.message='';
            }, 2000);
          },
          (error) => {
            alert('Messgae is sent');
            setTimeout(() => {
              this.sending=false;
              this.name='';
              this.name='';
              this.email='';
              this.message='';
            }, 2000);
          }
        );
        
        // setTimeout(() => { this.filename='sent.png'}, 10000);
      }
  }

}
