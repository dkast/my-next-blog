import React from "react";
import PropTypes from "prop-types";

const UnsplashImage = ({ unsplashID }) => {
  if (!unsplashID) {
    return null;
  }

  const imageUrl = `https://source.unsplash.com/${unsplashID}/1200x300`;
  return (
    <div className="row no-gutters">
      <div className="col-12">
        <img src={imageUrl} alt="hero" className="img-fluid" />
      </div>
      <style jsx>
        {`
          img {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

UnsplashImage.propTypes = {
  unsplashID: PropTypes.string
};

export default UnsplashImage;
