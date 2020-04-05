import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question;
  answers;

  constructor() { }

  ngOnInit(){
    this.answers = this.question.answers;
    console.log("Answers geladen");
  }

}