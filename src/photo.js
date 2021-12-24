import React from "react";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

function shuffle(o){ 
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

const ImagesGallery = () => {
  const [images, setImages] = React.useState(null);

  React.useEffect(() => {
    let shouldCancel = false;

    const call = async () => {
      const response = await axios.get(
        "https://google-photos-album-demo2.glitch.me/1VY5BGGvAC6Tfaso7"
      );
      if (!shouldCancel && response.data && response.data.length > 0) {
        setImages(
          response.data.map(url => ({
            original: `${url}=w1024`,
            thumbnail: `${url}=w100`
          }))
        );
      }
    };
    call();
    return () => (shouldCancel = true);
  }, []);


  return images ? <ImageGallery 
  items={shuffle(images)} 
  showBullets={false} 
  showIndex={false} 
  showThumbnails={false} 
  lazyLoad={true} 
  showPlayButton={false} 
  autoPlay={true}
  slideInterval={6000}
  showFullscreenButton={false}
  showNav={false}
  /> : null;
};

export default ImagesGallery
