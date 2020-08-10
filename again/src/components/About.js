import React from 'react'
import Rainbow from './hoc/Rainbow'

const About = () => {
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet totam impedit voluptates non quo unde in tenetur architecto magni beatae.</p>
        </div>
    )
}

export default Rainbow(About)