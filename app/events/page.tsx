'use client';

import React from 'react';
import eventsData from '@/data/events.json';

interface EventItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  link: string;
}

export default function EventsPage() {
  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold font-saira text-rc-dark tracking-tight mb-6">
          Events
        </h1>

        <hr className="border-gray-200 mb-8" />

        {/* Section Heading */}
        <h2 className="text-3xl font-bold font-saira text-rc-dark mb-8">
          Past Events
        </h2>

        {/* Events list */}
        <div className="space-y-8">
          {eventsData.map((event: EventItem) => (
            <div key={event.id} className="pb-8 border-b border-gray-200 last:border-b-0">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                
                {event.image && (
                  <div className="w-full md:w-80 flex-shrink-0">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-auto rounded-xl object-cover shadow-sm"
                    />
                  </div>
                )}

                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-saira text-rc-dark mb-2">
                    {event.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-gray-500 mb-3">
                    Event Date: {event.date}
                  </h4>
                  <p className="text-base text-gray-700 leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-block bg-rc-navy text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-slate-800 transition-colors uppercase tracking-wider"
                  >
                    Event Details
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
