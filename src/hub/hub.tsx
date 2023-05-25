import "azure-devops-ui/Core/override.css";
import "./hub.scss";

import * as SDK from "azure-devops-extension-sdk";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./root/FirstPageComponent";
import ErrorPage from "../error-page";
import SecondPageComponent from "./main/SecondPageComponent";
import FirstPageComponent from "./root/FirstPageComponent";
import { Page } from "azure-devops-ui/Page";
import { Header, TitleSize } from "azure-devops-ui/Header";
import { IHeaderCommandBarItem } from "azure-devops-ui/HeaderCommandBar";
import { CRoute } from "../routes-paths";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: CRoute.FirstPage,
    element: <FirstPageComponent />,
  },
  {
    path: CRoute.SecondPage,
    element: <SecondPageComponent />,
  },
]);

const commandBarItemsSimple: IHeaderCommandBarItem[] = [
  {
    id: "#1",
    text: "Button1",
  },
];

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
        <Page>
          <Header
            title={"My simple Extension"}
            commandBarItems={commandBarItemsSimple}
            titleSize={TitleSize.Medium}
            titleIconProps={{ iconName: "OpenSource" }}
            titleAriaLevel={3}
          />
        </Page>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<Hub />, document.getElementById("root"));
