import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function AboutStorySection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1312px] mx-auto px-5 md:px-10">
        {/* Section Title */}
        <div className="mb-12 md:mb-16">
          <SectionTitle 
            title="POVESTEA" 
            subtitle="BANDIMEDIA" 
            align="center"
          />
        </div>
        
        {/* Story Content */}
        <div className="mb-12 md:mb-16">
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-center text-gray-700 font-geist font-normal tracking-wide">
            Anul 2020 a fost cel care a adus ideea de Bandi Media. Totul a pornit din dorința de a fi un sprijin real pentru brandurile care vor să iasă la lumină și din pasiunea pentru creare de conținut și video. Povestea noastră a luat ființă în anul 2023, în luna martie, dar începuturile Bandi Media au fost mai timide.
          </p>
          <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center text-gray-600 mt-6 font-geist font-normal tracking-wide">
            Însă lucrurile nu au rămas așa. Chiar dacă anul 2023 nu s-a dovedit a fi foarte fructuos, anul 2024 a adus o nouă pagină în povestea Bandi Media, un nou capitol plin de energie, idei îndrăznețe și colaborări care ne-au făcut să credem și mai mult în ceea ce facem. În prezent, suntem o echipă tânără care crede în potențialul fiecărui brand și care privește cu entuziasm spre viitor.
          </p>
        </div>

        {/* Image Grid - Similar to Komodo's layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Large image - desert landscape */}
          <div className="md:col-span-1 lg:col-span-2 h-[300px] md:h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
              alt="Desert landscape with hot air balloon"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          {/* Team working image */}
          <div className="h-[300px] md:h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80"
              alt="Team collaborating"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          {/* Lake and mountains */}
          <div className="h-[250px] md:h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Mountain lake"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          {/* Creative workspace */}
          <div className="h-[250px] md:h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Creative workspace"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          {/* Silhouette image */}
          <div className="h-[250px] md:h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Creative professional silhouette"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
