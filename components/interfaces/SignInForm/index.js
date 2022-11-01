import { useState } from "react";
import { FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
export default function SignInForm() {
    const [password, setPassword] = useState(""),
        [showPassword, setShowPassword] = useState(false);
    return (
        <div className="w-full flex flex-col ">
            <form action="" className="" method="post">
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div></div>
            </form>
        </div>
    );
}
