"use client";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../../features/cart/cartSlice";
import Image from "next/image";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => {
    return sum + parseFloat(item.price) * item.quantity;
  }, 0);

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-3">Cart</h1>
      {cartItems.length !== 0 && (
        <p className="text-gray-400 text-lg text-center mb-8">
          Proceed to Checkout before your items sell out!
        </p>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 lg:mt-14 bg-slate-50 rounded p-6 items-center">
        <div className="lg:col-span-2 space-y-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is Empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border  p-4 rounded-lg shadow-md bg-white"
              >
                <Image
                  src={item.image.src}
                  alt={item.name}
                  width={130}
                  height={80}
                  quality={100}
                  className="rounded-md"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">{item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      className="px-2 py-1 border rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    {parseFloat(item.price) * item.quantity}
                  </p>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 text-sm mt-2 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border p-6 rounded-lg shadow-md bg-gray-white">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>{total}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <hr className="mb-4" />
          <div className="flex justify-between text-lg font-bold mb-6">
            <span>Total</span>
            <span>{total}</span>
          </div>
          <button className="w-full py-3 bg-black text-white rounded hover:bg-gray-900 transition cursor-pointer">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
