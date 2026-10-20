'use client';

import React from 'react';
import learnData from '@/data/learn.json';

interface LearnCard {
  id: number;
  title: string;
  link: string;
  excerpt: string;
}

export default function LearnPage() {
  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold font-saira text-rc-dark tracking-tight">
              Learn about Deep Retrofits
            </h1>
          </div>
          <div className="text-base sm:text-lg text-rc-dark leading-relaxed space-y-4">
            <p>
              A Deep Retrofit can make a building 70 per cent more efficient and reduce CO<sub>2</sub> emissions up to 400 tonnes a year.
            </p>
            <p>
              When combined with renewable energy and energy-efficient technology, like solar and heat pumps, a deep retrofit can make a home net-zero.
            </p>
          </div>
        </div>

        <hr className="border-gray-200 mb-12" />

        {/* The Retrofit Roadmap Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-saira text-rc-dark mb-8">
            The Retrofit Roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learnData.roadmap.map((card: LearnCard) => (
              <div
                key={card.id}
                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="text-xl font-bold font-saira text-rc-dark hover:text-rc-red transition-colors mb-3">
                    <a href={card.link} target="_blank" rel="noreferrer noopener">
                      {card.title}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {card.excerpt}
                  </p>
                </div>
                <div>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-rc-amber font-semibold text-xs tracking-wider uppercase hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Articles Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-saira text-rc-dark mb-8">
            Other Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learnData.otherArticles.map((card: LearnCard) => (
              <div
                key={card.id}
                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="text-xl font-bold font-saira text-rc-dark hover:text-rc-red transition-colors mb-3">
                    <a href={card.link} target="_blank" rel="noreferrer noopener">
                      {card.title}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {card.excerpt}
                  </p>
                </div>
                <div>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-rc-amber font-semibold text-xs tracking-wider uppercase hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Webinars Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-saira text-rc-dark mb-8">
            Webinars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learnData.webinars.map((card: LearnCard) => (
              <div
                key={card.id}
                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="text-xl font-bold font-saira text-rc-dark hover:text-rc-red transition-colors mb-3">
                    <a href={card.link} target="_blank" rel="noreferrer noopener">
                      {card.title}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {card.excerpt}
                  </p>
                </div>
                <div>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-rc-amber font-semibold text-xs tracking-wider uppercase hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
