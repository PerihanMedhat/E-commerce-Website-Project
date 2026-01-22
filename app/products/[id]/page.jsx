import React from "react";
import camera from "../../images/camera.jpg";
import serum from "../../images/serum2.jpg";
import brushes from "../../images/brushes.avif";
import Image from "next/image";
import BackButton from "./BackButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import AddCartFavButton from "./AddCartFavButton";

const data = [
  {
    id: 1,
    name: "Camera",
    price: "99",
    originalPrice: "129",
    rating: 4.5,
    reviews: 128,
    image: camera,
    description:
      "Capture life's best moments in stunning detail with this high-resolution digital camera. Perfect for beginners and hobbyists.",
    features: [
      "20MP high-resolution sensor",
      "Full HD video recording",
      "3x optical zoom",
      "Lightweight and compact design",
    ],
    inStock: true,
  },
  {
    id: 2,
    name: "Serum",
    price: "199",
    originalPrice: "249",
    rating: 4.8,
    reviews: 89,
    image: serum,
    description:
      "Revitalize your skin with this advanced anti-aging serum. Formulated to hydrate, brighten, and reduce the appearance of fine lines.",
    features: [
      "Enriched with Vitamin C",
      "Deep hydration",
      "Reduces fine lines and wrinkles",
      "Suitable for all skin types",
    ],
    inStock: true,
  },
  {
    id: 3,
    name: "Makeup Brushes",
    price: "49",
    originalPrice: "69",
    rating: 2.3,
    reviews: 45,
    image: brushes,
    description:
      "A complete set of professional makeup brushes for flawless application. Ideal for both beginners and makeup artists.",
    features: [
      "Soft synthetic bristles",
      "Ergonomic wooden handles",
      "Includes 12 essential brushes",
      "Easy to clean and maintain",
    ],
    inStock: true,
  },
];

export const generateMetadata = ({ params }) => {
  const { id } = params;
  const product = data.find((item) => item.id === parseInt(id));

  return {
    title: {
      absolute: product.title,
    },
  };
};

function ProductDetails({ params }) {
  const { id } = params;
  const product = data?.find((item) => item.id === parseInt(id));

  return (
    <div className="container mx-auto px-4">
      <BackButton />
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8">
          <div className="relative my-6 h-36 md:h-72 lg:h-auto">
            <Image
              src={product.image}
              alt={product.name}
              fill
              quality={100}
              className="rounded-lg "
            />
          </div>
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className={
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-3xl md:text-5xl lg:text-3xl font-bold text-green-600">
                {product.price}
              </span>
              <span className="text-lg text-gray-500 line-through">
                {product.originalPrice}
              </span>
            </div>

            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>

            <div>
              <h3 className="font-semibold mb-2">Key Features:</h3>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <AddCartFavButton id={product.id} />

            {product.inStock && (
              <div className="text-sm text-green-600 font-medium">
                ✓ In stock and ready to ship
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
