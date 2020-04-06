import { Component, OnInit, Input } from '@angular/core';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() result;

  constructor( ) { }

  ngOnInit() {
  }

}