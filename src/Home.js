import React from 'react'
import Carousel from './Carousel'

const Home = () => {
  return (
    <>
      <div className="p-5 text-center bg-image rounded-3" style={{"background-image": "url('https://www.theindiaforum.in/sites/default/files/styles/cover_story/public/field/image/2022/06/21/ramkumar-radhakrishnan-wikimedia-1622193304-1622193304.jpeg')", "height": "99vh", "backgroundSize":"cover"}}>
  <div className="mask" style={{"backgroundColor": "rgba(0, 0, 0, 0.6);"}}>
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-white">
        <h1 className="mb-3">Heading</h1>
        <h4 className="mb-3">Subheading</h4>
        <a className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default Home