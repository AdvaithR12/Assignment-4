import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NewBookComponent } from './new-book/new-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BookComponent } from './book/book.component';
import { SignupComponent } from './signup/signup.component'; 
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  {
    path: 'books',

    component:BookComponent
  },
  {
    path: 'add',
    canActivate:[AuthGuard],
    component: NewBookComponent
  },
  {
    path: 'update',
    canActivate:[AuthGuard],
    component: EditBookComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'signup', component:SignupComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
