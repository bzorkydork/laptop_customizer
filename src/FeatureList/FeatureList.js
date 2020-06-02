import React from "react";
import Feature from "../Feature/Feature";

export default function FeatureList(props) {
  const features = Object.keys(props.features).map((feature, idx) => (
    <Feature {...props} feature={feature} idx={idx} />
  ));

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
}
