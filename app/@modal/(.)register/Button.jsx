"use client";
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Button() {
  const router = useRouter();
  
  return (
    <div className="flex justify-end">
      <button
        onClick={() => router.back()}
        className="hover:bg-gray-100 p-2 rounded-full transition-colors cursor-pointer"
      >
        <FontAwesomeIcon icon={faXmark} size="lg" />
      </button>
    </div>
  );
}

export default Button;