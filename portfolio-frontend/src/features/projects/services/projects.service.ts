import { Project } from '@/types';

// Hardcoded static collection of projects since backend is removed.
export const getProjects = async (): Promise<Project[]> => {
  return [
    {
      id: '1',
      title: 'Store',
      description: 'A comprehensive Store application built with C# and Clean Architecture, utilizing a highly optimized PostgreSQL database.',
      imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60',
      repositoryUrl: 'https://github.com/b2i0l0a3l/Store',
      createdAt: new Date().toISOString()
    },
    {
      id: '2',
      title: 'Task Manager',
      description: 'An advanced Task Management system leveraging Next.js on the frontend and a robust full-stack .NET backend architecture.',
      imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=60',
      repositoryUrl: 'https://github.com/b2i0l0a3l/TaskManager',
      createdAt: new Date().toISOString()
    },
    {
      id: '3',
      title: 'School Management',
      description: 'A powerful management platform for educational institutions using T-SQL for complex data procedures and robust business logic.',
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=60',
      repositoryUrl: 'https://github.com/b2i0l0a3l/SchoolManagement',
      createdAt: new Date().toISOString()
    },
    {
      id: '4',
      title: 'Chat API',
      description: 'A high-performance real-time Chat API constructed with modern frameworks and organized via Clean Architecture principles.',
      imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60',
      repositoryUrl: 'https://github.com/b2i0l0a3l/ChatApi',
      createdAt: new Date().toISOString()
    }
  ];
};
