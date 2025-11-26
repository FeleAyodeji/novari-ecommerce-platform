"use client";

import type React from "react";
import { useState } from "react";

interface DeliveryFormProps {
  onSubmit: (data: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }) => void;
}

export function DeliveryForm({ onSubmit }: DeliveryFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim() || !formData.email.includes("@"))
      newErrors.email = "Valid email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim())
      newErrors.address = "Delivery address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.postalCode.trim())
      newErrors.postalCode = "Postal code is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6"
    >
      <div>
        <h2 className="text-xl font-serif font-bold text-slate-900 mb-2">
          Delivery Information
        </h2>
        <p className="text-sm text-gray-600">
          Please provide your delivery details.
        </p>
      </div>

      {/* Full Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-slate-900 mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors ${
              errors.fullName
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-slate-900"
            }`}
          />
          {errors.fullName && (
            <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-900 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john.doe@example.com"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors ${
              errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-slate-900"
            }`}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Phone Number */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-slate-900 mb-2"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="+1 (555) 123-4567"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors ${
            errors.phone
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-slate-900"
          }`}
        />
        {errors.phone && (
          <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Delivery Address */}
      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-slate-900 mb-2"
        >
          Delivery Address
        </label>
        <textarea
          id="address"
          name="address"
          placeholder="123 Main Street, Apt 4B"
          value={formData.address}
          onChange={handleChange}
          rows={4}
          className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors resize-none ${
            errors.address
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-slate-900"
          }`}
        />
        {errors.address && (
          <p className="text-sm text-red-500 mt-1">{errors.address}</p>
        )}
      </div>

      {/* City, State, Postal Code */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-slate-900 mb-2"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="New York"
            value={formData.city}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors ${
              errors.city
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-slate-900"
            }`}
          />
          {errors.city && (
            <p className="text-sm text-red-500 mt-1">{errors.city}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-slate-900 mb-2"
          >
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="NY"
            value={formData.state}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors ${
              errors.state
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-slate-900"
            }`}
          />
          {errors.state && (
            <p className="text-sm text-red-500 mt-1">{errors.state}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="postalCode"
            className="block text-sm font-medium text-slate-900 mb-2"
          >
            Postal Code
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            placeholder="10001"
            value={formData.postalCode}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors ${
              errors.postalCode
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-slate-900"
            }`}
          />
          {errors.postalCode && (
            <p className="text-sm text-red-500 mt-1">{errors.postalCode}</p>
          )}
        </div>
      </div>

      {/* Country */}
      <div>
        <label
          htmlFor="country"
          className="block text-sm font-medium text-slate-900 mb-2"
        >
          Country
        </label>
        <input
          type="text"
          id="country"
          name="country"
          placeholder="United States"
          value={formData.country}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors ${
            errors.country
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-slate-900"
          }`}
        />
        {errors.country && (
          <p className="text-sm text-red-500 mt-1">{errors.country}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-slate-900 text-white font-semibold py-3 rounded-lg hover:bg-slate-800 transition-colors mt-8"
      >
        Save & Continue to Payment
      </button>
    </form>
  );
}
