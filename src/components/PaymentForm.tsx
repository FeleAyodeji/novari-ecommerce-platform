"use client";

import type React from "react";
import { useState } from "react";

interface PaymentFormProps {
  onSubmit: () => void;
  deliveryData: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
}

export function PaymentForm({ onSubmit, deliveryData }: PaymentFormProps) {
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!paymentData.cardNumber.trim() || paymentData.cardNumber.length < 13)
      newErrors.cardNumber = "Valid card number is required";
    if (!paymentData.cardName.trim())
      newErrors.cardName = "Cardholder name is required";
    if (!paymentData.expiryDate.trim())
      newErrors.expiryDate = "Expiry date is required";
    if (!paymentData.cvv.trim() || paymentData.cvv.length < 3)
      newErrors.cvv = "Valid CVV is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6"
    >
      <div>
        <h2 className="text-xl font-serif font-bold text-slate-900 mb-2">
          Payment Information
        </h2>
        <p className="text-sm text-gray-600">
          Enter your payment details to complete your order.
        </p>
      </div>

      {/* Card Number */}
      <div>
        <label
          htmlFor="cardNumber"
          className="block text-sm font-medium text-slate-900 mb-2"
        >
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          placeholder="1234 5678 9012 3456"
          value={paymentData.cardNumber}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors ${
            errors.cardNumber
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-slate-900"
          }`}
        />
        {errors.cardNumber && (
          <p className="text-sm text-red-500 mt-1">{errors.cardNumber}</p>
        )}
      </div>

      {/* Cardholder Name */}
      <div>
        <label
          htmlFor="cardName"
          className="block text-sm font-medium text-slate-900 mb-2"
        >
          Cardholder Name
        </label>
        <input
          type="text"
          id="cardName"
          name="cardName"
          placeholder="John Doe"
          value={paymentData.cardName}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors ${
            errors.cardName
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-slate-900"
          }`}
        />
        {errors.cardName && (
          <p className="text-sm text-red-500 mt-1">{errors.cardName}</p>
        )}
      </div>

      {/* Expiry Date and CVV */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="expiryDate"
            className="block text-sm font-medium text-slate-900 mb-2"
          >
            Expiry Date
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            placeholder="MM/YY"
            value={paymentData.expiryDate}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors ${
              errors.expiryDate
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-slate-900"
            }`}
          />
          {errors.expiryDate && (
            <p className="text-sm text-red-500 mt-1">{errors.expiryDate}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="cvv"
            className="block text-sm font-medium text-slate-900 mb-2"
          >
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            placeholder="123"
            value={paymentData.cvv}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors ${
              errors.cvv
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-slate-900"
            }`}
          />
          {errors.cvv && (
            <p className="text-sm text-red-500 mt-1">{errors.cvv}</p>
          )}
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-semibold text-slate-900 mb-4">Order Summary</h3>
        <p className="text-sm text-gray-600 mb-2">Shipping to:</p>
        <p className="text-sm font-medium text-slate-900">
          {deliveryData.fullName}
          <br />
          {deliveryData.address}
          <br />
          {deliveryData.city}, {deliveryData.state} {deliveryData.postalCode}
          <br />
          {deliveryData.country}
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-slate-900 text-white font-semibold py-3 rounded-lg hover:bg-slate-800 transition-colors mt-8"
      >
        Complete Order
      </button>
    </form>
  );
}
