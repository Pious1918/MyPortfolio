import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterModule } from '@angular/router';


interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

interface Skill {
  icon: string;
  title: string;
  items: string[];
}


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule,FormsModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  
  navigationItems = [
    { label: 'Home', route: '/' },
    { label: 'Skills', route: '/skills' },
    { label: 'Projects', route: '/projects' },
    { label: 'contacts', route: '/contacts' }
  ];


  
}
