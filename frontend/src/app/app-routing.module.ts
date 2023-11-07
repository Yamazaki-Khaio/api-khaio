import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// carregando os modulos de rotas de cada feature
const routes: Routes = [
{path: '' , loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
