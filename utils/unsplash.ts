import { cache } from 'react';

interface UnsplashPhoto {
  url: string;
  authorName: string;
  authorUsername: string;
  downloadLocation: string;
}

// Predefined images for consistent display
const PREDEFINED_IMAGES = {
  'building-ai-powered-interfaces': {
    id: '5bYxXawHOQg',  // A modern UI/UX design image
    fallback: {
      url: 'https://images.unsplash.com/photo-1643208589889-0735ad7218f0',
      authorName: 'Nubelson Fernandes',
      authorUsername: 'nublson',
      downloadLocation: '',
    }
  },
  'getting-started-chatgpt-developers-guide': {
    id: 'f77Bh3inUpE',  // AI/Technology related image
    fallback: {
      url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
      authorName: 'Levart_Photographer',
      authorUsername: 'levart_photographer',
      downloadLocation: '',
    }
  },
  'accelerate-web-development-bolt-new': {
    id: '4hbJ-eymZ1o',  // Code/Development related image
    fallback: {
      url: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713',
      authorName: 'Florian Olivo',
      authorUsername: 'florianolv',
      downloadLocation: '',
    }
  }
};

const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

export const getUnsplashImage = cache(async (query: string, slug?: string): Promise<UnsplashPhoto> => {
  // If we have a predefined image for this slug, use it
  if (slug && PREDEFINED_IMAGES[slug]) {
    try {
      const { id, fallback } = PREDEFINED_IMAGES[slug];
      const response = await fetch(
        `https://api.unsplash.com/photos/${id}`,
        {
          headers: {
            'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`,
            'Accept-Version': 'v1'
          }
        }
      );

      if (!response.ok) {
        console.warn(`Unsplash API error for ID ${id}: ${response.status}`);
        return fallback;
      }

      const photo = await response.json();
      return {
        url: photo.urls.regular,
        authorName: photo.user.name,
        authorUsername: photo.user.username,
        downloadLocation: photo.links.download_location,
      };
    } catch (error) {
      console.error(`Error fetching predefined image for ${slug}:`, error);
      return PREDEFINED_IMAGES[slug].fallback;
    }
  }

  // If we're in development or don't have an API key, return a fallback image immediately
  if (process.env.NODE_ENV !== 'production' || !UNSPLASH_ACCESS_KEY) {
    return {
      url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
      authorName: 'Default Image',
      authorUsername: 'unsplash',
      downloadLocation: '',
    };
  }

  try {
    const searchResponse = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
      {
        headers: {
          'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`,
          'Accept-Version': 'v1'
        }
      }
    );

    if (!searchResponse.ok) {
      console.warn(`Unsplash API error: ${searchResponse.status}`);
      return {
        url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
        authorName: 'Default Image',
        authorUsername: 'unsplash',
        downloadLocation: '',
      };
    }

    const data = await searchResponse.json();
    const photo = data.results?.[0];

    if (!photo) {
      console.warn(`No results found for query: ${query}`);
      return {
        url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
        authorName: 'Default Image',
        authorUsername: 'unsplash',
        downloadLocation: '',
      };
    }

    // Track download
    if (process.env.NODE_ENV === 'production') {
      try {
        await fetch(photo.links.download_location, {
          headers: {
            'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`,
            'Accept-Version': 'v1'
          }
        });
      } catch (downloadError) {
        console.warn('Failed to track download:', downloadError);
      }
    }

    return {
      url: photo.urls.regular,
      authorName: photo.user.name,
      authorUsername: photo.user.username,
      downloadLocation: photo.links.download_location,
    };
  } catch (error) {
    console.error(`Error processing ${query}:`, error);
    return {
      url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
      authorName: 'Default Image',
      authorUsername: 'unsplash',
      downloadLocation: '',
    };
  }
});
