import React from 'react';

export default function ContactInfoSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1312px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-8 text-gray-900 font-geist">
              Informații de Contact
            </h2>
            
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[var(--brand-yellow)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-geist">Email</h3>
                  <a 
                    href="mailto:contact@bandimedia.com" 
                    className="text-lg text-gray-600 hover:text-[var(--brand-yellow)] transition-colors font-geist"
                  >
                    contact@bandimedia.com
                  </a>
                </div>
              </div>

              {/* Office Location */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[var(--brand-yellow)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-geist">Biroul Oradea</h3>
                  <p className="text-lg text-gray-600 font-geist">
                    Strada Lăpușului nr. 21
                    <br />
                    Oradea, România
                  </p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-geist">Program de lucru</h3>
                <div className="space-y-2 text-gray-600 font-geist">
                  <p>Luni - Vineri: 09:00 - 18:00</p>
                  <p>Sâmbătă: 10:00 - 14:00</p>
                  <p>Duminică: Închis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-8 text-gray-900 font-geist">
              Locația Noastră
            </h2>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5435.583838577078!2d21.908855!3d47.063932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474647d3f5fc627b%3A0xf3b762cb872e280e!2sStrada%20L%C4%83pu%C8%99ului%2021%2C%20Oradea!5e0!3m2!1sen!2sro!4v1755100884998!5m2!1sen!2sro"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            
            <div className="mt-6 p-4 bg-[var(--brand-yellow)]/10 rounded-lg">
              <p className="text-gray-700 font-normal tracking-tight">
                <strong>Cum să ne găsești:</strong> Suntem localizați în centrul Oradei,
                cu acces ușor la transport public și parcare disponibilă în zonă.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
