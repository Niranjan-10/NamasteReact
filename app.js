import React from "react";
import ReactDOM from "react-dom";

/*
Things done by parcel behind the scene 

    - Hot Module Reloading
    - File Watcher
    - Minify
    - Bundling
    - Cleaning our code
    - Dev and Production Build
    - Image Optimization
    - Caching while development
    - Compression
    - Compatble with older version of browser
    - HTTPS on dev
    - Consistent hashing algo
    - Zero config


Transitive dependencies:
we have our package manager who have manage the transitive dependencies.

browserlist

*/

const heading = React.createElement("h1", {}, "React is Cool");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

//--------------------------> commands <----------------------------

// npx parcel index.html
// npx parcel build index.html
// npx parcel index.html --https
