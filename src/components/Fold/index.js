import React, { useState } from "react";
import "./index.css";

function UpOutlined() {
  return <span className="lhq-up-arrow" />;
}

function DownOutlined() {
  return <span className="lhq-down-arrow" />;
}

function LeftOutlined() {
  return <span className="lhq-left-arrow" />;
}

function RightOutlined() {
  return <span className="lhq-right-arrow" />;
}

export function RowFold({ children, height }) {
  const [openEditor, setOpenEditor] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {children.map((child, index) => {
        return (
          <div
            className={
              show
                ? "lhq-fold-container lhq-fold-selectContainer"
                : "lhq-fold-container"
            }
            style={
              openEditor
                ? { height: height[index], flex: "1 1 0" }
                : { height: "0" }
            }
          >
            <div
              className="lhq-fold-innerContainer"
              style={
                openEditor
                  ? {
                      height: "100%",
                      flex: "1 1 0",
                      opacity: 1,
                    }
                  : { height: "0", opacity: 0 }
              }
            >
              {child}
            </div>
            <div
              className="lhq-fold-arrowRowContainer"
              style={
                openEditor
                  ? { transform: "translate(50%, 0)" }
                  : { transform: "translate(50%, 100%)" }
              }
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <button
                style={show ? { display: "block" } : { display: "none" }}
                className={
                  openEditor
                    ? "lhq-arrow lhq-row-arrow-open"
                    : "lhq-arrow lhq-row-arrow-close"
                }
                onClick={() => {
                  setOpenEditor(!openEditor);
                  setShow(!show);
                }}
              >
                {openEditor ? <UpOutlined /> : <DownOutlined />}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
