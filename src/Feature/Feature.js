import React from "react";
import FEATURES from "../FEATURES/FEATURES";
import FeatureItem from "../FeatureItem/FeatureItem";

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from "slugify";

export default function Feature(props) {
  console.log(props);
  const { feature, idx } = props;
  const featureHash = feature + "-" + idx;
  const options = FEATURES[feature].map((item) => {
    const itemHash = slugify(JSON.stringify(item));
    return (
      <div key={itemHash} className="feature__item">
        <FeatureItem
          feature={props.feature}
          item={item}
          selected={props.selected}
          updateFeature={props.updateFeature}
        />
      </div>
    );
  });
  return (
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
}
