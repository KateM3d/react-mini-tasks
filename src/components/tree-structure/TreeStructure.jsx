import React, { useState } from "react";

const files = {
  children: [
    {
      name: "node_modules",
      children: [{ name: "joi" }],
    },
    {
      name: "public",
      children: [
        {
          name: "index.html",
        },
        {
          name: "manifest.json,",
        },
      ],
    },
    {
      name: "src",
      children: [
        {
          name: "components",
          children: [
            {
              name: "counter.jsx",
            },
            {
              name: "counter.scss",
            },
          ],
        },
      ],
    },
    { name: "App.jsx" },
    { name: "index.jsx" },
    { name: "package.json" },
    { name: "package-lock.json" },
  ],
};

const container = {
  display: "flex",
  flexDirection: "column",
  margin: "20px 50%",
  width: "500px",
};
const btn = {
  border: "none",
  background: "transparent",
  cursor: "pointer",
};

const Entry = ({ entry, depth }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div style={{ dislay: "flex" }}>
        {entry.children && (
          <button style={btn} onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "-" : "+"}
          </button>
        )}
        {entry.name}
      </div>
      {isExpanded && (
        <div style={{ paddingLeft: `${depth * 15}px` }}>
          {entry.children?.map((entry) => (
            <Entry entry={entry} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeStructure = () => {
  return (
    <div style={container}>
      {files.children.map((entry) => (
        <Entry entry={entry} depth={1} />
      ))}
    </div>
  );
};

export default TreeStructure;
