import * as React from "react";

import { Questionnaire } from "./schema";

interface SlidersProps {
  attributes: { left: string; right: string; value: number }[];
}

const WHITE = "#f3e7d3";
const ORANGE = "#f89a1c";

const styles = {
  container: {
    maxWidth: "370px",
    padding: "20px",
    backgroundColor: "black",
    color: WHITE,
    fontFamily: "sans-serif"
  },
  marker: {
    width: "30px",
    height: "30px"
  }
};

const Sliders = ({ attributes }: SlidersProps) => {
  return (
    <div style={{ ...styles.container, boxSizing: "border-box" }}>
      {attributes.map((attr) => (
        <div
          key={attr.left + attr.right}
          style={{
            marginBottom: "15px"
          }}
        >
          <div style={{ width: "330px" }}>
            <div
              style={{
                display: "inline-block",
                textAlign: "left",
                width: "50%"
              }}
            >
              {attr.left}
            </div>
            <div
              style={{
                display: "inline-block",
                textAlign: "right",
                width: "50%"
              }}
            >
              {attr.right}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%"
            }}
          >
            {[...Array(11)].map((_, i) => (
              <div
                key={i}
                style={{
                  ...styles.marker,
                  backgroundColor: i === attr.value ? ORANGE : WHITE
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const EmailTemplate: React.FC<Readonly<Questionnaire>> = ({
  name,
  email,
  contactNumber,
  brandDetails,
  brandName,
  ...other
}) => {
  // Remove duplicates from the orders array
  const [attributes, questions] = Object.entries(other).reduce(
    (acc, entry) => {
      const [attributes, questions] = acc;
      if (entry[0].startsWith("Attribute:")) {
        const attribute = entry[0].substring(entry[0].indexOf(":") + 1);
        attributes.push([attribute, entry[1]]);
      } else {
        questions.push(entry);
      }
      return acc;
    },
    [[], []] as [Array<[string, string]>, Array<[string, string]>]
  );

  const mappedAttributes = attributes.map(([attribute, value]) => {
    const [left, right] = attribute.split("-");

    return {
      left,
      right,
      value: Number(value)
    };
  });

  return (
    <div>
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>Email Address:</b> {email}
      </p>
      <p>
        <b>Contact Number:</b> {contactNumber}
      </p>
      <p>
        <b>Brand Name:</b> {brandName}
      </p>
      <p>
        <b>Brand Details:</b> {brandDetails}
      </p>
      <br />
      <h3>Brand Questionnaire: </h3>
      {questions.map(([question, answer]) => (
        <div key={question}>
          <p>
            <b>{question}</b>
          </p>
          <p>{answer}</p>
        </div>
      ))}
      <br />
      <h3>Brand Attributes: </h3>
      <Sliders attributes={mappedAttributes} />
      <br />
      <p>
        <i>You may reply directly to this email to contact the client.</i>
      </p>
    </div>
  );
};
