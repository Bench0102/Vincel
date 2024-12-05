import React, { useState } from 'react';
import Navbar from "./components/Navbar";

const Portfolio: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState<number | null>(null);
  

  const slides = [
    { color: 'bg-blue-200', text: '1' },
    { color: 'bg-purple-200', text: '2' },
    { color: 'bg-green-200', text: '3' },
    { color: 'bg-yellow-200', text: '4' },
    { color: 'bg-red-200', text: '5' },
    { color: 'bg-orange-200', text: '6' },
    { color: 'bg-teal-200', text: '7' },
  ];

  // Open Modal
  const handleSlideClick = (index: number) => {
    setSelectedSlide(index);
    setIsModalOpen(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSlide(null);
  };

  return (
    <div className='bg-[#FFD2CE] flex min-h-screen flex-col'>
        <div className="sticky top-0 z-50 mb-10">
        <Navbar />
        </div> 
    
        <div className="relative flex flex-col items-center justify-center ">
       
      {/* Carousel */}
      <div className="carousel scrollbar-hide flex w-full snap-x snap-mandatory gap-4 overflow-x-scroll scroll-smooth">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => handleSlideClick(index)}
            className={`relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl ${slide.color} md:w-[calc(33.33%-(32px/3))] cursor-pointer`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl font-bold text-white">{slide.text}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className=" flex gap-4">
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
            <h2 className="text-2xl font-bold mb-4">Slide {slides[selectedSlide].text}</h2>
            <p className="mb-6">
              This is additional information for slide {slides[selectedSlide].text}. You can display any content here, such as images, text, or even a form.
            </p>
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
