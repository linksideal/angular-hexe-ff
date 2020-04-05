import { Component, OnInit, Input } from '@angular/core';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  @Input() option;
  @Input() inputGroup;
  @Input() questionId;

  constructor(
    private answerService: AnswerService
  ) { }

  ngOnInit() {
  }

  setAnswer(wert){
    this.answerService.setAnswer(this.questionId, wert);
    console.log("neues Service Wert: " + this.answerService.getAnswer(this.questionId));
    console.log("neues Summe: " + this.answerService.sumUp());
  }

}