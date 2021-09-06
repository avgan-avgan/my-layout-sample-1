import {useEffect, useReducer} from "react";
import {Link} from "react-router-dom";
import "./mystyles/content.css"

import items from "./data/catalogItemlist.json"
import images from "./data/various.json"


const initState = data => data

const reduce = (state, action)=>{

    if (action.type === "height"){
        let element = document.getElementsByClassName("cont-subItemList")[action.index]
        return state.map((v, i)=>
            i === action.index && element.style.maxHeight === "0px"?
                ({...state[i], cl_h: action.cl_h + "px"}) :
                i === action.index && element.style.maxHeight !== "0px"?
                ({rotate: true, cl_h: 0}) : ({...state[i], cl_h: 0})
        )
    }
    if (action.type === "rotate"){
        return state.map(({rotate}, i)=>
            i === action.index ?
                ({...state[i], rotate: !state[i].rotate}) :
                ({...state[i], rotate: false})
        )
    }
}

let cont_Index = 0

const carouselInitState = data => data.map((v, i)=>({...v, left: 0, index: 0}))

const carouselReduce = (state, action) => {
    // console.log(action.type)
    // console.log(action.left)
    // console.log(action.index)
    if (action.type === "start") return state.map((v, i)=>({...v, left: -action.left + "px"}))
    if (action.type === "backward") {
        cont_Index++
        if (cont_Index >= state.length){
            cont_Index = state.length-1
        }
        return state
    }
    if (action.type === "forward") {
        cont_Index--
        if (cont_Index < 0){
            cont_Index = 0
        }
        return state
    }
}

const Content = ()=>{

    const [state, dispatch] = useReducer(reduce, items, initState)
    const [carouselState, carouselDispatch] = useReducer(carouselReduce, images, carouselInitState)


    useEffect(()=>{
        let container = document.querySelector(".cont-imageContainer")
        function pushCarousel(){
            let left = container.clientWidth
            console.log(cont_Index)
            cont_Index++
            if (cont_Index >= carouselState.length){
                cont_Index = 0
            }
            if (cont_Index < 0){
                cont_Index = carouselState.length - 1
            }

            carouselDispatch({type: "start", left: left * cont_Index, index: cont_Index})
            setTimeout(pushCarousel, 4000)
        }
        pushCarousel()
    },[])

    return(
        <div className="cont-main">
            <div className="cont-catalogListMain">
                <div className="cont-catalogListContainer">
                    <ul>
                        {[...Array(21)].map((v,i)=>
                            <li key={i} className={state[i].rotate ? "bg" : null }
                                onClick={()=> {
                                    let height = document.getElementsByClassName("cont-subItemList")[i]
                                    // console.log(height.scrollHeight)
                                    dispatch({type: "height", index: i, cl_h: height.scrollHeight})
                                }}
                            >
                                <Link to={`item${i}`} className={state[i].rotate ? "bg" : null}
                                      onClick={()=>dispatch({type: "rotate", index: i})}>
                                <span className="cont-list">
                                    Единица {i +1}
                                </span>
                                    <span style={{border: "1px solid black"}} className={state[i].rotate ? "cont-arrow rotate" : "cont-arrow" }
                                          onClick={
                                              ()=> dispatch({type: "rotate", index: i})
                                          }
                                    >
                                <i className="fas fa-angle-down"/>
                            </span>
                                </Link>
                                <div className="cont-subItemList" onClick={()=> dispatch({type: "rotate", index: i})}
                                     style={{maxHeight: state[i].cl_h}}>
                                    <Link to={`/subcat_${i+1}`}>item {i+1}</Link>
                                    <Link to={`/subcat_${i+1}`}>item {i+1}</Link>
                                    <Link to={`/subcat_${i+1}`}>item {i+1}</Link>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="cont-contentContainer">
                <div className="cont-subContainer">
                    <span className="cont-leftArr" onClick={()=>carouselDispatch({type: "backward"})}>
                            <i className="fas fa-chevron-circle-left"/>
                        </span>
                    <span className="cont-rightArr" onClick={()=>carouselDispatch({type: "forward"})}>
                            <i className="fas fa-chevron-circle-right"/>
                        </span>
                    <div className="cont-carouselContainer" style={{left: carouselState[cont_Index].left}}>
                        {carouselState.map(({url, caption}, i)=>
                            <div className="cont-imageContainer"  key={i}>
                                <img src={url} alt={caption}/>
                            </div>
                        )}
                    </div>
                </div>
                <div className="cont-stockStatContainer">
                    <div className="cont-stockInfo">
                        <div className="cont-stockInfoHeader">ИНТЕРНЕТ МАГАЗИН САНТЕХНИКИ VIVON.RU</div>
                        <div className="cont-stockInfoParagraph">Прямо сейчас у нас продается <strong>65 596</strong> товаров для ванных комнат.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content