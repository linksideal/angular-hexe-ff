import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { QuestionComponent } from './question/question.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { OptionComponent } from './option/option.component';
import { AnswerService } from './answer.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, QuestionComponent, QuestionnaireComponent, OptionComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AnswerService]
})
export class AppModule { }
