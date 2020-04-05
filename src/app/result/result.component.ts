import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  result;

  constructor(
    private answerService: AnswerService
  ) { }

  ngOnInit() {
    this.result = this.answerService.sumUp();
  }

}