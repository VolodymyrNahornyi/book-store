import {RouterModule, Routes} from "@angular/router";
import {ContainerComponent} from "./container/container.component";
import {BookDetailComponent} from "./container/book-detail/book-detail.component";
import {AboutComponent} from "./about/about.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', component: ContainerComponent},
  {path: 'Books', component: ContainerComponent},
  {path: 'Books/:id', component: BookDetailComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Contacts', component: ContactsComponent},
  {path: 'Login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class RoutingModule { }
