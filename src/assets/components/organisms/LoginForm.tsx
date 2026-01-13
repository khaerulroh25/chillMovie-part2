import FormGroup from "../molecules/FormGroup";
import PasswordField from "../molecules/PasswordField";

export default function LoginForm() {
  return (
    <div className="flex flex-col gap-5">
      <FormGroup label="Username" placeholder="Masukkan username" />
      <PasswordField label="Kata Sandi" placeholder="Masukkan kata sandi" />
    </div>
  );
}
