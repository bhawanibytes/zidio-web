import { useLocation } from "react-router-dom"; 
import Stats from "./components/stats";
import businessLogo from '../../assets/bussiness.png'; 
import ecommerceLogo from '../../assets/ecommerce.png'; 
import secureDatabaseLogo from '../../assets/securedatabase.png'; 
import audienceGrowthLogo from '../../assets/audiencegrowth.png';
import aboutImg from '../../assets/aboutimg.png'; 
import thumbImg from '../../assets/thumb.png'; 

export default function About() {
  const location = useLocation(); 

  return (
    <>
      <div>
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500">
          <div
            className="bg-cover bg-center min-h-[60vh] rounded-bl-full"
            style={{
              backgroundImage: `url(${aboutImg})`, 
              backgroundSize: 'auto 100%', 
              backgroundPosition: 'right',  
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="container mx-auto">
              <div className="relative">
                <div className="text-white p-4 rounded-md absolute top-44 space-y-6">
                  <div className="text-5xl font-bold">About Us</div>
                  <div className="border w-52 text-center p-2 text-xl rounded-md">
                    Home {location.pathname || " "} 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-4 p-8">
          <Stats 
            logo={businessLogo}
            heading={"Business Growth"} 
            text={'Boost your business with strategies to reach new markets, optimize operations, and increase profits.'}
          />
          <Stats 
            logo={ecommerceLogo}
            heading={"eCommerce"} 
            text={'Enhance your online presence with user-friendly eCommerce solutions and secure payment gateways.'}
          />
          <Stats 
            logo={secureDatabaseLogo}
            heading={"Secure Database"} 
            text={'Safeguard your data with robust security measures and industry-standard compliance.'}
          />
          <Stats 
            logo={audienceGrowthLogo}
            heading={"Audience Growth"} 
            text={'Expand your reach by connecting with your target audience to drive visibility and growth.'}
          />
        </div>

        {/* Who We Are Section */}
        <div className="flex flex-col md:flex-row py-12 px-2">
          <div className="md:w-1/3 w-full">
            <img
              src={thumbImg} 
              alt="About Zidio"
              className="w-full h-auto rounded-md"
            />
          </div>

          <div className="md:w-2/3 w-full pl-8 mt-8 md:mt-0">
  <h2 className="text-4xl font-bold text-left mb-8">Who we are and What we do</h2>
  
  <p className="text-lg text-left mb-4">
    Welcome to <strong>Zidio Development Pvt. Ltd.</strong>, a trailblazing software development company where innovation meets expertise. Our team of skilled developers, creative thinkers, and technology enthusiasts specialize in turning complex ideas into user-friendly digital solutions. From custom software to cutting-edge mobile apps and robust cloud-based platforms, we're dedicated to engineering excellence and pushing the boundaries of technology to create products that stand out in a competitive market.
  </p>

  <p className="text-lg text-left mb-8">
    At <strong>Zidio</strong>, we believe in the power of collaboration, continuous learning, and adapting to the ever-evolving digital landscape. Our agile approach enables us to swiftly respond to changing market demands while maintaining the highest quality standards. We foster a culture of innovation, encouraging our team to explore new technologies such as AI, blockchain, and IoT to deliver future-proof solutions.
  </p>

  <p className="text-lg text-left mb-8">
    We're not just developers; we're visionaries committed to delivering impactful software solutions that drive success for businesses globally. Our mission is to empower our clients with scalable, reliable, and intuitive digital tools, ensuring they stay ahead in the fast-paced world of technology.
  </p>
</div>
</div>
        {/* Company and Research Section */}
        <div className="flex flex-col items-center py-12 px-2" style={{ backgroundColor: '#3B2F2F' }}>
          <h2 className="text-4xl font-bold text-center mb-8 text-white">Company and Research</h2>
          <p className="text-xl text-center mb-4 text-white">
            Business and Research - 100% Focused on Delivering High-Level Business Solutions.
          </p>
          <p className="text-lg italic text-center mb-8 text-white">
            "The true sign of intelligence is not knowledge but imagination" — Albert Einstein
          </p>
        </div>
      </div>
    </>
  );
}
