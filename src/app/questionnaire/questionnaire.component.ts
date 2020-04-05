import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questions;
  
  constructor(
    private http: HttpClient
    ) { }

  ngOnInit(){
    this.questions = this.getQuestions();
    console.log("Questions geladen");
  }

  getQuestions(){
    return this.http.get('/assets/questions.json');
  }

}