import React from 'react'
import Image from 'next/image'
const TrustBy = () => {
     const partners=[
        {name : "Casa", 
         logo : "/company-logo/cu.png"
        },
        {name : "Egypt",
         logo : "/company-logo/eg.png",
        },
        {name : "Airbus",
          logo : "/company-logo/ata.png",
        },
        {name : "Delta",
          logo : "/company-logo/delta.png",
        },
        {name : "Air Airbus",
          logo : "/company-logo/abx.png",
        },
        {name : "WestJet",
          logo : "/company-logo/west.png",
        },
    ]
  return (
  <div className="max-sm:pt-20 max-sm:mt-0 sm:pt-35 flex max-sm:flex-col items-center justify-center text-center sm:text-left sm:pl-8 gap-6">
  <div className='flex flex-col gap-1'>
    <h3 className="text-2xl font-semibold text-gray-800">
      Trusted by
    </h3> 
    <p className="text-sm text-gray-500 mt-2">
      We are a trusted partner of airlines, payment <br/>
      gateways, and travel services around the world.
    </p>
  </div>  
  <div className='grid grid-cols-3 sm:grid-cols-7 items-center gap-6 max-sm:pt-5'>
    {partners.map((item,index)=>(
        <div key={index}>
          <Image 
            src={item.logo}
            alt={item.name} 
            width={70}
            height={40}
            className='object-contain'/>
        </div>
      ))}
  </div>
</div>
  )
}
export default TrustBy
