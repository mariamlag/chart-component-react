import "../styles/SecondComp.css";
import { useState } from "react";

function Charts (props){
       const [isHovered, setIsHovered ] = useState(false);
        return (
            <div className="charts">
                {isHovered?<p className="blackPrice">{props.chart.fee }</p>:null}
                <div onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)} className = {props.chart.weekDay==="wed"? "wedd":"others"} style={{height: props.chart.height}}></div>
                <p>{props.chart.weekDay}</p>
            </div>
        )
}

export default Charts;