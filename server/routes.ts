import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve audio files
  app.use('/api/audio', express.static(path.join(process.cwd(), 'server', 'public', 'audio')));

  // API routes can be added here for future features
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Bharat Mata server is running' });
  });

  const httpServer = createServer(app);
  return httpServer;
}
