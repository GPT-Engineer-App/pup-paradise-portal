import { useState } from 'react';
import { Dog, Heart, Bone, Home } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  const dogBreeds = [
    { name: 'Labrador Retriever', trait: 'Friendly and outgoing' },
    { name: 'German Shepherd', trait: 'Intelligent and versatile' },
    { name: 'Golden Retriever', trait: 'Gentle and affectionate' },
    { name: 'Bulldog', trait: 'Calm and courageous' },
    { name: 'Beagle', trait: 'Merry and curious' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold flex items-center">
            <Dog className="mr-2" /> Paw-some Dogs
          </h1>
          <nav>
            <button
              onClick={() => setActiveSection('about')}
              className={`mx-2 ${activeSection === 'about' ? 'font-bold' : ''}`}
            >
              About
            </button>
            <button
              onClick={() => setActiveSection('breeds')}
              className={`mx-2 ${activeSection === 'breeds' ? 'font-bold' : ''}`}
            >
              Breeds
            </button>
            <button
              onClick={() => setActiveSection('care')}
              className={`mx-2 ${activeSection === 'care' ? 'font-bold' : ''}`}
            >
              Care
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4">
        {activeSection === 'about' && (
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Heart className="mr-2 text-red-500" /> Why Dogs Make Great Pets
            </h2>
            <p className="mb-4">
              Dogs are known as man's best friend for good reasons. They offer unconditional love,
              loyalty, and companionship. Here are some reasons why dogs make excellent pets:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Provide emotional support and reduce stress</li>
              <li>Encourage an active lifestyle through walks and play</li>
              <li>Offer protection and security for your home</li>
              <li>Teach responsibility, especially for children</li>
              <li>Improve social interactions and meet new people</li>
            </ul>
            <img
              src="/placeholder.svg"
              alt="Happy dog with its owner"
              className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-md"
            />
          </section>
        )}

        {activeSection === 'breeds' && (
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Bone className="mr-2 text-brown-500" /> Popular Dog Breeds
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dogBreeds.map((breed, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2">{breed.name}</h3>
                  <p>{breed.trait}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'care' && (
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Home className="mr-2 text-green-500" /> Basic Dog Care Tips
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>Provide a nutritious diet appropriate for their age and size</li>
              <li>Ensure they have access to fresh water at all times</li>
              <li>Regular exercise through walks and playtime</li>
              <li>Routine veterinary check-ups and vaccinations</li>
              <li>Grooming, including brushing and bathing as needed</li>
              <li>Training and socialization from an early age</li>
              <li>Lots of love and attention!</li>
            </ul>
          </section>
        )}
      </main>

      <footer className="bg-blue-600 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Paw-some Dogs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
