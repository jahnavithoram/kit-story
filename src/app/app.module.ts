import { BrowserModule } from '@angular/platform-browser';    
import { NgModule } from '@angular/core';    
import { AppRoutingModule } from './app-routing.module';    
import { AppComponent } from './app.component';    
import { LoginComponent } from './login/login.component';    
import { DashboardComponent } from './dashboard/dashboard.component';    
import { AuthGuard } from './guards/auth.guard';    
import { FormsModule, ReactiveFormsModule } from '@angular/forms';    
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FoodsComponent } from './foods/foods.component';
import { CartComponent } from './cart/cart.component';

@NgModule({    
   declarations: [    
   AppComponent,    
   LoginComponent,    
   DashboardComponent, FoodsComponent, CartComponent    
],    
imports: [    
   BrowserModule,    
   AppRoutingModule,    
   FormsModule,    
   ReactiveFormsModule,   
   MDBBootstrapModule, 
],    
   providers: [AuthGuard],    
   bootstrap: [AppComponent]    
})    
export class AppModule { }    