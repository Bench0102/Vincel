import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Slide1Image from "../assets/Screenshot 2024-12-06 225331.png";

const Portfolio: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState<number | null>(null);

  const slides = [
    {
      color: 'bg-blue-200',
      text: '1',
      customText: 'Coffee Shop CSR',
      modalContent: 'Coffee Shop CSR was the first system I developed during our 2nd year in our Advance Java Programming with Mr. Santos. The system should provide a user-friendly interface for processing payments and the coffee shop system should efficiently handle the process of taking orders. However this system may have limitations in terms of customization options. This could restrict the ability to tailor the system to specific business needs or unique processes.',
      image: Slide1Image,
    },
    {
      color: 'bg-purple-200',
      text: '2',
      customText: 'Second Project',
      modalContent: 'Details about the second project, highlighting its unique features and creative aspects.',
    },
    {
      color: 'bg-green-200',
      text: '3',
      customText: 'Third Project',
      modalContent: 'An overview of the third project, emphasizing its design approach and implementation.',
    },
    {
      color: 'bg-yellow-200',
      text: '4',
      customText: 'Fourth Project',
      modalContent: 'Information about the fourth project, explaining its core functionality and innovative solutions.',
    },
    {
      color: 'bg-red-200',
      text: '5',
      customText: 'Fifth Project',
      modalContent: 'A deep dive into the fifth project, focusing on its unique style and methodology.',
    },
    {
      color: 'bg-orange-200',
      text: '6',
      customText: 'Sixth Project',
      modalContent: 'The sixth project stands out for its sleek solution and efficient implementation.',
    },
    {
      color: 'bg-teal-200',
      text: '7',
      customText: 'Seventh Project',
      modalContent: 'Details about the seventh project, showcasing its creative approach to problem-solving.',
    },
  ];

  const handleSlideClick = (index: number) => {
    setSelectedSlide(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSlide(null);
  };

  return (
    <div className='bg-[#FFD2CE] flex min-h-screen flex-col'>
      <div className="sticky top-0 z-50 mb-10">
        <Navbar />
      </div> 

      <div className="relative flex flex-col items-center justify-center gap-6 ml-2">
        {/* Carousel */}
        <div className='flex flex-col items-start w-screen'>
          <h4 className='ml-6 font-semibold text-3xl'>Projects :</h4>
        </div>

        <div className="carousel scrollbar-hide flex w-full snap-x snap-mandatory gap-4 overflow-x-scroll scroll-smooth">
          {slides.map((slide, index) => (
            <div
              key={index}
              onClick={() => handleSlideClick(index)}
              className={`relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl overflow-hidden md:w-[calc(33.33%-(32px/3))] cursor-pointer ${!slide.image ? slide.color : ''} shadow-lg hover:shadow-2xl transition-shadow duration-300`}
            >
              {slide.image ? (
                <img
                  src={slide.image}
                  alt={`Slide ${slide.text}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <div className="text-8xl font-bold text-white">{slide.text}</div>
                </div>
              )}
              {/* Custom Text */}
              <div className="absolute bottom-4 left-4 text-lg font-semibold text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                {slide.customText}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() =>
              document.querySelector('.carousel')?.scrollBy({ left: -300, behavior: 'smooth' })
            }
            className="prev-btn bg-[#E2CCB2] p-2 mx-2 rounded-lg"
          >
            Prev
          </button>
          <button
            onClick={() =>
              document.querySelector('.carousel')?.scrollBy({ left: 300, behavior: 'smooth' })
            }
            className="next-btn bg-[#E2CCB2] p-2 mx-2 rounded-lg"
          >
            Next
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && selectedSlide !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 shadow-xl w-4/5 max-w-lg">
              <h2 className="text-2xl font-bold mb-4">{slides[selectedSlide].customText}</h2>
              <p className="mb-6">{slides[selectedSlide].modalContent}</p>
              <button
                onClick={handleCloseModal}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
