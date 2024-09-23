import { Phone } from 'lucide-react'
import React from 'react'

export default function CallUs() {
  return (
    <>
    
     {/* Bottom Section: Call Us */}
     <div className="bg-black w-full flex items-center justify-center py-8  ">
        <div className="text-center flex justify-center items-center gap-3 ">
          <Phone className="bg-nav  p-1 "   color="black" size={28} />
          <h2 className="text-2xl text-white font-semibold">
            Call Us – 888-508-2270
          </h2>
        </div>
      </div>
    
    </>
  )
}
