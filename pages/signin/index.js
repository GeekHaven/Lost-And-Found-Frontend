import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SignInForm from "../../components/interfaces/SignInForm";
import SEO from "../../components/utils/SEO";
export default function SignIn() {
    return (
        <div>
            <SEO
                title="SignIn / LostNFound"
                desc="SignIn to Lost And Found IIITA "
            />
        </div>
    );
}
