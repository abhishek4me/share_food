import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import DonationForm from './components/DonationForm';
import Organizations from './components/Organizations';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Stats />
        <DonationForm />
        <Organizations />
        <Testimonials />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} FoodShare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;