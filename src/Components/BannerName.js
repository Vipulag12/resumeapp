import React from 'react'

function BannerName({name, discount, links}) {
  return (
    <div className="bannerContent">
        <h3>Hello {name}</h3>
        <p>
            Get Free discount for every <span>${discount}</span> purchase
        </p>
        <a href={links}>Get More details</a>
    </div>
  )
}

export default BannerName