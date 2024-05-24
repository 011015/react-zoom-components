import React, { useState } from "react";
import "./index.css";

export default function Drag({ children, width }) {
  const [resize, setResize] = useState(0);
  const [clientX, setClientX] = useState(0);
  const [openResize, setOpenResize] = useState(false);
  const [preSize, setPreSize] = useState(0);

  return (
    <div
      className="lhq-drag-container"
      style={{
        cursor: openResize ? "e-resize" : "default",
      }}
      onMouseMove={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (openResize) {
          const offset = e.clientX - clientX;
          setResize(preSize + offset);
        }
      }}
      onMouseUp={(e) => {
        if (openResize) {
          setOpenResize(false);
        }
      }}
    >
      {React.cloneElement(children[0], {
        style: {
          minWidth: "5%",
          maxWidth: "95%",
          width: `calc(${width[0]} + ${resize}px)`,
          // ...children[0].props.style,
        },
      })}
      <div
        className="lhq-skeleton"
        onMouseDown={(e) => {
          setOpenResize(true);
          setClientX(e.clientX);
          setPreSize(resize);
        }}
      ></div>
      {React.cloneElement(children[1], {
        style: {
          minWidth: "5%",
          maxWidth: "95%",
          width: `calc(${width[1]} - ${resize}px)`,
          // ...children[1].props.style,
        },
      })}
    </div>
  );
}
