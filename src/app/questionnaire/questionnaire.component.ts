import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questions;
  activeQuestion;
  
  constructor(
    private http: HttpClient
    ) { }

  ngOnInit(){
    this.questions = this.getQuestions();
    console.log("Questions geladen");
    this.activeQuestion = 0;
  }

  private getQuestions(){
    return this.http.get('/assets/questions.json');
  }

  nextQuestion(){
    this.activeQuestion+=1;
  }

  previousQuestion(){
    this.activeQuestion-=1;
  }

}