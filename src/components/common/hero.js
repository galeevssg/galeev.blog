import React from "react";
import PropTypes from "prop-types";

export default function Hero(props) {
  const { title, subheading } = props;

  return (
    <div className="" style={{ "--py": "128px" }}>
      <div
        className="hairline-2 font-weight-700 text-center"
        style={{ color: "#777E91", "--mb": "8px" }}
      >
        {subheading}
      </div>
      <h3 className="text-center">{title}</h3>
      <div className="d-flex justify-content-center" style={{ "--mt": "24px" }}>
        <button className="btn btn-outline">Начать свой выбор</button>
      </div>
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
