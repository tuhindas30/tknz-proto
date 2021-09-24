import React, { forwardRef } from "react";

const Image = forwardRef(({ url, onClick }, ref) => (
  <div
    ref={ref}
    style={
      onClick ? { maxWidth: "50%", cursor: "pointer" } : { maxWidth: "100%" }
    }>
    <img
      src={url}
      alt={url}
      style={{ maxWidth: "100%" }}
      className="image"
      onClick={onClick}
    />
  </div>
));

export default Image;
