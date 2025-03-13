import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      priority: 1.0,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en`,
          fr: `${process.env.NEXT_PUBLIC_BASE_URL}/fr`,
          ar: `${process.env.NEXT_PUBLIC_BASE_URL}/ar`,
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es`,
          de: `${process.env.NEXT_PUBLIC_BASE_URL}/de`,
          ja: `${process.env.NEXT_PUBLIC_BASE_URL}/ja`,
          pt: `${process.env.NEXT_PUBLIC_BASE_URL}/pt`,
          ru: `${process.env.NEXT_PUBLIC_BASE_URL}/ru`,
          zh: `${process.env.NEXT_PUBLIC_BASE_URL}/zh`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/contact`,
          fr: `${process.env.NEXT_PUBLIC_BASE_URL}/fr/contact`,
          ar: `${process.env.NEXT_PUBLIC_BASE_URL}/ar/contact`,
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/contact`,
          de: `${process.env.NEXT_PUBLIC_BASE_URL}/de/contact`,
          ja: `${process.env.NEXT_PUBLIC_BASE_URL}/ja/contact`,
          pt: `${process.env.NEXT_PUBLIC_BASE_URL}/pt/contact`,
          ru: `${process.env.NEXT_PUBLIC_BASE_URL}/ru/contact`,
          zh: `${process.env.NEXT_PUBLIC_BASE_URL}/zh/contact`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/gallery`,
      priority: 0.6,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/gallery`,
          fr: `${process.env.NEXT_PUBLIC_BASE_URL}/fr/gallery`,
          ar: `${process.env.NEXT_PUBLIC_BASE_URL}/ar/gallery`,
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/gallery`,
          de: `${process.env.NEXT_PUBLIC_BASE_URL}/de/gallery`,
          ja: `${process.env.NEXT_PUBLIC_BASE_URL}/ja/gallery`,
          pt: `${process.env.NEXT_PUBLIC_BASE_URL}/pt/gallery`,
          ru: `${process.env.NEXT_PUBLIC_BASE_URL}/ru/gallery`,
          zh: `${process.env.NEXT_PUBLIC_BASE_URL}/zh/gallery`,
        },
      },
    },
  ];
}
