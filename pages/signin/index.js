import { useRef, useContext } from "react";
import { useRouter } from "next/router";
import SignInForm from "../../components/interfaces/SignInForm";
import SEO from "../../components/utils/SEO";
import { post } from "../../components/utils/API";
import { storeLS } from "../../components/utils/LocalStorage";
import UserContext from "../../components/utils/Contexts/userContext";
export default function SignIn() {
    const router = useRouter();
    const username = useRef(null);
    const password = useRef(null);
    const { setIsLoggedIn } = useContext(UserContext);
    async function handleLogin() {
        let res = await post("/auth", {
            username: username.current.value,
            password: password.current.value,
        });
        console.log(res);
        if (res.data) {
            storeLS("jwt_token", res.data.secret);
            setIsLoggedIn(true);
            router.push("/home");
        } else {
            router.push("/");
        }
    }
    return (
        <div>
            <SEO
                title="SignIn / LostNFound"
                desc="SignIn to Lost And Found IIITA "
            />
            <input type="text" placeholder="Username" ref={username} />
            <input type="password" placeholder="Password" ref={password} />
            <button type="button" onClick={handleLogin}>
                Sigin
            </button>
        </div>
    );
}
