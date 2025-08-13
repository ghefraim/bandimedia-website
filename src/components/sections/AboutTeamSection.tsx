import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function AboutTeamSection() {
  const teamMembers = [
    {
      name: 'Paul Bandi',
      role: 'Co-Fondator',
      image: '/assets/team/paul-bandi.png',
      instagram: '#',
      linkedin: '#'
    },
    {
      name: 'Maria Popescu',
      role: 'Co-Fondator',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      instagram: '#',
      linkedin: '#'
    },
    {
      name: 'Andrei Ionescu',
      role: 'Co-Fondator',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      instagram: '#',
      linkedin: '#'
    },
    {
      name: 'Diana Radu',
      role: 'Co-Fondator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      instagram: '#',
      linkedin: '#'
    },
    {
      name: 'Alex Marin',
      role: 'CEO, România',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      instagram: '#',
      linkedin: '#'
    },
    {
      name: 'Cristina Vasilescu',
      role: 'Director General',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      instagram: '#',
      linkedin: '#'
    },
    {
      name: 'Mihai Stoica',
      role: 'Șef Campanii',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      instagram: '#',
      linkedin: '#'
    },
    {
      name: 'Laura Gheorghe',
      role: 'Șef Evenimente',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      instagram: '#',
      linkedin: '#'
    },
    {
      name: 'Stefan Popa',
      role: 'CFO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      instagram: '#',
      linkedin: '#'
    }
  ];

  return (
    <section className="bg-background text-white py-16 md:py-20">
      <div className="max-w-[1312px] mx-auto px-5 md:px-10">
        {/* Section Title */}
        <div className="mb-12 md:mb-16">
          <SectionTitle 
            title="ECHIPA CARE" 
            subtitle="FACE TOTUL POSIBIL" 
            align="center"
            subtitleClassName="text-white"
          />
        </div>
        
        {/* Description */}
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-white/90 font-geist font-normal tracking-wide">
            Acum cu o familie în creștere de mai mult de 70 de oameni pasionați, distractivi și cu un talent uriaș, 
            demontăm stereotipurile și împărtășim perspective noi. Pentru branduri și destinații renumite din întreaga lume, 
            creăm experiențe care contează.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              {/* Profile Image */}
              <div className="relative mb-4 overflow-hidden rounded-lg aspect-square">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[var(--brand-yellow)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Member Info */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-sm md:text-base text-white/70 uppercase tracking-wide mb-3">
                {member.role}
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                <a 
                  href={member.instagram} 
                  className="text-white/60 hover:text-[var(--brand-yellow)] transition-colors"
                  aria-label={`${member.name} Instagram`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href={member.linkedin} 
                  className="text-white/60 hover:text-[var(--brand-yellow)] transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
