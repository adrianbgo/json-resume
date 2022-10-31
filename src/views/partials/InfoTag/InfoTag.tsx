import {
  IconName,
  IconPrefix,
  library,
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import React from "react";

library.add(fas, fab, far);

interface IInfoTag {
  icon?: IconName;
  url?: string;
  library?: IconPrefix;
  text: string;
}

const InfoTag = (props: IInfoTag) => {
  const removeProtocol = (_text: string) => {
    return _text.replace(/http(s)?:/, "");
  };
  return (
    <div className="info-tag-container" data-testid="infotag">
      {props.icon && (
        <FontAwesomeIcon
          icon={[props.library ? props.library : "fab", props.icon]}
          data-testid="brand-icon"
          className="text-sm icon"
        />
      )}
      {props.url ? (
        <p className="info-text text-sm">
          <a
            className="info-tag-link"
            href={props.url}
            target="_blank"
            data-testid="info-text"
          >
            {removeProtocol(props.text)}
          </a>
        </p>
      ) : (
        <h6 className="info-text text-sm" data-testid="info-text">
          {props.text}
        </h6>
      )}
    </div>
  );
};

export default InfoTag;
