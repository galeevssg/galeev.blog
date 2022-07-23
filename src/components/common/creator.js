import React from "react";
import randomColor from "randomcolor";

const Creator = ({ img, icon, name, style }) => {
  const firstLatterCategory = name;
  return (
    <div className="d-flex align-items-center" style={{ style }}>
      <div style={{ marginRight: "8px" }}>
        {img && (
          <img
            src={img}
            style={{
              objectFit: "cover",
              borderRadius: "100%",
            }}
            width={40}
            height={40}
            alt={name}
          />
        )}
        {icon && (
          <div
            className="d-flex aling-items-center justify-content-center border-radius-24"
            style={{
              backgroundColor: `${randomColor()}`,
              color: "#fff",
              width: "40px",
              height: "40px",
              lineHeight: 2.5,
            }}
          >
            {firstLatterCategory.slice(0, 1)}
          </div>
        )}
      </div>
      <div>
        <div className="caption-2">{img ? "Creater" : "Category"}</div>
        <div className="neutrals-2">{name}</div>
      </div>
    </div>
  );
};

export default Creator;
