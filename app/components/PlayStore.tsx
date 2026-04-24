import React from 'react'

const PlayStore = () => {
  return (
    <div className="m-5">
      <div className="bg-[#305FCA] rounded-xl p-10 sm:pl-30 ">
        
        <h2 className="text-xl sm:text-3xl text-white">
          Find the Best Travel <br/>
          Deals Instantly with AI!
        </h2>

        <p className="text-[10px] pt-1 text-justify text-white ">
          No more endless searching! Our AI scans thousands of travel packages<span className='sm:block'>
          to find you the best deals - Whether it’s a budget getaway or a luxury escape</span>
        </p>

        {/* ✅ Playstore buttons */}
        <div className="flex gap-4 mt-6">
          <img 
            src="/playstore.png" 
            alt="playstore" 
            className="h-12 max-sm:h-9 cursor-pointer"
          />
          <img 
            src="/playstore-2.png" 
            alt="appstore" 
            className="h-12 max-sm:h-9 cursor-pointer"
          />
        </div>

      </div>
    </div>
  )
}

export default PlayStore