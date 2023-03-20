import React, { useState } from 'react';
import {Link} from "react-router-dom";

const sections = [
  { id: 1, name: 'Listening' },
  { id: 2, name: 'Writing' },
  { id: 3, name: 'Comprehension' },
  { id: 4, name: 'Literacy' },
  { id: 5, name: 'Fillout' },
];

const Main = () => {
  const [selectedSection, setSelectedSection] = useState(sections[0]);

  return (
    <div className="App">
      <header className="bg-yellow-400 text-white p-4 text-center font-bold text-3xl">
      </header>
      <main className="container mx-auto p-4">
        <div className="my-4">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`px-8 py-2 font-semibold hover:bg-yellow-400 hover:text-white mr-2 rounded ${
                selectedSection.id === section.id
                  ? 'bg-yellow-400 text-white'
                  : 'bg-white text-yellow-400 border border-yellow-400'
              }`}
              onClick={() => setSelectedSection(section)}
            >
              {section.name}
            </button>
          ))}
        </div>
        {selectedSection.id === 1 && <Listening />}
        {selectedSection.id === 2 && <Writing />}
        {selectedSection.id === 3 && <Comprehension />}
        {selectedSection.id === 4 && <Literacy />}
        {selectedSection.id === 5 && <Fillout />}
      </main>
    </div>
  );
}

function Listening() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-yellow-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-semibold text-center mb-6">Listening Section</h1>
          <div className="space-y-8">
            <div className="text-section">
              <h2 className="text-xl font-semibold">Test Section</h2>
              <p className="text-gray-600">Here you can practice listening skills through our tests.</p>
              <Link to="/listeningeasy"><button className="mt-2 bg-yellow-400 hover:bg-yellow-500 mx-6 text-white font-bold py-2 px-4 rounded">Easy</button></Link>
              <Link to="/listeningeasy"><button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">Medium</button></Link>
              <Link to="/listeningeasy"><button className="mt-2 bg-yellow-400 hover:bg-yellow-500 mx-6 text-white font-bold py-2 px-4 rounded">Hard</button></Link>
            </div>
            <div className="lectures-section">
              <h2 className="text-xl font-semibold">Lectures Section</h2>
              <p className="text-gray-600">Improve your listening skills by watching our video lectures.</p>
              <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">Watch Lectures</button>
            </div>
            <div className="documents-section">
              <h2 className="text-xl font-semibold">Documents Section</h2>
              <p className="text-gray-600">Access supplementary materials to aid your learning.</p>
              <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">View Documents</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Writing() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-yellow-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-semibold text-center mb-6">Writing Section</h1>

          <div className="space-y-8">
            <div className="text-section">
              <h2 className="text-xl font-semibold">Test Section</h2>
              <p className="text-gray-600">Here you can practice writing skills through our tests.</p>
              <Link to="/writingeasy"><button className="mt-2 bg-yellow-400 hover:bg-yellow-500 mx-6 text-white font-bold py-2 px-4 rounded">Easy</button></Link>
              <Link to="/listeningeasy"><button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">Medium</button></Link>
              <Link to="/listeningeasy"><button className="mt-2 bg-yellow-400 hover:bg-yellow-500 mx-6 text-white font-bold py-2 px-4 rounded">Hard</button></Link>
            </div>

            <div className="lectures-section">
              <h2 className="text-xl font-semibold">Lectures Section</h2>
              <p className="text-gray-600">Improve your listening skills by watching our video lectures.</p>
              <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">Watch Lectures</button>
            </div>

            <div className="documents-section">
              <h2 className="text-xl font-semibold">Documents Section</h2>
              <p className="text-gray-600">Access supplementary materials to aid your learning.</p>
              <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">View Documents</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Comprehension() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-yellow-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-semibold text-center mb-6">Comprehension Section</h1>

          <div className="space-y-8">
            <div className="text-section">
              <h2 className="text-xl font-semibold">Test Section</h2>
              <p className="text-gray-600">Here you can practice comprehension skills through our tests.</p>
              <Link to="/comprehensioneasy"><button className="mt-2 bg-yellow-400 hover:bg-yellow-500 mx-6 text-white font-bold py-2 px-4 rounded">Easy</button></Link>
              <Link to="/listeningeasy"><button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">Medium</button></Link>
              <Link to="/listeningeasy"><button className="mt-2 bg-yellow-400 hover:bg-yellow-500 mx-6 text-white font-bold py-2 px-4 rounded">Hard</button></Link>
            </div>

            <div className="lectures-section">
              <h2 className="text-xl font-semibold">Lectures Section</h2>
              <p className="text-gray-600">Improve your listening skills by watching our video lectures.</p>
              <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">Watch Lectures</button>
            </div>

            <div className="documents-section">
              <h2 className="text-xl font-semibold">Documents Section</h2>
              <p className="text-gray-600">Access supplementary materials to aid your learning.</p>
              <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">View Documents</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Literacy() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-yellow-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-semibold text-center mb-6">Literacy Section</h1>

          <div className="space-y-8">
            <div className="text-section">
              <h2 className="text-xl font-semibold">Test Section</h2>
              <p className="text-gray-600">Here you can practice literacy skills through our tests.</p>
              <Link to="/literacyeasy"><button className="mt-2 bg-yellow-400 hover:bg-yellow-500 mx-6 text-white font-bold py-2 px-4 rounded">Easy</button></Link>
              <Link to="/listeningeasy"><button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">Medium</button></Link>
              <Link to="/listeningeasy"><button className="mt-2 bg-yellow-400 hover:bg-yellow-500 mx-6 text-white font-bold py-2 px-4 rounded">Hard</button></Link>
            </div>

            <div className="lectures-section">
              <h2 className="text-xl font-semibold">Lectures Section</h2>
              <p className="text-gray-600">Improve your listening skills by watching our video lectures.</p>
              <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">Watch Lectures</button>
            </div>

            <div className="documents-section">
              <h2 className="text-xl font-semibold">Documents Section</h2>
              <p className="text-gray-600">Access supplementary materials to aid your learning.</p>
              <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">View Documents</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fillout() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-yellow-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-semibold text-center mb-6">Fillout Section</h1>

          <div className="space-y-8">
            <div className="text-section">
              <h2 className="text-xl font-semibold">Test Section</h2>
              <p className="text-gray-600">Here you can practice literacy skills through our tests.</p>
              <Link to="/fillouteasy"><button className="mt-2 bg-yellow-400 hover:bg-yellow-500 mx-6 text-white font-bold py-2 px-4 rounded">Easy</button></Link>
              <Link to="/listeningeasy"><button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">Medium</button></Link>
              <Link to="/listeningeasy"><button className="mt-2 bg-yellow-400 hover:bg-yellow-500 mx-6 text-white font-bold py-2 px-4 rounded">Hard</button></Link>
            </div>

            <div className="lectures-section">
              <h2 className="text-xl font-semibold">Lectures Section</h2>
              <p className="text-gray-600">Improve your listening skills by watching our video lectures.</p>
              <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">Watch Lectures</button>
            </div>

            <div className="documents-section">
              <h2 className="text-xl font-semibold">Documents Section</h2>
              <p className="text-gray-600">Access supplementary materials to aid your learning.</p>
              <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">View Documents</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;