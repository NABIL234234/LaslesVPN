import './SingUp.css'
import illustration from '../../../assets/illustration-2.png'

function SingUp() {
    return (<>
<section>
            <div className='sing-up-wrapper'>
                <div className='img-container'>
                    <img src={illustration} alt="illustration" />
                </div>
                <div className='input-container'>
                    <span>Регистрация</span>
                    <input type="text" placeholder='login' />
                    <input type="password" placeholder='password' />
                    <input type="password" placeholder='confirm password' />
                    
                    <button>Submit</button>
                </div>
            </div>
        </section>
    </>);
}

export default SingUp;