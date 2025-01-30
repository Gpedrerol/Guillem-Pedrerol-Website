import { createApi } from 'unsplash-js';
import * as fs from 'fs';
import * as path from 'path';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

// Initialize the Unsplash API client
const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY || '',
  fetch: fetch as any,
});

const imageQueries = [
  {
    query: 'lightning storm technology',
    filename: 'ai-implementation.jpg'
  },
  {
    query: 'chatgpt artificial intelligence',
    filename: 'ai-training.jpg'
  },
  {
    query: 'artificial intelligence robot hand',
    filename: 'ai-ui.jpg'
  }
];

async function downloadImage(url: string, filename: string) {
  const response = await fetch(url);
  const buffer = await response.buffer();
  const outputPath = path.join(process.cwd(), 'public', 'images', 'blog', filename);
  
  // Ensure the directory exists
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(outputPath, buffer);
  console.log(`Downloaded: ${filename}`);
}

async function fetchAndSaveImages() {
  for (const { query, filename } of imageQueries) {
    try {
      const result = await unsplash.search.getPhotos({
        query,
        perPage: 1,
        orientation: 'landscape',
      });

      if (result.errors) {
        console.error('Error fetching from Unsplash:', result.errors[0]);
        continue;
      }

      const photo = result.response?.results[0];
      if (!photo) {
        console.error(`No results found for query: ${query}`);
        continue;
      }

      await downloadImage(photo.urls.regular, filename);
    } catch (error) {
      console.error(`Error processing ${query}:`, error);
    }
  }
}

fetchAndSaveImages().catch(console.error);
