import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questions;
  activeQuestion;
  results;
  
  constructor(
    private http: HttpClient,
    private answerService: AnswerService
    ) { }

  ngOnInit(){
    this.setUpAnswerService();
    this.questions = this.getQuestions();
    this.activeQuestion = 0;
    this.results = this.getResults();
  }

  setUpAnswerService(){
    this.answerService.addAnswer(0);
    this.answerService.addAnswer(0);
  }

  private getQuestions(){
    return this.http.get('/assets/questions.json');
  }  

  private getResults(){
    return this.http.get('/assets/results.json');
  }

  nextQuestion(){
    this.activeQuestion+=1;
  }

  previousQuestion(){
    this.activeQuestion-=1;
  }

  jumpToResult(){
    this.activeQuestion=-1;
  }

  jumpToFirstQuestion(){
    this.activeQuestion=0;
  }

  showResults(){
    console.log("ActiveQuestion: " + this.activeQuestion);
    return this.activeQuestion == -1;
  }  

  showResult(result){
    let sum = this.answerService.sumUp();
    for(let wert of result.werte){
      if(sum == wert){
        return true;
      }
    }
    return false;
  }

  showQuestion(questionId){
    return this.activeQuestion == questionId;
  }

}