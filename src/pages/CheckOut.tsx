"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckoutProgress } from "@/components/CheckoutProgress";
import { DeliveryForm } from "@/components/DeliveryForm";
import { PaymentForm } from "@/components/PaymentForm";

export default function CheckOut() {
  const [currentStep, setCurrentStep] = useState<"delivery" | "payment">(
    "delivery"
  );
  const [deliveryData, setDeliveryData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const handleDeliverySubmit = (data: typeof deliveryData) => {
    setDeliveryData(data);
    setCurrentStep("payment");
  };

  const handlePaymentSubmit = () => {
    console.log("Order completed with:", deliveryData);
    // Handle order submission
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Checkout header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-2">
            Checkout
          </h1>
          <p className="text-sm text-gray-600">
            Step {currentStep === "delivery" ? "1" : "2"} of 2
          </p>
        </div>

        {/* Progress stepper */}
        <CheckoutProgress currentStep={currentStep} />

        {/* Form content */}
        <div className="mt-12">
          {currentStep === "delivery" ? (
            <DeliveryForm onSubmit={handleDeliverySubmit} />
          ) : (
            <PaymentForm
              onSubmit={handlePaymentSubmit}
              deliveryData={deliveryData}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
