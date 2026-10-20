'use client';

import React from 'react';
import newsData from '@/data/news.json';

interface NewsArticle {
  id: number;
  title: string;
  date: string;
  link: string;
  excerpt: string;
}

export default function NewsPage() {
  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold font-saira text-rc-dark tracking-tight mb-6">
          News
        </h1>

        <hr className="border-gray-200 mb-8" />

        {/* News List */}
        <div className="space-y-8">
          {newsData.map((article: NewsArticle) => (
            <article key={article.id} className="pb-8 border-b border-gray-200 last:border-b-0">
              <div className="text-sm font-normal text-gray-500 mb-1">
                {article.date}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-saira text-rc-dark hover:text-rc-red transition-colors mb-3">
                <a href={article.link} target="_blank" rel="noreferrer noopener">
                  {article.title}
                </a>
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                {article.excerpt}
              </p>
              <div>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-rc-amber font-semibold text-xs tracking-wider uppercase hover:underline"
                >
                  READ MORE
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
