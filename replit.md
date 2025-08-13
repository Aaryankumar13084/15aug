# Overview

This is a patriotic Indian cultural platform called "भारत माता" (Bharat Mata) that celebrates India's heritage through music, history, and interactive content. The application features a React frontend with a modern design showcasing patriotic songs, historical events, quizzes, and cultural information. It's built as a single-page application with smooth scrolling navigation between sections including music, history, quizzes, and about content.

## Recent Updates (August 13, 2025)
- **MUSIC PAGE SEPARATION**: Created dedicated Music page accessed via navigation menu
  - Removed Music section from home page to improve navigation
  - Created separate /music route with full music player functionality
  - Updated header navigation to link to dedicated Music page
  - Enhanced Music page with back navigation and patriotic styling
  - Maintained all original audio functionality with play/pause controls

## Previous Updates (August 12, 2025)
- Enhanced 3D flag animation with realistic cloth-like waving motion
- Improved flag raising animation from bottom to top with smooth transitions
- Added detailed Ashoka Chakra with 24 spokes for authenticity
- Enhanced pole design with gradient effects and realistic base
- Implemented proper CSS animations for natural flag movement
- Created audio directory structure for national anthem playback
- **MAJOR UPGRADE**: Implemented advanced 3D segmented flag animation
  - Flag divided into 8 segments for realistic curved waving effect
  - Each segment has individual rotation and timing for natural cloth motion
  - Golden pole design with multi-tier base matching reference image
  - Enhanced Ashoka Chakra positioning and detail
  - Perspective-based 3D transforms for depth and realism

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18 with TypeScript**: Modern React application using functional components and hooks
- **Vite Build System**: Fast development server and optimized production builds
- **Single Page Application**: Uses Wouter for lightweight client-side routing
- **Component Structure**: Organized into reusable UI components and page-specific sections

## UI Framework and Design
- **Shadcn/UI Components**: Comprehensive component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom color scheme for Indian flag colors
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Custom Theming**: Indian-inspired color palette with saffron, flag-green, and navy-blue variables

## State Management
- **TanStack React Query**: Server state management and caching for API interactions
- **React Hooks**: Local state management using useState and useEffect
- **Custom Hooks**: Specialized hooks for audio player functionality and mobile detection

## Audio System
- **Web Audio API**: Custom audio player hook for playing patriotic songs
- **Static Audio Serving**: Express.js serves audio files from `/server/public/audio/` directory
- **Audio Controls**: Play/pause functionality with progress tracking

## Backend Architecture
- **Express.js Server**: Node.js backend with TypeScript support
- **Static File Serving**: Serves audio files and frontend build assets
- **Development Integration**: Vite middleware integration for hot module replacement
- **API Structure**: RESTful endpoints with health check functionality

## Database Design
- **Drizzle ORM**: Type-safe database schema definitions and migrations
- **PostgreSQL**: Primary database using Neon serverless PostgreSQL
- **User Schema**: Basic user management with username/password authentication
- **Migration System**: Drizzle-kit for database schema migrations

## Development Workflow
- **TypeScript Configuration**: Strict type checking across client, server, and shared code
- **Path Aliases**: Clean import statements using @ prefixes for components and utilities
- **ESM Modules**: Modern ES module syntax throughout the application
- **Hot Reloading**: Development server with instant updates

## File Organization
- **Monorepo Structure**: Client, server, and shared code in organized directories
- **Shared Schema**: Common TypeScript types and database schemas accessible to both frontend and backend
- **Component Library**: Comprehensive UI component library in `/client/src/components/ui/`
- **Asset Management**: Static assets and fonts served efficiently

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **TypeScript**: Full TypeScript support across the application
- **Vite**: Build tool and development server

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Radix UI**: Accessible component primitives for complex UI elements
- **Lucide React**: Modern icon library for consistent iconography
- **Class Variance Authority**: Type-safe CSS class composition

## Backend Infrastructure
- **Express.js**: Web application framework for Node.js
- **Drizzle ORM**: TypeScript ORM for database operations
- **Neon Database**: Serverless PostgreSQL database provider
- **Express Session**: Session management with PostgreSQL store

## Development Tools
- **ESBuild**: Fast JavaScript bundler for production builds
- **TSX**: TypeScript execution environment for development
- **Drizzle Kit**: Database migration and introspection tools

## Font Integration
- **Google Fonts**: Inter font family for Latin text
- **Noto Sans Devanagari**: Unicode font for Hindi/Devanagari script support
- **Custom Font Loading**: Optimized font loading with preconnect hints

## Audio and Media
- **Web Audio API**: Native browser audio playback capabilities
- **Static File Serving**: Express.js middleware for serving audio content
- **Date-fns**: Date manipulation and formatting utilities