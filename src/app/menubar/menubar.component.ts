import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  lang: string = "english";
  constructor(private translateService: TranslateService) { 
    this.translateService.use(this.lang);
  }

  ngOnInit() {
  }

  change() {
    alert(this.lang);
    this.translateService.use(this.lang);
  }
}
