"use client";

import type React from "react";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PaymentMethodSelector } from "@/components/PaymentMethodSelector";
import { CardPaymentForm } from "@/components/CardPaymentForm";
import { OrderSummaryPayment } from "@/components/OrderSummaryPayment";

type PaymentMethod = "card" | "bank" | "cod";

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("card");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert("Payment completed successfully!");
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Page title */}
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-2">
            Complete Your Purchase
          </h1>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left column - Payment methods */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">
              Select Payment Method
            </h2>

            <form
              onSubmit={handlePaymentSubmit}
              className="space-y-6"
            >
              {/* Payment method selector */}
              <PaymentMethodSelector
                selectedMethod={selectedMethod}
                onMethodChange={setSelectedMethod}
              />

              {/* Conditional payment form */}
              {selectedMethod === "card" && <CardPaymentForm />}

              {selectedMethod === "bank" && (
                <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                  <h3 className="font-semibold text-slate-900 mb-4">
                    Bank Transfer Details
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-medium">Bank Name:</span> First
                      National Bank
                    </p>
                    <p>
                      <span className="font-medium">Account Number:</span>{" "}
                      1234567890
                    </p>
                    <p>
                      <span className="font-medium">Routing Number:</span>{" "}
                      987654321
                    </p>
                    <p>
                      <span className="font-medium">SWIFT Code:</span> FNBAUS33
                    </p>
                  </div>
                </div>
              )}

              {selectedMethod === "cod" && (
                <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                  <p className="text-gray-600">
                    You will pay for your order when it's delivered to you.
                    Please ensure someone is available to receive the package.
                  </p>
                </div>
              )}

              {/* Complete payment button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                {isProcessing ? "Processing..." : "Complete Payment"}
              </button>
            </form>
          </div>

          {/* Right column - Order summary */}
          <div className="lg:col-span-1">
            <OrderSummaryPayment />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
