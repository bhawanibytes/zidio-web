const AchievementsSection = () => {
  return (
    <section id="section6" className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Our Achievements
        </h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Achievement 1</h3>
            <p>Some description about Achievement 1.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Achievement 2</h3>
            <p>Some description about Achievement 2.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Achievement 3</h3>
            <p>Some description about Achievement 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
