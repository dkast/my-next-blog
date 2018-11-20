import React from "react";
import PropTypes from "prop-types";

const HeaderImage = ({ unsplashId }) => {
  if (!unsplashId) {
    return null;
  }

  const imageUrl = `https://source.unsplash.com/${unsplashId}/2400x600`;
  return (
    <div className="row no-gutters mt-md-4">
      <div className="col-12">
        <img src={imageUrl} alt="hero" className="img-fluid" />
      </div>
      <style jsx>{`
        img {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

HeaderImage.propTypes = {
  unsplashId: PropTypes.string
};

export default HeaderImage;
