
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

    useEffect(() => {
        let tmp = {...state};
        if(tmp.intervalId) {
            clearInterval(tmp.intervalId);
        }
        tmp.intervalId = setInterval(handleAutoScroll, 4000);
        tmp.photoIndex = 1;
        setState(tmp);
        return () =>  clearInterval(tmp.intervalId);
    }, [state.currentItem]); // eslint-disable-line react-hooks/exhaustive-deps

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
        <div className="carousel">
            <h1 className="carousel__item-title">{state.currentItem.title}</h1>
            <div className="carousel__image-row">
                <svg onClick={handleLeftClick} className="scale-icon carousel__selector carousel__selector--left">
                    <use xlinkHref="sprite.svg#icon-previous2" />
                </svg>
                <div className="carousel__image-container">
                    <img src={`${state.currentItem.photos.url}-${state.photoIndex}.${state.currentItem.photos.fileType}`} 
                        alt="application screen shot" 
                        className="carousel__image" 
                    />
                </div>
                <svg onClick={handleRightClick} className="scale-icon carousel__selector carousel__selector--right">
                    <use xlinkHref="sprite.svg#icon-next2" />
                </svg>
            </div>
            <div className="carousel__toggles">
            {
                new Array(state.currentItem.photos.count).fill().map((e,idx) => {
                    return <div className={`carousel__toggle ${state.photoIndex === idx + 1 ? 'carousel__toggle--selected' : ''}`}
                                style={idx + 1 === state.photoIndex ? {transform: 'scale(1.20)', backgroundColor: 'rgb(55,85,241)'} : null} 
                                data-index={idx + 1} 
                                key={`photo-${idx+1}`}
                                onClick={(e) => handleDotClick(e)}
                            >
                            </div>})
            }
            </div>
            {!props.mobile && state.currentItem.link.active ? <a className='carousel__live-link' target="_blank" rel="noreferrer" href={state.currentItem.link.url}>Live Link</a>: null}
            <props.Description currentItem={state.currentItem} />
        </div>
    )
};


