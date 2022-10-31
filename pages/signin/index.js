import { useRef } from "react";
import { useRouter } from "next/router";
import SignInForm from "../../components/interfaces/SignInForm";
import SEO from "../../components/utils/SEO";
import { post } from "../../components/utils/API";
import { storeLS } from "../../components/utils/LocalStorage";
export default function SignIn() {
    const router = useRouter();
    const username = useRef(null);
    const password = useRef(null);
    async function handleLogin() {
        let res = await post("/auth", {
            username: username.current.value,
            password: password.current.value,
        });
        console.log(res);
        storeLS("jwt_token", res.data.secret);
        router.push("/home");
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
