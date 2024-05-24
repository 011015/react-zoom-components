import React, { useState } from "react";
import "./index.css";

function UpOutlined() {
  return <div className="lhq-up-arrow" />;
}

function DownOutlined() {
  return <div className="lhq-down-arrow" />;
}

function LeftOutlined() {
  return <div className="lhq-left-arrow" />;
}

function RightOutlined() {
  return <div className="lhq-right-arrow" />;
}

function RowContent({ child, height }) {
  const [openEditor, setOpenEditor] = useState(true);
  const [show, setShow] = useState(false);
  return (
    <div
      className="lhq-fold-rowContainer"
      style={openEditor ? { height } : { height: "0" }}
    >
      <div
        className={
          show
            ? "lhq-fold-childContainer lhq-fold-selectContainer"
            : "lhq-fold-childContainer"
        }
        style={
          openEditor
            ? {
                width: "100%",
                height: "100%",
                opacity: 1,
              }
            : { width: "100%", height: "0", opacity: 0 }
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
          style={show ? { opacity: 1 } : { opacity: 0 }}
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
}

/**
 * children的个数必须和height的个数一样
 * @param chidren
 * @param height
 */
export function RowFold({ children, height }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {children.map((child, index) => (
        <RowContent key={index} child={child} height={height[index]} />
      ))}
    </div>
  );
}

function ColumnContent({ child, width }) {
  const [openEditor, setOpenEditor] = useState(true);
  const [show, setShow] = useState(false);
  return (
    <div
      className="lhq-fold-columnContainer"
      style={openEditor ? { width } : { width: "0" }}
    >
      <div
        className={
          show
            ? "lhq-fold-childContainer lhq-fold-selectContainer"
            : "lhq-fold-childContainer"
        }
        style={
          openEditor
            ? {
                width: "100%",
                height: "100%",
                opacity: 1,
              }
            : { width: "0", height: "100%", opacity: 0 }
        }
      >
        {child}
      </div>
      <div
        className="lhq-fold-arrowColumnContainer"
        style={
          openEditor
            ? { transform: "translate(0, -50%)" }
            : { transform: "translate(100%, -50%)" }
        }
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <button
          style={show ? { opacity: 1 } : { opacity: 0 }}
          className={
            openEditor
              ? "lhq-arrow lhq-column-arrow-open"
              : "lhq-arrow lhq-column-arrow-close"
          }
          onClick={() => {
            setOpenEditor(!openEditor);
            setShow(!show);
          }}
        >
          {openEditor ? <LeftOutlined /> : <RightOutlined />}
        </button>
      </div>
    </div>
  );
}

/**
 * children的个数必须和width的个数一样
 * @param chidren
 * @param height
 */
export function ColumnFold({ children, width }) {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      {children.map((child, index) => (
        <ColumnContent key={index} child={child} width={width[index]} />
      ))}
    </div>
  );
}
