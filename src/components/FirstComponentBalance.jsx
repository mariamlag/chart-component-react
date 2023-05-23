import Logo from '../assets/logo.svg';
import "../styles/Firstcomponent.css";
function balance(){
    return (
        <div className='firstDiv'>
            <div className='balanc'>
                <p>
                    My balance
                </p>
                <h1>
                    $921.48
                </h1>
            </div>
            <div>
                <img src={Logo} alt="" />
            </div>
        </div>
    );
}

export default balance;