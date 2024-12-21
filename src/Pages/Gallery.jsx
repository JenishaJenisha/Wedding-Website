import "./Gallery.css";

const Gallery = () => {
  const images = [
    { src: "image1.jpg", alt: "John and Jane" },
    { src: "image2.jpg", alt: "Engagement" },
    // Add more images
  ];

  return (
    <div className="gallery-page">
      <h2>Our Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, idx) => (
          <img key={idx} src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
