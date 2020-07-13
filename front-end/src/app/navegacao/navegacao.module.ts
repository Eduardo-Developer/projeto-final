import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        HomeComponent,
        MenuComponent,
        FooterComponent,
        NotFoundComponent


    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule

    ],
    exports: [
        HomeComponent,
        MenuComponent,
        FooterComponent,
        NotFoundComponent

    ]
})

export class NavegacaoModule { }

