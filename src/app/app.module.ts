import { NgModule,Pipe, PipeTransform} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdTabsModule, MdGridListModule, MdInputModule, MdListModule, MdProgressBarModule, MdCardModule, MdTableModule, MdSidenavModule} from '@angular/material';
import { CONST_ROUTING } from './app.routing'; 
import { AppComponent } from './app.component';
import { AnimationsComponent} from './animations/animations.component';
import { MenuComponent } from './menu/menu.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorksComponent } from './works/works.component';
import { LabComponent } from './lab/lab.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HamburgerComponent } from './hamburger/hamburger.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimationsComponent,
    MenuComponent,
    IntroComponent,
    AboutComponent,
    SkillsComponent,
    WorksComponent,
    LabComponent,
    ContactComponent,
    FooterComponent,
    CarouselComponent,
   
    HamburgerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdTabsModule,
    MdGridListModule, 
    MdInputModule,
    MdListModule,
    MdProgressBarModule,
    MdCardModule,
    MdTableModule,
    MdSidenavModule,
    FlexLayoutModule
  ],
   exports: [MdButtonModule, MdCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

