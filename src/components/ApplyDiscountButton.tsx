"use client";

import { useCart } from "@/contexts/CartContext";

const ApplyDiscountButton = () => {
  const { applyDiscount, isDiscounted } = useCart();

  if (isDiscounted) {
    return (
      <div>
        <span className="font-adelle-mono text-lg uppercase underline decoration-2">
          DISCOUNT APPLIED
        </span>
      </div>
    );
  }

  return (
    <button
      className="flex items-center justify-center rounded-full border-2 border-black bg-simmer-white px-4 py-1.5 font-adelle-mono"
      onClick={applyDiscount}
    >
      APPLY TO CHECKOUT
    </button>
  );
};

export default ApplyDiscountButton;
