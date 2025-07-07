const AddressSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h3 className="mb-4 text-2xl font-bold text-white">Adresa Noastră</h3>
            <div className="space-y-2 text-white text-lg">
              <p>Oradea</p>
              <p>Strada Lăpușului nr. 21</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full lg:w-2/3">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2750.383384573447!2d21.927610676766!3d47.0613917711449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474647fd2382d1f5%3A0x4d4f13e933e1061c!2sStrada%20L%C4%83pu%C8%99ului%2021%2C%20Oradea%2C%20Romania!5e0!3m2!1sen!2sro!4v1749276180000!5m2!1sen!2sro"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Harta locației Oradea"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;