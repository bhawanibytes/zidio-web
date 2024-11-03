const TeamSection = () => {
  return (
    <section id="section5" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              className="w-40 h-40 rounded-full mb-4"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
              alt="Team Member 1"
            />
            <p className="text-lg font-semibold">Team Member 1</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              className="w-40 h-40 rounded-full mb-4"
              src="https://images.unsplash.com/photo-1502767089025-6572583495b9"
              alt="Team Member 2"
            />
            <p className="text-lg font-semibold">Team Member 2</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              className="w-40 h-40 rounded-full mb-4"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
              alt="Team Member 3"
            />
            <p className="text-lg font-semibold">Team Member 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
