import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionsComponent } from './questions/questions.component';
import { MyQuestionsComponent } from './my-questions/my-questions.component';
import { AskAQuestionComponent } from './ask-aquestion/ask-aquestion.component';
import { SubquestionsComponent } from './questions/subquestions/subquestions.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'questions', component: QuestionsComponent, pathMatch: 'full' },
      { path: 'myQuestions', component: MyQuestionsComponent },
      { path: 'askAQuestion', component: AskAQuestionComponent }
    ]
  },
  // { path: 'questions', component: QuestionsComponent, pathMatch: 'full' },
  // { path: 'myQuestions', component: MyQuestionsComponent },
  // { path: 'askAQuestion', component: AskAQuestionComponent },
  { path: '', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    DashboardComponent,
    QuestionsComponent,
    MyQuestionsComponent,
    AskAQuestionComponent,
    SubquestionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
