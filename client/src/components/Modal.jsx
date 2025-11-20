import React, { useState, useEffect } from 'react';

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); 

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
  }, []);

  return (
    <div className="App">
      {isModalOpen && (
        <div className="fixed inset-0 bg-gym-darker bg-opacity-90 flex items-center justify-center z-50">
          <div className="bg-gym-gray border-2 border-gym-red/30 p-6 rounded-lg shadow-lg max-w-md w-full mx-4 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Welcome to GymApp
            </h2>
            <p className="text-gray-300 mb-6">
              This application is deployed on Render, which may cause slower performance. 
              If you experience delays, please visit my{" "}
              <a
                href="https://github.com/pus-paa/GymApp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gym-red hover:text-gym-red-light underline"
              >
                GitHub Repository
              </a>
            </p>
            <button
              onClick={closeModal}
              className="bg-gym-red text-white py-2 px-4 rounded-lg hover:bg-gym-red-dark transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Modal;

