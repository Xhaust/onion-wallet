import { logout } from "./authService"

export function LogoutButton() {
    async function handleLogout(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
    
        try {
          await logout();
          console.log("Logged out successfully");
          window.location.href = '/login'; 
        } catch (error) {
          console.error(error);
        }
      }

    return (
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
    )
}