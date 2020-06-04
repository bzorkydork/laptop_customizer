import React from "react";
import slugify from "slugify";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function FeatureItem(props) {
  const selectedClass =
    props.item.name === props.selected[props.feature].name
      ? "feature__selected"
      : "";
  const featureClass = "feature__option " + selectedClass;
  const itemHash = slugify(JSON.stringify(props.item));

  return (
    <div key={itemHash} className="feature__item">
      <input
        type="radio"
        id={itemHash}
        className={featureClass}
        name={slugify(props.feature)}
        checked={props.item.name === props.selected[props.feature].name}
        onChange={(e) => props.updateFeature(props.feature, props.item)}
      />
      <label htmlFor={itemHash} className="feature__label">
        {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
      </label>
    </div>
  );
}
