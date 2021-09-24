import { useEffect, useState } from "react";
import './overlay.css';

const Overlay = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);
  
  const closeOverlay = () => {
    setShowOverlay(false)
  }

  useEffect(() => {
    if(Object.keys(props.data).length !== 0){
      setShowOverlay(true);
    }
  },[props.data])

  return(
    <div className={`overlay ${showOverlay ? 'active':''}`}>
      <div className="holder">
        <a href className="close" onClick={closeOverlay}>X</a>
        {props.data['metric_name'] && <h1 key={'metric_name'}>{ props.data['metric_name']}</h1>}
        {props.data['title'] && <h2 key={'title'}>{ props.data['title']}</h2>}
        {props.data['metric_start'] && <p key={'metric_start'}>Start : { props.data['metric_start']}</p>}
        {props.data['metric_target'] && <p key={'metric_target'}>Target : { props.data['metric_target']}</p>}
      </div>
      <div className="backdrop"></div>
    </div>
  )
}

export default Overlay;