import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SkillsComponent } from './component/skills/skills.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ContactsComponent } from './component/contacts/contacts.component';

export const routes: Routes = [

    {path:'', component:HomeComponent},
    {path:'skills', component:SkillsComponent},
    {path:'projects', component:ProjectsComponent},
    {path:'contacts', component:ContactsComponent}
];
