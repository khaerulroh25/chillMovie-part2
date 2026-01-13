import AuthLayout from "../components/organisms/AuthLayout";
import RegisterCard from "../components/organisms/RegisterCard";
import bgRegister from "../img/backgrounds/bg-register.jpg";

export default function RegisterPage() {
  return (
    <AuthLayout backgroundImage={bgRegister}>
      <RegisterCard />
    </AuthLayout>
  );
}
