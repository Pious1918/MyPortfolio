import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent ,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  cvUrl: string = 'https://drive.google.com/file/d/12jaLoKpCOeHooOl-cIjKE_SgpiotPWm1/view?usp=sharing';
  phoneNumber: string = '';

  title = 'N S Pious';

  hi: string = "Hi , I am "
  name: string = "N S Pious"
  designation: string = "Full-Stack Web Developer | MEAN Stack Specialist | Expert in JavaScript, Angular, Node.js, and MongoDB"
  githubLink: string = "https://github.com/Pious1918"
  linkedInlink: string = "www.linkedin.com/in/n-s-pious-53a2352a1"

  profileImage: string = "assets/pp.jpeg"


  downloadCV(): void {
    if (this.cvUrl) {
      window.open(this.cvUrl, '_blank');
    }
  }

  contactMe(): void {
    if (this.phoneNumber) {
      window.location.href = `tel:${this.phoneNumber}`;
    }
  }

  
}
