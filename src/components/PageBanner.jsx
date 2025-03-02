import React, { useEffect, useState } from "react";
import "../styles/pageBanner.css"
import { useLocation } from "react-router";

export function PageBanner() {
    let [title, setTitle] = useState('')
    let [description, setDescription] = useState('')

    // Need to get req.params e.g., /about
    // Assign that to a variable
    const location = useLocation()
    const currentRoute = location.pathname.replace(/^\//,'')

    // Switch case to determine what the title and description variables will be
    useEffect(() => {
        switch (currentRoute) {
            case "about":
                setTitle("About Us")
                setDescription("More about Book-A-Doc")
                break
            case "login":
                setTitle("Patient Login")
                setDescription("Log in to book and view your appointments")
                break
            case "contact":
                setTitle("Contact Us")
                setDescription("You can reach out to us using the information below")
                break
            case "privacy":
                setTitle("Privacy Policy")
                setDescription("Access our privacy policy below")
                break
            case "termsandconditions":
                setTitle("Terms and Conditions")
                setDescription("View Book-A-Docs terms and conditions below")
                break
            default:
                setTitle("Book Your Next Appointment")
                setDescription("Find and book with a general practitioner")
                break
        }
    }, [currentRoute])

    return (
        <div className="banner-box">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        
    )
}