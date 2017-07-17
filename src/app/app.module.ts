import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdTabsModule, MdGridListModule, MdInputModule, MdListModule} from '@angular/material';
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
    FooterComponent
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
    MdListModule
  ],
   exports: [MdButtonModule, MdCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

