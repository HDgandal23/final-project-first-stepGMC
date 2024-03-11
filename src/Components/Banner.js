import React from 'react'

const  Banner = ({ banner }) => {

    
  return (
    <div className='banner-image'>

    <div>
      <h2 className='banner-title'>Welcome</h2>
      <p className='content-banner'>
      Discover a world of culinary delights with us. Whether you're a seasoned chef or just starting out in the kitchen, our collection of recipes has something for everyone. From mouthwatering mains to delectable desserts, we've curated a diverse range of dishes to tantalize your taste buds. <br/><br/>

      Explore our easy-to-follow recipes, each crafted with care and precision to ensure delicious results every time. Whether you're craving comfort food classics or looking to impress with gourmet creations, you'll find inspiration aplenty here.<br/><br/>
      Join our community of food enthusiasts, share your own culinary creations, and connect with fellow foodies from around the globe. Let's embark on a flavorful journey together and make every meal a memorable experience.

    Get ready to ignite your passion for cooking and embark on a culinary adventure unlike any other. Welcome to [Your Site Name] – where every recipe tells a story.


      </p>
    </div>
      <div>
        <img className='banner-img' src={ banner } alt=' banniere'/>
      </div>
        
    </div>
  )
}

export default Banner