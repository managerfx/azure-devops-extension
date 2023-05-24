import "azure-devops-ui/Core/override.css";
import "./hub.scss";

import * as SDK from "azure-devops-extension-sdk";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./root/root";
import ErrorPage from "../error-page";
import Main from "./main/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dist/hub/hub.html",
    element: <Root />,
  },
  {
    path: "/dist/hub/main",
    element: <Main />,
  },
]);


class Hub extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
  }

  public componentDidMount() {
    SDK.init();
  }

  public render(): JSX.Element {
    return (
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  }


}

ReactDOM.render(<Hub />, document.getElementById("root"));
