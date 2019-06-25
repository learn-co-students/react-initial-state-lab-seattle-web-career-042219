import React from 'react'


export default class ImageSlider extends React.Component{
    constructor(){
        super()
        this.state = 
        {currentSlideIndex: 0}
    }
    
    CURRENT_SLIDE = () => {return this.state.currentSlideIndex}

    render(){
        return(
            <div>
                I am on slide {this.CURRENT_SLIDE()}
            </div>
        )
    }
}