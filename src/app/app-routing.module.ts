import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminBaseComponent } from './admin-base/admin-base.component';
import { CardapioBaseComponent } from './cardapio-base/cardapio-base.component';


const routes: Routes = [{ path: ':nome', component: CardapioBaseComponent }, { path: ':nome/admin', component: AdminBaseComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
