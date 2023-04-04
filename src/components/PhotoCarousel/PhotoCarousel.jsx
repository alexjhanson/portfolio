
import './PhotoCarousel.scss';


import { useState, useEffect } from 'react';

export default function PhotoCarousel(props) {

    const[state, setState] = useState({
        items: props.items,
        itemIndex: 0,
        currentItem: props.items[0],
        photoIndex: 1,
        intervalId: null,
    });

    // eslint-disable-next-line
    useEffect(() => {
        let tmp = {...state};
        if(tmp.intervalId) {
            clearInterval(tmp.intervalId);
        }
        tmp.intervalId = setInterval(handleAutoScroll, 4000);
        tmp.photoIndex = 1;
        setState(tmp);
        return () =>  clearInterval(tmp.intervalId);
    }, [state.currentItem]);

    function handleLeftClick() { 
        setState(state => {
            let tmp = {...state};
            tmp.itemIndex = state.itemIndex ? state.itemIndex - 1 : state.items.length - 1;
            tmp.currentItem = state.items[tmp.itemIndex];
            return tmp
        });
     }

    function handleRightClick() { 
        setState(state => {
           let tmp = {...state};
           tmp.itemIndex = (state.itemIndex + 1) % state.items.length;
           tmp.currentItem = state.items[(state.itemIndex + 1) % state.items.length]
           return tmp;
        });
    }

    function handleAutoScroll() {
        setState(state => {
            let tmp = {...state};
            let index = (state.photoIndex + 1) % state.currentItem.photos.count;
            tmp.photoIndex = index ? index : state.currentItem.photos.count;
            return tmp
        })
    }

    function handleDotClick(e) {
        let tmp ={...state}
        if(state.intervalId) {
            clearInterval(state.intervalId);
            tmp.intervalId = null;
        }
        tmp.photoIndex = parseInt(e.target.dataset.index);
        setState(tmp);
    }
   
    return (
        <div>
            <h1 className="item-title">{state.currentItem.title}</h1>
            <div className="photo-viewer">
                <div className="carousel-flex">
                    <svg onClick={handleLeftClick} className="scale-icon item-selector-left-icon">
                        <use xlinkHref="sprite.svg#icon-previous2" />
                    </svg>
                    <img src={`${state.currentItem.photos.url}-${state.photoIndex}.${state.currentItem.photos.fileType}`} 
                        alt="application screen shot" 
                        className="photo-viewer__main-img" 
                    />
                    <svg onClick={handleRightClick} className="scale-icon item-selector-right-icon">
                        <use xlinkHref="sprite.svg#icon-next2" />
                    </svg>
                </div>
                <div className="photo-viewer__photo-toggles">
                {
                    new Array(state.currentItem.photos.count).fill().map((e,idx) => {
                        return <div className={`photo-viewer__toggle ${state.photoIndex === idx + 1 ? 'photo-viewer__toggle--selected' : ''}`}
                                    style={idx + 1 === state.photoIndex ? {transform: 'scale(1.20)', backgroundColor: 'rgb(55,85,241)'} : null} 
                                    data-index={idx + 1} 
                                    key={`photo-${idx+1}`}
                                    onClick={(e) => handleDotClick(e)}
                                >
                                </div>})
                }
                </div>
            </div>
            <props.Description currentItem={state.currentItem} />
        </div>
    )
};


