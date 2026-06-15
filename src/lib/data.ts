import { Project, PersonalInfo } from '@/types';

export const projects: Project[] = [
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico completa con Next.js, Stripe para pagos y PostgreSQL como base de datos. Incluye carrito de compras, autenticación de usuarios y panel de administración.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/usuario/ecommerce',
    featured: true,
  },
  {
    slug: 'task-manager',
    title: 'Task Manager App',
    description: 'Aplicación de gestión de tareas con autenticación JWT, actualizaciones en tiempo real usando Socket.io y almacenamiento en MongoDB.',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    demoUrl: 'https://tasks.example.com',
    githubUrl: 'https://github.com/usuario/task-manager',
    featured: true,
  },
  {
    slug: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'Dashboard interactivo del clima con gráficos dinámicos usando Chart.js, pronósticos semanales y datos en tiempo real de OpenWeather API.',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Next.js', 'Chart.js', 'OpenWeather API'],
    githubUrl: 'https://github.com/usuario/weather-app',
    featured: false,
  },
];

export const personalInfo: PersonalInfo = {
  name: 'Luis Miguel Toledo La Fuente',
  title: 'Full Stack Developer',
  description: 'Desarrollador apasionado por crear experiencias web excepcionales con tecnologías modernas. Especializado en React, Next.js y Node.js.',
  email: 'luis@email.com',
  github: 'https://github.com/luistoledolafuente',
  linkedin: 'https://linkedin.com/in/luistoledolafuente',
  siteUrl: 'https://luis-portfolio.vercel.app',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0',
};
