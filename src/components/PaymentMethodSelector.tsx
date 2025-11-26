"use client";

type PaymentMethod = "card" | "bank" | "cod";

interface PaymentMethodSelectorProps {
  selectedMethod: PaymentMethod;
  onMethodChange: (method: PaymentMethod) => void;
}

export function PaymentMethodSelector({
  selectedMethod,
  onMethodChange,
}: PaymentMethodSelectorProps) {
  const methods = [
    { id: "card", label: "Card Payment", icon: "💳" },
    { id: "bank", label: "Bank Transfer", icon: "🏦" },
    { id: "cod", label: "Cash on Delivery", icon: "💵" },
  ] as const;

  return (
    <div className="space-y-3">
      {methods.map((method) => (
        <button
          key={method.id}
          type="button"
          onClick={() => onMethodChange(method.id)}
          className={`w-full flex items-center gap-3 p-4 border-2 rounded-lg transition-all ${
            selectedMethod === method.id
              ? "border-slate-900 bg-slate-50"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <input
            type="radio"
            name="payment-method"
            checked={selectedMethod === method.id}
            onChange={() => {}}
            className="w-4 h-4"
          />
          <span className="text-lg">{method.icon}</span>
          <span className="font-semibold text-slate-900">{method.label}</span>
        </button>
      ))}
    </div>
  );
}
