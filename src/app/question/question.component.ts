import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question;
  answers;
  imgUrl;

  constructor() { }

  ngOnInit(){
    this.answers = this.question.answers;
    this.setImgUrl();
    
    console.log("Answers geladen");
  }

  setImgUrl(){
    var baseUrl = "https://cdn.jsdelivr.net/gh/linksideal/angular-hexe-ff@master/src/assets/img/";
    this.imgUrl = baseUrl + this.question.img;
  }

}