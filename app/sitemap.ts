import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
return [
    {
        url: 'https://ocean-connecting-sport-tour.vercel.app/',
        priority: 1.0,
        alternates: {
            languages: {
                en: 'https://ocean-connecting-sport-tour.vercel.app/en',
                fr: 'https://ocean-connecting-sport-tour.vercel.app/fr',
                ar: 'https://ocean-connecting-sport-tour.vercel.app/ar',
                es: 'https://ocean-connecting-sport-tour.vercel.app/es',
                de: 'https://ocean-connecting-sport-tour.vercel.app/de',
            },
        },
    },
    {
        url: 'https://ocean-connecting-sport-tour.vercel.app/contact',
        priority: 0.8,
        alternates: {
            languages: {
                en: 'https://ocean-connecting-sport-tour.vercel.app/en/contact',
                fr: 'https://ocean-connecting-sport-tour.vercel.app/fr/contact',
                ar: 'https://ocean-connecting-sport-tour.vercel.app/ar/contact',
                es: 'https://ocean-connecting-sport-tour.vercel.app/es/contact',
                de: 'https://ocean-connecting-sport-tour.vercel.app/de/contact',
            },
        },
    },
    {
        url: 'https://ocean-connecting-sport-tour.vercel.app/gallery',
        priority: 0.6,
        alternates: {
            languages: {
                en: 'https://ocean-connecting-sport-tour.vercel.app/en/gallery',
                fr: 'https://ocean-connecting-sport-tour.vercel.app/fr/gallery',
                ar: 'https://ocean-connecting-sport-tour.vercel.app/ar/gallery',
                es: 'https://ocean-connecting-sport-tour.vercel.app/es/gallery',
                de: 'https://ocean-connecting-sport-tour.vercel.app/de/gallery',
            },
        },
    }
]}