import { useState } from "react";
import { register } from "./authService";

export function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");

  async function handleSubmit(event: React.SubmitEvent) {
    event.preventDefault();

    try {
      await register({
        username,
        email,
        password,
        password_confirm,
      });

      console.log("Registered successfully");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>

      <label>
        Email
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>

      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>

      <label>
        Password Confirm
        <input
          type="password"
          value={password_confirm}
          onChange={(event) => setPasswordConfirm(event.target.value)}
        />
      </label>

      <button type="submit">
        Register
      </button>
    </form>
  );
}