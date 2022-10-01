import classes from "./Login.module.css";
import test from "../../assets/test.jpg";
import { useRouter } from "next/router";
export default function Login() {
  const router = useRouter();
  const handleLogin = () => {
    router.replace("/");
  };
  return (
    <>
      <div className={classes.wrapper}>
        <div
          className={classes.left}
          style={{ backgroundImage: `url(${test.src})` }}
        ></div>
        <div className={classes.right}>
          <form>
            <p>Login using LDAP</p>
            <input
              type="text"
              required
              name="username"
              placeholder="Username"
            />
            <input
              type="password"
              required
              name="password"
              placeholder="Password"
            />
            <div onClick={handleLogin}>
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
