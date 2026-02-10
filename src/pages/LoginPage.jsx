import LoginForm from "../component/form/LoginForm";
import "./LoginPage.css";

function LoginPage() {
    return (
    <section className="auth-page">
      <h2>Welcome back 👋</h2>
      <p>Enter your credentials to access your account</p>
      <LoginForm />
    </section>
    )
}
export default LoginPage;
