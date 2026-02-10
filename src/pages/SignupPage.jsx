import SignupForm from "../component/form/SignUpForm";
import "./SignupPage.css";

function SignupPage (){
    return (
        <section className="auth-page">
          <h2>Create an account</h2>
          <p>This is the first step to kickstart your growth</p>
          <SignupForm />
        </section>
    )
}

export default SignupPage;
