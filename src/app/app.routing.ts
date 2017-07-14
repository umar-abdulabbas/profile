import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
//import { SkillsComponent } from './skills/skills.component';
//import { WorksComponent } from './works/works.component';
//import { LabComponent } from './lab/lab.component';
//import { ContactComponent } from './contact/contact.component';
//import { FooterComponent } from './footer/footer.component';

const MAINMENU_ROUTES: Routes = [
    {path:'', redirectTo:'/intro',pathMatch:'full'},
    {path:'intro', component:IntroComponent},
    {path:'about', component:AboutComponent}
];

export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
