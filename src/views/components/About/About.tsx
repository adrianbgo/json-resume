import React from "react";
import InfoTag from "../../partials/InfoTag";
import IAbout from "./IAbout";

const About = (props: IAbout) => {
  return (
    <div className="about">
      <div className="name-title">
        <h4 className="text-lg title about-name">{props.name}</h4>
        <em className="about-title">{props.title}</em>
      </div>
      {props.email && (
        <InfoTag text={props.email} library="far" icon="envelope" />
      )}
      {props.phone && <InfoTag text={props.phone} library="fas" icon="phone" />}
      {props.location && (
        <InfoTag text={props.location} library="fas" icon="map-pin" />
      )}
      {props.website && (
        <InfoTag text={props.website} library="fas" icon="globe" />
      )}
      {props.linkedIn && (
        <InfoTag text={props.linkedIn} library="fab" icon="linkedin" />
      )}
      {props.github && (
        <InfoTag text={props.github} library="fab" icon="github" />
      )}
      {props.twitter && (
        <InfoTag text={props.twitter} library="fab" icon="twitter" />
      )}
      {props.facebook && (
        <InfoTag text={props.facebook} library="fab" icon="facebook" />
      )}
    </div>
  );
};

export default About;
