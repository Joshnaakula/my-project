import  { FC }  from 'react';

interface Slide {
  src: string;
  title: string;
  description: string;
  category: string; // Required now
}

interface ImagesProps {
  data: Slide[];
  onClick: (index: number) => void;
}


const Images:  FC<ImagesProps> = (props) => {
  const { data, onClick } = props;

  const handleClickImage = (index: number) => {
    onClick(index);
  };

  return (
    <div className='images-container'>
      {data.map((slide, index) => (
        <div
          onClick={() => handleClickImage(index)}
          key={index}
          className='image'
        >
          <img src={slide.src} alt={slide.description} />
        </div>
      ))}
    </div>
  );
};

export default Images;