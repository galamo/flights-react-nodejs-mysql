import React, { useState, useEffect } from "react";
import mainAxios from "axios/mainAxios"
import { Redirect } from "react-router-dom"
//api /verify  {status:true}
export const withAuth = (WrappedComponent: any) => {
    return function (props: any) {
        const [status, setStatus] = useState("loading");
        useEffect(() => {
            const verify = async () => {
                const result = await mainAxios.get("/auth/verify")
                const { status } = result.data;
                setStatus(status)
            }
            verify();
        }, [])
        if (status === "loading") return <div className="loader"></div>
        if (!status) return <Redirect to="/signIn" />
        return <WrappedComponent {...props} />
    }
}