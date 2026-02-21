import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MasonryGallery from '../components/sketches/MasonryGallery';
import SEO from '../components/SEO';

const Sketches = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-zinc-800 selection:text-white transition-colors duration-700">
      <Helmet>
        <title>Sketches | Fadly Zaki</title>
        <meta name="description" content="An archive of systematic digital designs and raw pencil sketches." />
      </Helmet>

      <SEO
        title="Sketches"
        description="An archive of systematic digital designs and raw pencil sketches."
        type="website"
      />

      {/* The navbar needs to handle both light and dark backgrounds smoothly */}
      <Navbar />

      <main>
        <MasonryGallery />
      </main>

      <Footer />
    </div>
  );
};

export default Sketches;
