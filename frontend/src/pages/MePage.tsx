import { useState, useEffect } from "react";
import { type UserData, getUserData } from "../features/auth/authService";
import { LogoutButton } from "../features/auth/LogoutButton";

export function MePage() {
    const [user, setUser] = useState<UserData | null>(null);
    useEffect(() => {
        getUserData().then(setUser)
    }, []);
    
    if (!user) {
        return <p>Loading...</p>
    }
  return (
    <main>
      <h1>Me</h1>
      <p>id: {user.id}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>

      <LogoutButton/>
      
    </main>
  );
}