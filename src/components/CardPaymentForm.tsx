"use client";

import type React from "react";
import { useState } from "react";

export function CardPaymentForm() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-slate-900 mb-2">
          Card Number
        </label>
        <input
          type="text"
          name="cardNumber"
          placeholder="XXXX XXXX XXXX XXXX"
          value={formData.cardNumber}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-slate-900"
          maxLength={19}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Expiry Date
          </label>
          <input
            type="text"
            name="expiryDate"
            placeholder="MM/YY"
            value={formData.expiryDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-slate-900"
            maxLength={5}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            CVV
          </label>
          <input
            type="text"
            name="cvv"
            placeholder="XXX"
            value={formData.cvv}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-slate-900"
            maxLength={4}
          />
        </div>
      </div>
    </div>
  );
}
