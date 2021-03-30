import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { LoginComponent } from './login/login.component';  
import { DashboardComponent } from './dashboard/dashboard.component';  
import { AuthGuard } from './guards/auth.guard';
import { CartComponent } from './cart/cart.component';
import { FoodsComponent } from './foods/foods.component';
  
const routes: Routes = [  
   { path: 'login', component: LoginComponent },  
   { path: 'dashboard', component: DashboardComponent, canActivate : [AuthGuard] }  ,
   {path:'cart', component:CartComponent},
  {path:'foods', component:FoodsComponent}
];  
  
@NgModule({  
   imports: [RouterModule.forRoot(routes)],  
   exports: [RouterModule]  
})  
export class AppRoutingModule { }