import React, { Suspense } from "react"
import Navbar from "../../components/Navbar"
import Loading from "../Loading"

export default function Layout({children}:Readonly<{children:React.ReactNode}>)  {
 
    return (
        <main className="font-work-sans">
            <Suspense fallback={<Loading/>}>
            <Navbar/>
        {children}
</Suspense>
        </main>
    )
}
