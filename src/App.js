import "./App.css";
import initialImages from "./data/images";
import AnimateImages from "./components/AnimateImages";
import { createRef, useState } from "react";
import Image from "./components/Image";
function App() {
  const [images, setImages] = useState(initialImages);

  const reorder = (index) => {
    let tempImages = [...images];
    tempImages.splice(index, 1);
    tempImages.unshift(images[index]);
    setImages(tempImages);
  };

  return (
    <div className="container">
      <div className="images-container">
        <div className="main-image">
          <Image url={images[0].url} ref={createRef()} />
        </div>
        <AnimateImages>
          {images.map((image, i) => (
            <Image
              key={image.id}
              url={image.url}
              ref={createRef()}
              onClick={() => reorder(i)}
            />
          ))}
        </AnimateImages>
      </div>
      <div className="price-details">
        <h1>LEAGUE OF LEGENDS</h1>
        <div style={{ fontSize: "0.8rem" }}>5 card in packs</div>
        <div className="price">$ 49.00</div>
        <div className="buy">
          <div className="quantity">
            <span style={{ marginRight: "0.5rem", color: "var(--yellow)" }}>
              -
            </span>
            <span style={{ marginRight: "0.5rem" }}>1</span>
            <span style={{ color: "var(--yellow)" }}>+</span>
          </div>
          <button className="button">BUY PACKS</button>
        </div>
        <div className="total-qty">35563 Total</div>
        <hr />
        <div className="detail-heading">PACK DETAILS</div>
        <p className="detail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odio
          doloremque aut odit, consequuntur accusamus labore consectetur
          delectus praesentium fuga! Nostrum nesciunt illum, atque quia sed iste
          quidem laudantium a?
        </p>
      </div>
    </div>
  );
}

export default App;
