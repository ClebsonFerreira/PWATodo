import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardapioBaseComponent } from './cardapio-base/cardapio-base.component';


const routes: Routes = [{ path: ':nome', component: CardapioBaseComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
