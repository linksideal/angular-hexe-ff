import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question;
  options;
  imgUrl;

  constructor() { }

  ngOnInit(){
    this.options = this.question.options;
    this.setImgUrl();
    
    console.log("Options geladen");
  }

  setImgUrl(){
    var baseUrl = "https://cdn.jsdelivr.net/gh/linksideal/angular-hexe-ff@master/src/assets/img/";
    this.imgUrl = baseUrl + this.question.img;
  }

  inputGroup(){
    return "question_" + this.question.id;
  }

}