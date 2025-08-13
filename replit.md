# Overview

This is a patriotic Indian cultural platform called "भारत माता" (Bharat Mata) that celebrates India's heritage through music, history, and interactive content. The application features a React frontend with a modern design showcasing patriotic songs, historical events, quizzes, and cultural information. It's built as a single-page application with smooth scrolling navigation between sections including music, history, quizzes, and about content.

## Recent Updates (August 13, 2025)
- **PROJECT MIGRATION**: Successfully migrated from Replit Agent to standard Replit environment
  - Installed all required dependencies and packages
  - Verified proper TypeScript, React, and Express.js functionality
  - Confirmed audio playback and routing systems working correctly
- **MUSIC COLLECTION EXPANSION**: Enhanced music library with authentic Indian patriotic songs
  - Added 8 classic patriotic songs including Vande Mataram, Saare Jahan Se Achha
  - Included famous songs like Ae Mere Watan Ke Logon, Jhanda Uncha Rahe Hamara
  - Added Unity anthem Mile Sur Mera Tumhara and INA song Kadam Kadam Badhaye Ja
  - Added Desh Rangila celebrating India's vibrant spirit
  - Created comprehensive music guide (HOW_TO_ADD_MUSIC.md) for easy future additions
  - Organized audio files in proper server/public/audio/ directory structure
  - User successfully replaced old placeholder songs with new patriotic collection
  - All 8 songs now loading properly with 200 status codes in server logs
- **HEADER NAVIGATION ENHANCEMENT**: Streamlined navigation without dropdown menu
  - Moved all navigation links (Home, About, Music, History, Quiz) to main header
  - Added responsive navigation for large, medium, and mobile screens
  - Enhanced mobile menu with icons and improved styling
  - Removed dropdown menu for cleaner, more accessible navigation
- **HOME PAGE VIDEO UPGRADE**: Replaced national anthem audio with animated Indian flag
  - Added beautiful looping Indian flag animation GIF to center of home page
  - Positioned video prominently in hero section with shadow and rounded styling
  - Removed audio player controls for cleaner visual focus
  - Enhanced patriotic visual experience with authentic flag animation
- **HISTORY PAGE ENHANCEMENT**: Added authentic images for all freedom fighters
  - Integrated real historical photos for Gandhi, Bhagat Singh, Azad, Bose, Patel, Rani Lakshmibai, etc.
  - Implemented fallback system with icons if images fail to load
  - Enhanced visual appeal with circular photo frames and proper styling
- **NAVIGATION CLEANUP**: Streamlined header menu for better user experience
  - Removed "Home" and "About" links from both desktop and mobile navigation
  - Simplified menu to focus on core content: Music, History, and Quiz
  - Maintained clean, focused navigation structure
- **HISTORY PAGE CREATION**: Built comprehensive History page featuring Indian freedom fighters
  - Created dedicated /history route with 10 great Indian revolutionaries
  - Added bilingual content (Hindi/English) for each freedom fighter
  - Included key figures: Gandhi, Bhagat Singh, Azad, Bose, Patel, Rani Lakshmibai, etc.
  - Enhanced with patriotic styling and flag emojis in header
  - Updated navigation menu to link to separate History page
  - Removed History section from home page for better organization
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