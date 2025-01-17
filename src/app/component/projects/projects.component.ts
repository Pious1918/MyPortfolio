import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [  FormsModule , CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {



  cards = [
    {
      image: 'https://img.freepik.com/premium-vector/content-creators-illustration-clip-art-design-social-media-online-live-video-stream-web-camera_609667-625.jpg',
      title: 'Streaming Application',
      subtitle: 'Microservices | Angular | express js | Mongodb | grpc | Rabbitmq | Webrtc | Socket.io | ffmpeg',
      name:"Streamio",
      liveLink:"https://streamio-frontend-kzuy.vercel.app/login",
      frontendLink:"https://github.com/Pious1918/StreamioFrontend",
      backendLink:"https://github.com/Pious1918/StreamioBackend",
      Description:"Streamio is a feature-rich streaming platform built using the MEAN Stack with a microservices architecture. It offers adaptive video streaming via AWS S3 and CloudFront, live streaming with real-time chat powered by WebRTC and Socket.IO, and secure user interactions with JWT-based authentication. With state management using NgRx, robust TypeScript implementation, and a sleek UI styled with Tailwind CSS, Streamio provides a seamless and engaging user experience for streaming and communication."
    },
    {
      image: 'https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-20156.jpg',
      title: 'Ecommerce Application',
      subtitle: 'Ejs | express js | Mongodb | chart js | ',
      name:"Funky",
      gitlink:"https://github.com/Pious1918/Funky.com",
      Description:"Developed a comprehensive e-commerce platform with features such as product, category, user, order, offer, coupon, wallet, and wishlist management. Built using Node.js and Express.js in an MVC architecture with an EJS-based frontend, the platform ensures secure authentication with JWT, seamless payments via Razorpay, and OTP verification through Nodemailer. Hosted on AWS EC2 with DNS management using Amazon Route 53, it offers a reliable, scalable, and user-friendly shopping experience."
    },
    {
      image: 'https://img.freepik.com/premium-vector/web-content-illustration-concept-with-characters_269730-154.jpg',
      title: 'Content Management System',
      subtitle: 'Angular | express js | Mongodb | Socket.io',
      name:"JotIt",
      liveLink:"https://jotit-frontend.vercel.app/login",
      frontendLink:"https://github.com/Pious1918/JotitFrontend",
      backendLink:"https://github.com/Pious1918/JotItBackend",
      Description:"Developed a content management system (CMS) using the MEAN Stack, offering features like drafting, publishing, editing, and deleting articles. The drafting process was enhanced with real-time collaboration powered by Socket.IO, enabling seamless and efficient content creation. This CMS is designed to provide a user-friendly experience with robust functionality for managing articles efficiently."
    },
    {
      image: 'https://img.freepik.com/free-vector/concept-image-upload-landing-page_23-2148298839.jpg',
      title: 'User Management System',
      name:"User Management System",
      subtitle: 'Angular | express js | Mongodb | GRPC | Microservices | Docker ',
      gitlink:"https://github.com/Pious1918/GRPC_UserManagement",
      Description:"Developed a user management system using the MEAN Stack, incorporating a microservices architecture to explore and understand service-to-service communication with gRPC. This project served as a hands-on learning experience in building scalable and modular systems while mastering the fundamentals of microservices and gRPC integration."

    },
    {
      image: 'https://img.freepik.com/free-vector/task-management-abstract-concept-illustration_335657-2127.jpg',
      title: 'Task Creator Application',
      name:"Task Creator Application",
      subtitle: 'Angular | express js | mongodb | Rabbitmq',
      gitlink:"https://github.com/Pious1918/Rabbitmq_Taskcreator",
      Description:"Developed a task creator application to explore asynchronous service-to-service communication in a microservices architecture using RabbitMQ. The app creates tasks, places them in a queue, and processes them after a delay, leveraging RabbitMQ's task queue for efficient and scalable message handling. This project provided hands-on experience in implementing asynchronous workflows in microservices."
    },
    {
      image: 'https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg',
      title: 'Netflix Clone',
      subtitle: 'Angular | TMDB integration',
      name:"Netflix Clone",
      gitlink:"https://github.com/Pious1918/Netflix_Clone-Angular",
      Description:"Developed a Netflix clone using Angular to gain hands-on experience in frontend development, focusing on component creation, state management, and other core Angular concepts. This project served as a practical exploration of building a dynamic and interactive user interface while mastering Angular's framework features."
    },
    {
      image: 'https://www.shutterstock.com/image-vector/crud-create-read-update-delete-600nw-2491185313.jpg',
      title: 'CRUD Application',
      name:"CRUD Application",
      subtitle: 'Angular | express js | Mongodb',
      gitlink:"https://github.com/Pious1918/AngularCRUD-App",
      Description:"Developed a CRUD application using the MEAN Stack to kickstart my journey into full-stack web development. This project provided a solid foundation in building dynamic, data-driven applications by seamlessly integrating frontend and backend technologies. It also enhanced my understanding of API functionality, CORS policies, and the significance of services in frontend development."
    },
    {
      image: 'https://img.freepik.com/free-vector/concept-image-upload-landing-page_23-2148298839.jpg',
      title: 'User Management System',
      name:"User Management System",
      subtitle: 'Node js',
      gitlink:"https://github.com/Pious1918/UserManagement-NodeJs",
      Description:"Created a user management system using Node.js with EJS as the frontend to kickstart my backend development journey. This project helped me understand the fundamentals of server-side rendering, routing, and managing user data effectively."
    },
    {
      image: 'https://media.rockstargames.com/rockstargames/img/global/news/upload/RockstarLogos_Instagram_v1.jpg',
      title: 'Rockstar Games Clone',
      name:"Rockstar Games Clone",
      subtitle: 'HTML | CSS | Javascipt | Bootstrap',
      gitlink:"https://github.com/Pious1918/Responsive-RockstarGames",
      Description:"Created a clone of the Rockstar Games website to learn about website design and achieve responsive layouts. By leveraging frameworks like Bootstrap, I gained hands-on experience in creating a visually appealing and mobile-friendly webpage, focusing on layout structure and responsiveness across different devices."
    },
    {
      image: 'https://www.vxchnge.com/wp-content/uploads/2024/06/amazon-prime-video-800x541.webp',
      title: 'Amazon Prime Videos Clone',
      name:"Amazon Prime Videos Clone",
      subtitle: 'Static website | HTML | CSS ',
      gitlink:"https://github.com/Pious1918/Static-AmazonPrime.",
      Description:"Created a clone of Amazon Prime Video to learn the basics of HTML and CSS as a foundation for my development journey. This project helped me understand the core principles of webpage structure, styling, and layout design, laying the groundwork for more advanced web development concepts."
    },
    {
      image: 'https://images.squarespace-cdn.com/content/v1/583c9c7d37c5810ef2696dbb/a53b86bd-c83f-441c-a169-3d2bc7ed13d3/Bose+Professional+Banner.png',
      title: 'Bose Audios Clone',
      name:"Bose Audios Clone",
      subtitle: 'Static website | HTML | CSS ',
      gitlink:"https://github.com/Pious1918/staticBose",
      Description:"Created a clone of the Bose audio webpage to learn the fundamentals of HTML and CSS. This project allowed me to practice webpage layout, styling, and responsive design, providing a solid foundation for my web development journey."
    },
  ];
  



  // Pagination logic
  currentPage = 1;
  itemsPerPage = 8;

  get paginatedCards() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.cards.slice(startIndex, startIndex + this.itemsPerPage);
  }

  totalPages() {
    return Math.ceil(this.cards.length / this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage = page;
    }
  }



  selectedProject: any = null;

  openModal(project: any) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }


}
