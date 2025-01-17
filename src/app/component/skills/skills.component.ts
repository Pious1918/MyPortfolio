import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  iconUrl: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  frontendSkills: Skill[] = [
    { name: 'HTML', iconUrl: 'assets/html.png' },
    { name: 'CSS', iconUrl: 'assets/css.' },
    { name: 'JavaScript', iconUrl: 'assets/icons/javascript.svg' },
    { name: 'TypeScript', iconUrl: 'assets/icons/typescript.svg' },
    { name: 'React', iconUrl: 'assets/icons/react.svg' },
    { name: 'Angular', iconUrl: 'assets/icons/angular.svg' }
  ];

  backendSkills: Skill[] = [
    { name: 'Node.js', iconUrl: 'assets/icons/nodejs.svg' },
    { name: 'Python', iconUrl: 'assets/icons/python.svg' },
    { name: 'Java', iconUrl: 'assets/icons/java.svg' },
    { name: 'MongoDB', iconUrl: 'assets/icons/mongodb.svg' },
    { name: 'PostgreSQL', iconUrl: 'assets/icons/postgresql.svg' },
    { name: 'Docker', iconUrl: 'assets/icons/docker.svg' }
  ];
}
