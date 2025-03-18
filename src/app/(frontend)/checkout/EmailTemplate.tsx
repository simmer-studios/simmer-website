import * as React from "react";

import { CheckoutData } from "./schema";

export const EmailTemplate: React.FC<Readonly<CheckoutData>> = ({
  name,
  email,
  contactNumber,
  brandName,
  brandDetails,
  referralSource,
  budget,
  orders,
  isDiscounted
}) => {
  // Remove duplicates from the orders array
  const uniqueOrders = [...new Set(orders)];

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
      <p>
        <b>Referral Source:</b> {referralSource}
      </p>
      <p>
        <b>Budget:</b> {budget}
      </p>
      <p>
        <b>Discount:</b> {isDiscounted && "5%"}
      </p>
      <p>
        <b>Orders:</b>
        <ul>
          {uniqueOrders.map((order) => (
            <li key={order}>{order}</li>
          ))}
        </ul>
      </p>
      <br />
      <p>
        <i>You may reply directly to this email to contact the client.</i>
      </p>
    </div>
  );
};
