import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./pages/Home/";

ReactDOM.render(<Home />, document.getElementById("root"));
registerServiceWorker();
