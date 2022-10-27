import { IconName, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import React from "react";

library.add(fas, fab);

interface IInfoTag {
  icon?: IconName;
  url?: string;
  text: string;
}

const InfoTag = (props: IInfoTag) => {
  const removeProtocol = (_text: string) => {
    return _text.replace(/http(s)?:/, "");
  };
  return (
    <div className="info-teg-container" data-testid="infotag">
      {props.icon && (
        <FontAwesomeIcon icon={["fab", props.icon]} data-testid="brand-icon" />
      )}
      {props.url ? (
        <h6 className="info-text">
          <a href={props.url} target="_blank" data-testid="info-text">
            {removeProtocol(props.text)}
            <FontAwesomeIcon
              icon="arrow-up-right-from-square"
              data-testid="link-icon"
            />
          </a>
        </h6>
      ) : (
        <h6 className="info-text" data-testid="info-text">
          {props.text}
        </h6>
      )}
    </div>
  );
};

export default InfoTag;
