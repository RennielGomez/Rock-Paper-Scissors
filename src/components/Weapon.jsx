import React from 'react';

function Weapon({imgSrc, altDescription}) {
  return (
    <img className='min-w-min' src={imgSrc} alt={altDescription} />
  )
}

export default Weapon