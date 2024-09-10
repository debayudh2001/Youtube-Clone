import React from 'react'

const Spinner = () => {
  return (
    <>
      <div className='flex items-center justify-center w-full bg-[#0F0F0F]'>
        <div className='w-10 h-10 border-4 border-red-600 border-solid rounded-full animate-spin border-t-transparent'></div>
      </div>
    </>
  )
}

export default Spinner;


