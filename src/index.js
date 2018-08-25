import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import Test from "./components/Test";

ReactDOM.render(<Test />, document.getElementById("root"));
registerServiceWorker();
