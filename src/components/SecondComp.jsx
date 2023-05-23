import "../styles/SecondComp.css";
import Charts from "./ChartComponent";

function spending (){
    
    const months =['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
    const data = [ 
        {
            weekDay: 'mon',
            height: '50px',
            fee: "19$",
        },     {
            weekDay: 'tue',
            height: '100px',
            fee: "32$",
        },     {
            weekDay: 'wed',
            height: '150px',
            fee: "52.36$",
        },     {
            weekDay: 'thu',
            height: '89px',
            fee: "31.07$",
        },     {
            weekDay: 'fri',
            height: '67px',
            fee: "26$",

        },     {
            weekDay: 'sat',
            height: '124px',
            fee: "47$",
        },     {
            weekDay: 'sun',
            height: '73px',
            fee: "28$",
        },
    ]
    return(
        <div className="secondDiv">
            <h1>Spending - Last 7 days</h1>
            <div className="chartMap">

                 {data.map((item, index) => {
                    
                    return (
                        <Charts key={index} chart={item} />
                    )
                    })}
                
            </div>
            <hr />
            <div className="total">
                <div>
                    <p> Total this month</p>
                    <h1> $478.33 </h1>
                </div>
                <div className="percent">
                    <h2>+2.4%</h2>
                    <p> from last month</p>
                </div>
            </div>
        </div>
    );
}

export default spending;