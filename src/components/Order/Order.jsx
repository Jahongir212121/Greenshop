import { useState } from "react";

export default function OrderSummary() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="max-w-lg w-[80%] mx-auto p-2 border rounded-2xl shadow-xl bg-white md:p-8 lg:p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">
        Your Order
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
          <span className="font-medium text-gray-700 text-sm sm:text-base">
            Barberton Daisy (x2)
          </span>
          <span className="font-semibold text-green-600 text-sm sm:text-base">
            $238.00
          </span>
        </div>

        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
          <span className="font-medium text-gray-700 text-sm sm:text-base">
            Blushing Bromeliad (x6)
          </span>
          <span className="font-semibold text-green-600 text-sm sm:text-base">
            $834.00
          </span>
        </div>

        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
          <span className="font-medium text-gray-700 text-sm sm:text-base">
            Aluminum Plant (x9)
          </span>
          <span className="font-semibold text-green-600 text-sm sm:text-base">
            $1,611.00
          </span>
        </div>
      </div>

      <div className="mt-6 border-t pt-4 space-y-2">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span className="font-medium">$2,683.00</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className="font-medium">$16.00</span>
        </div>
        <div className="flex justify-between text-xl font-bold text-gray-800 mt-2">
          <span>Total</span>
          <span className="text-green-700">$2,699.00</span>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mt-6">
        Payment Method
      </h3>
      <div className="mt-2 space-y-3">
        <label className="flex items-center space-x-3 cursor-pointer bg-gray-100 p-3 rounded-lg">
          <input type="radio" name="payment" value="paypal" defaultChecked />
          <span>PayPal / Visa / MasterCard / AmEx</span>
        </label>
        <label className="flex items-center space-x-3 cursor-pointer bg-gray-100 p-3 rounded-lg">
          <input type="radio" name="payment" value="bank" />
          <span>Direct bank transfer</span>
        </label>
        <label className="flex items-center space-x-3 cursor-pointer bg-gray-100 p-3 rounded-lg">
          <input type="radio" name="payment" value="cash" />
          <span>Cash on delivery</span>
        </label>
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition duration-300"
      >
        Place Order
      </button>
      {isModalOpen && (
        <div className="max-w-lg w-[90%] mx-auto p-6 border rounded-2xl shadow-xl bg-white md:p-8 lg:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">
            Your Order
          </h2>

          <div className="space-y-4">
            {[
              { name: "Barberton Daisy", qty: 2, price: 238 },
              { name: "Blushing Bromeliad", qty: 6, price: 834 },
              { name: "Aluminum Plant", qty: 9, price: 1611 },
            ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
              >
                <span className="font-medium text-gray-700 text-sm sm:text-base">
                  {item.name} (x{item.qty})
                </span>
                <span className="font-semibold text-green-600 text-sm sm:text-base">
                  ${item.price.toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-4 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span className="font-medium">$2,683.00</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="font-medium">$16.00</span>
            </div>
            <div className="flex justify-between text-xl font-bold text-gray-800 mt-2">
              <span>Total</span>
              <span className="text-green-700">$2,699.00</span>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mt-6">
            Payment Method
          </h3>
          <div className="mt-2 space-y-3">
            {[
              "PayPal / Visa / MasterCard / AmEx",
              "Direct bank transfer",
              "Cash on delivery",
            ].map((method, index) => (
              <label
                key={index}
                className="flex items-center space-x-3 cursor-pointer bg-gray-100 p-3 rounded-lg"
              >
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  defaultChecked={index === 2}
                />
                <span>{method}</span>
              </label>
            ))}
          </div>

          <button
            className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            Place Order
          </button>

          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4">
              <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl relative overflow-y-auto max-h-[950vh]">
                <button
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg"
                  onClick={() => setIsModalOpen(false)}
                >
                  ✕
                </button>
                <div className="text-center">
                  <div className="mx-auto mb-4">
                    <img
                      src="/lettersvg.svg"
                      alt="Thank You"
                      className="w-12 mx-auto"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Your order has been received
                  </h3>

                  <div className="mt-4 border rounded-lg p-4 text-left text-gray-700 bg-gray-50">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <p className="font-semibold">Order Number:</p>
                      <p className="text-gray-800">19586867</p>
                      <p className="font-semibold">Date:</p>
                      <p className="text-gray-800">15 Sep, 2021</p>
                      <p className="font-semibold">Total:</p>
                      <p className="text-gray-800">$2,699.00</p>
                      <p className="font-semibold">Payment Method:</p>
                      <p className="text-gray-800">Cash on delivery</p>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800">
                        Order Details
                      </h4>
                      <div className="space-y-2 mt-2">
                        {[
                          {
                            name: "Barberton Daisy",
                            qty: 2,
                            price: 238,
                            img: "/plant.png",
                          },
                          {
                            name: "Blushing Bromeliad",
                            qty: 6,
                            price: 834,
                            img: "/plant.png",
                          },
                          {
                            name: "Aluminum Plant",
                            qty: 9,
                            price: 1611,
                            img: "/plant.png",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center p-2 bg-white rounded-lg shadow-sm"
                          >
                            <div className="flex items-center space-x-3">
                              <img
                                src={item.img}
                                alt={item.name}
                                className="w-10 h-10 rounded"
                              />
                              <span>
                                {item.name} (x{item.qty})
                              </span>
                            </div>
                            <span className="font-medium text-green-600">
                              ${item.price.toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm text-gray-600">
                        Your order is currently being processed. You will
                        receive an order confirmation email shortly with the
                        expected delivery date.
                      </p>
                    </div>
                  </div>

                  <button
                    className="mt-6 bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Track your order
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
