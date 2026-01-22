import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function FavoriteLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faHeart}
              size="xl"
              className="text-red-500"
            />
            <h1 className="text-2xl font-semibold text-gray-800">Favorites List</h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">{children}</div>
    </div>
  );
}

export default FavoriteLayout;
