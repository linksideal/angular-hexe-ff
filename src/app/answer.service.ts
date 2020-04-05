import { Injectable } from '@angular/core';

@Injectable()
export class AnswerService {
  answers: number[] = [0,0,0,0,0];

  setAnswer(questionId, wert){
    this.answers[questionId] = wert;
  }

  getAnswer(questionId){
    return this.answers[questionId];
  }

  sumUp(){
    var sum = this.answers.reduce((acc, cur) => acc + cur, 0);
    return sum;
  }

  constructor() { }



}