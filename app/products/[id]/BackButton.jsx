"use client";
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation';
import React from 'react'

function BackButton() {
  const router = useRouter();
  const handleBack = () => {
    router.push('/products'); 
  };
  return (
    <div>
      <button onClick={handleBack} className="text-orange-500 mt-10 lg:my-3 font-bold  p-2 cursor-pointer hover:text-orange-600">
        <FontAwesomeIcon icon={faArrowRotateLeft} size='xl' />
        <span className='mx-2 text-xl '>Back to Products</span>
      </button>
    </div>
  )
}

export default BackButton