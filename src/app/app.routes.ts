import { provideRouter, RouterConfig }  from '@angular/router';
import { QuestionListComponent } from './question/question-list.component';
import { QuestionFormComponent } from './question/question-form.component';
import { AboutComponent } from './about/about.component';

const routes: RouterConfig = [
  {
    path: '',
    component: QuestionListComponent,
    pathMatch: 'full'
  },
  {
    path: 'question/add',
    component: QuestionFormComponent
  },
  {
    path: 'question/:id/edit',
    component: QuestionFormComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];