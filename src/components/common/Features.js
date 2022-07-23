import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../common/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text}>
        <section>
          <div className="d-flex">
            <PreviewCompatibleImage imageInfo={item} />
            <p>{item.text}</p>
          </div>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
