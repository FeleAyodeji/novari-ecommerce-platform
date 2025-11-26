"use client";

export function OrderSummaryPayment() {
  // Sample order data
  const items = [
    {
      id: 1,
      name: "Classic Chronograph Watch",
      price: 24999,
      quantity: 1,
      image: "/luxury-watch.jpg",
    },
    {
      id: 2,
      name: "Elegant Diamond Bezel Watch",
      price: 25000,
      quantity: 1,
      image: "/elegant-watch.jpg",
    },
  ];

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 500;
  const total = subtotal + deliveryFee;

  return (
    <div className="sticky top-32 bg-white border border-gray-200 rounded-lg p-6 space-y-6">
      <h3 className="text-xl font-serif font-bold text-slate-900">
        Order Summary
      </h3>

      {/* Order items */}
      <div className="space-y-4 border-b border-gray-200 pb-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex gap-4"
          >
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              className="w-20 h-20 bg-gray-100 rounded-lg object-cover"
            />
            <div className="flex-1">
              <p className="font-semibold text-slate-900 text-sm">
                {item.name}
              </p>
              <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              <p className="font-semibold text-slate-900">
                ₹{item.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Price breakdown */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold text-slate-900">
            ₹{subtotal.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Delivery Fee</span>
          <span className="font-semibold text-slate-900">
            ₹{deliveryFee.toLocaleString()}
          </span>
        </div>
        <div className="border-t border-gray-200 pt-3 flex justify-between">
          <span className="font-bold text-slate-900">Total</span>
          <span className="font-bold text-slate-900 text-lg">
            ₹{total.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
export default OrderSummaryPayment;
