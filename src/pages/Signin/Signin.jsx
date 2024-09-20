import Illustration from '../../components/Signin/Illustration'
import classes from './Signin.module.css'
import SigninForm from '../../components/Signin/SigninForm'

export default function Signin() {
  return (
    <div>
      <h1>Login to your account</h1>
      <div className={classes.column}>
         <Illustration/>
         <SigninForm>
          
          </SigninForm>
        </div>
    </div>
  )
}
