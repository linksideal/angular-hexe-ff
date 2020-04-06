import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface Result {
  results: number[];
  text: string;
}

@Injectable()
export class AnswerService {
  answers = [];

  public addAnswer(wert) {
    this.answers.push(wert);
  }

  setAnswer(questionId, wert) {
    this.answers.fill(wert, questionId, questionId + 1);
  }

  getAnswer(questionId) {
    return this.answers[questionId];
  }

  sumUp() {
    let sum: number = 0;
    for (let answer of this.answers) {
      sum += parseInt(answer);
    }
    return sum;
  }

  constructor(private http: HttpClient) {}
}
