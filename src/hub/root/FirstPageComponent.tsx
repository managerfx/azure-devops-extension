import { ZeroData, ZeroDataActionType } from "azure-devops-ui/ZeroData";
import * as React from "react";
import { Link } from "react-router-dom";

export default class FirstPageComponent extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <div>
        <ZeroData
          primaryText="This is the primary text"
          secondaryText={
            <>
              <span>
                This secondary text contains a{" "}
                <a
                  rel="nofollow noopener"
                  target="_blank"
                  href="https://bing.com"
                  aria-label="link to bing.com"
                >
                  link
                </a>{" "}
                to somewhere else. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </span>
              <Link to={`/dist/hub/main`}>
                <i>Navigare to main</i>
              </Link>
            </>
          }
          imageAltText="Bars"
          imagePath="./img/world.png"
          actionText="Button"
          actionType={ZeroDataActionType.ctaButton}
          onActionClick={(event, item) =>
            alert("Hey, you clicked the button for " + item!.primaryText)
          }
        />
      </div>
    );
  }
}
