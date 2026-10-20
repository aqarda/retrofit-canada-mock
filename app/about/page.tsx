'use client';

import React, { useState } from 'react';
import teamMembers from '@/data/team.json';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
  paragraphs: string[];
}

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold font-saira text-rc-dark tracking-tight mb-6">
          About
        </h1>

        <hr className="border-gray-200 mb-8" />

        {/* Intro 2-column section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-saira text-rc-dark leading-tight">
              Retrofit Canada is an open source project to help retrofit every building in Canada by 2050.
            </h2>
          </div>
          <div className="text-rc-dark text-base sm:text-lg leading-relaxed space-y-4">
            <p>
              Around the world, retrofit initiatives are improving how we design and install deep retrofits.
            </p>
            <p>
              But those innovations are hidden behind patents and copyrights that prevent good ideas from spreading beyond the boundary of one company or project.
            </p>
            <p>
              Founded with assistance from{' '}
              <a
                href="https://sundancecoop.org/"
                target="_blank"
                rel="noreferrer noopener"
                className="underline hover:text-rc-red transition-colors"
              >
                Sundance Housing Co-op
              </a>
              ,{' '}
              <a
                href="https://natural-resources.canada.ca/home"
                target="_blank"
                rel="noreferrer noopener"
                className="underline hover:text-rc-red transition-colors"
              >
                NRCAN
              </a>{' '}
              and{' '}
              <a
                href="https://www.ssria.ca/"
                target="_blank"
                rel="noreferrer noopener"
                className="underline hover:text-rc-red transition-colors"
              >
                SSRIA
              </a>
              , Retrofit Canada is an open-source, deep retrofit organization. We want to start a movement to make existing homes net zero.
            </p>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold font-saira text-rc-dark tracking-wide uppercase mb-3">
              OUR MISSION
            </h3>
            <p className="text-rc-dark text-base leading-relaxed">
              Our mission is to share solutions, eliminate barriers, and accelerate deep retrofits in Canada to avert a climate catastrophe.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold font-saira text-rc-dark tracking-wide uppercase mb-3">
              OUR VISION
            </h3>
            <p className="text-rc-dark text-base leading-relaxed">
              By 2035, Canada’s deep building retrofit industry is thriving and has eliminated emissions from Canadian buildings in a way that creates healthy, inclusive, and thriving communities.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-xl font-bold font-saira text-rc-dark tracking-wide uppercase mb-6">
            OUR VALUES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-base text-rc-dark leading-relaxed">
              <p>
                <strong>Collaboration</strong>: We collaborate and seek partnerships with anyone working to reduce energy use and greenhouse gas emissions from buildings.
              </p>
              <p>
                <strong>Open sharing</strong>: We make deep retrofit knowledge and solutions available.
              </p>
            </div>
            <div className="space-y-4 text-base text-rc-dark leading-relaxed">
              <p>
                <strong>Acting with urgency</strong>: The climate emergency demands that we proceed as fast and efficiently as possible. Time is of the essence in everything we do.
              </p>
              <p>
                <strong>Respect and equity</strong>: We value every person regardless. We use every opportunity to make this a just and equitable transition.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="pt-4 pb-12">
          <h3 className="text-3xl sm:text-4xl font-bold font-saira text-center text-rc-dark mb-12">
            Our Team
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member: TeamMember) => (
              <div
                key={member.id}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-56 h-56 mb-4 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center text-gray-400 font-bold text-2xl font-saira">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold font-saira text-rc-dark mb-1">
                  {member.name}
                </h3>
                <h4 className="text-sm text-gray-600 mb-3 font-normal">
                  {member.title}
                </h4>
                <button
                  type="button"
                  onClick={() => setSelectedMember(member)}
                  className="text-rc-amber font-semibold text-sm hover:underline focus:outline-none"
                >
                  Read bio
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bio Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
          onClick={() => setSelectedMember(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 overflow-y-auto max-h-[85vh] animate-in fade-in zoom-in-95 duration-200 border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-gray-200 pb-4 mb-5">
              <div>
                <h3 className="text-2xl font-bold font-saira text-rc-amber">
                  {selectedMember.name}
                </h3>
                <span className="text-sm font-medium text-gray-500 mt-1 block">
                  {selectedMember.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="text-gray-400 hover:text-gray-700 text-3xl leading-none font-light px-2"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            {/* Body */}
            <div className="space-y-4 text-base text-gray-700 leading-relaxed">
              {selectedMember.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 pt-4 mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="px-5 py-2 rounded-lg bg-rc-navy text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
