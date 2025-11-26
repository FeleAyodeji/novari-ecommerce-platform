"use client";

import React from "react";

interface CheckoutProgressProps {
  currentStep: "delivery" | "payment";
}

export function CheckoutProgress({ currentStep }: CheckoutProgressProps) {
  const steps = [
    { id: "cart", label: "Cart" },
    { id: "delivery", label: "Delivery" },
    { id: "payment", label: "Payment" },
  ];

  return (
    <div className="flex items-center justify-center gap-4">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className="flex items-center gap-2">
            <div
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                step.id === currentStep
                  ? "bg-slate-900 text-white"
                  : step.id === "cart"
                  ? "text-slate-900"
                  : "text-gray-600"
              }`}
            >
              {step.label}
            </div>
          </div>
          {index < steps.length - 1 && (
            <span className="text-gray-400 font-semibold">{">"}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
export default CheckoutProgress;
