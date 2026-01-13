import AuthLayout from "../components/organisms/AuthLayout";
import LoginCard from "../components/organisms/LoginCard";
import bgLogin from "../img/backgrounds/bg-login.jpg";

export default function LoginPage() {
  return (
    <AuthLayout backgroundImage={bgLogin}>
      <LoginCard />
    </AuthLayout>
  );
}
