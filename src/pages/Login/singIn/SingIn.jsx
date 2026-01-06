import './SingIn.css'
import illustration from '../../../assets/illustration-1.png'

function SignIn({ onNavigate }) { // Принимаем пропс
    return (
        <section>
            <div className='sing-in-wrapper'>
                <div className='img-container'>
                    <img src={illustration} alt="illustration" />
                </div>
                <div className='input-container'>
                    <span>Авторизация</span>
                    <input type="text" placeholder='login' />
                    <input type="password" placeholder='password' />
                    <button>Submit</button>
                    {/* При клике вызываем функцию из родителя */}
                    <a href="#" onClick={onNavigate}>Не зарегистрированы?</a>
                </div>
            </div>
        </section>
    );
}

export default SignIn;