"use client";

import { Link } from "react-router-dom";

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
}

export function OrderSummary({ subtotal, shipping, total }: OrderSummaryProps) {
  return (
    <div className="bg-secondary rounded-lg p-6 h-fit sticky top-24">
      <h2 className="text-xl font-semibold text-foreground mb-6">
        Order Summary
      </h2>

      <div className="space-y-4 mb-6">
        {/* Subtotal */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Subtotal</span>
          <span className="text-sm font-semibold text-foreground">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Shipping</span>
          <span className="text-sm font-semibold text-foreground">
            ${shipping.toFixed(2)}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-foreground">Total</span>
            <span className="text-lg font-bold text-foreground">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <Link to="/checkout">
        <button
          className="w-full bg-slate-900 text-white font-semibold py-3 rounded-lg hover:bg-slate-800 transition-colors duration-200"
          aria-label="Proceed to checkout"
        >
          Proceed to Checkout
        </button>
      </Link>

      {/* Continue Shopping Link */}
      <a
        href="/men"
        className="block text-center text-sm text-slate-600 hover:text-slate-900 transition-colors mt-4"
      >
        Continue Shopping
      </a>
    </div>
  );
}
