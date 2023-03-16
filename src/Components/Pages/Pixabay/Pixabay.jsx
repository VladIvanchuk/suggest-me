import { useEffect, useRef, useState } from "react";
import s from "./Pixabay.module.scss";

const url =
  "https://pixabay.com/api/?key=19788052-12e74352d9c3069c5841e3f0b&q=yellow+flowers&image_type=photo";

const Pixabay = () => {
  const [images, setImages] = useState([]);
  const [value, setValue] = useState("");

  const timer = useRef(null);

  const getImages = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setImages(data.hits);
  };

  const getImagesForName = async (value) => {
    const response = await fetch(
      `https://pixabay.com/api/?key=19788052-12e74352d9c3069c5841e3f0b&q=${value}&image_type=photo`
    );
    const data = await response.json();

    console.log(data.hits);
    setImages(data.hits);
  };

  useEffect(() => {
    getImages();
  }, []);

  useEffect(() => {
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      getImagesForName(value);
    }, 1000);
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={s.pixabay}>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search..."
      />
      <div className={s.container}>
        {images.map((image) => {
          return <img key={image.id} src={image.webformatURL} alt="pictur" />;
        })}
      </div>
    </div>
  );
};

export default Pixabay;
