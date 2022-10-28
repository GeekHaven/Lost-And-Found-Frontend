import { useState } from "react";
import { FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
export default function SignInForm() {
    const [password, setPassword] = useState(""),
        [showPassword, setShowPassword] = useState(false);
    return (
        <form action="" className="w-full flex flex-col ">
            <div>
                <div></div>
                <div></div>
            </div>
            <div></div>
        </form>
    );
}
