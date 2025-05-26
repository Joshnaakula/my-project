import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';

import { slides } from './assets/data'; // Adjust path if needed
import Images from './assets/Images';  // Adjust path if needed
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';


function App() {
  const [index, setIndex] = useState<number>(-1);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Team Vibes',
    'Creative Campaigns',
    'Work Hard, Play Hard',
    'Behind-The-Scenes',
    'Life at CollegeTips',
  ];

  const filteredSlides =
    selectedCategory === 'All'
      ? slides
      : slides.filter((slide) => slide.category === selectedCategory);

  return (
    <>
     <div className="container">
     <a href='https://www.collegetips.in/' rel='collegetips'><img src="https://www.collegetips.in/images/logo.jpg" alt="Example"/></a>
       <a href='https://www.collegetips.in/' rel='collegetips' style={{ textDecoration: 'none' }}><h1 className="heading"  >CollegeTips</h1></a>
    </div>
    <br></br>
    {/* Category Filter Buttons */}
<div
  style={{
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '20px',
    flexWrap: 'wrap',
  
  }}
>
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setSelectedCategory(cat)}
      className="category-button"
    >
      {cat}
    </button>
  ))}
</div>

      {/* Images Grid */}
      <Images data={filteredSlides} onClick={setIndex} />

      {/* Lightbox */}
      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: 'end',
        }}
        slides={filteredSlides}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
}

export default App;
