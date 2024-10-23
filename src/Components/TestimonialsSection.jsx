const TestimonialsSection = () => {
  return (
    <section id="section7" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Client Testimonials</h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p>
              Testimonial 1: "Zidio Development helped transform our business
              with their innovative solutions!"
            </p>
            <p className="mt-4 font-semibold">- Client 1</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p>
              Testimonial 2: "The team at Zidio is professional, creative, and
              always on time!"
            </p>
            <p className="mt-4 font-semibold">- Client 2</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p>
              Testimonial 3: "Their ability to deliver complex projects with
              simplicity is impressive."
            </p>
            <p className="mt-4 font-semibold">- Client 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
