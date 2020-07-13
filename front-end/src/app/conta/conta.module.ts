import { ContaService } from './services/conta.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CustomFormsModule } from 'ngx-custom-validators';

import { ContaRoutingModule } from './conta.route';


import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ContaAppComponent } from './conta.app.component';




@NgModule({
  declarations: [
    ContaAppComponent,
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule
  ],
  providers: [
    ContaService
  ]
})
export class ContaModule { }
