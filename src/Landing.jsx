import React from 'react'
import BlurText from './blocks/TextAnimations/BlurText/BlurText'
import DecryptedText from './blocks/TextAnimations/DecryptedText/DecryptedText'
function Landing() {
  return (
    <div className='bg-gradient-to-r from-gray-800 to-black h-screen text-white'>
<BlurText text='Hello I am Burn.GPT' className='text-indigo-300 font-bold text-4xl pl-8 py-30 lg:text-7xl lg:pl-102 lg:py-18'/>
<DecryptedText text='Ready to get roasted? Drop your code, resume, or selfie, and let BurnGPT turn up the heat.' animateOn="view" speed={200} />
    </div>
    
  )
}

export default Landing