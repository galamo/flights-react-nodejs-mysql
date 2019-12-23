
import React from "react"
import SignIn from "components/pages/signIn";
import SignUp from "components/pages/signUp";
import Home from "components/pages/home"
import Flights from "components/pages/flights"
import { withAuth } from "components/hoc/auth"

export const routes = [
    { exact: true, isVisible: true, title: "Sign In", path: "/signIn", component: SignIn },
    { exact: true, isVisible: true, title: "Sign Up", path: "/signUp", component: SignUp },
    {
        exact: true, isVisible: true, title: "Home", path: "/home", component: (props) => {
            const HomeWithAuth = withAuth(Home);
            return <HomeWithAuth {...props} />
        }
    },
    {
        exact: true, isVisible: true, title: "Flights", path: "/flights", component: (props) => {
            const FlightsWithAuth = withAuth(Flights);
            return <FlightsWithAuth {...props} />
        }
    }
]