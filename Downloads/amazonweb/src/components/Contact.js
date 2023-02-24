import React from "react";
import {useState} from "react";
import {db} from "../firebase";
import Footer from "./home/Footer"

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        db.collection("data")
        .add({
            name: name,
            email: email,
            message: message,
        })
        .then(() => {
            alert("Your message has been sent");
            setLoader(false);
        })
        .catch((error) => {
            alert(error.message);
            setLoader(false);
        });
        setName("");
        setEmail("");
        setMessage("");
    };

return(
        <div >
            <div className="flex justify-center">
        <form className="form py-10 w-4/5 sm:w-4/5 grid sm:grid-cols-2" onSubmit={handleSubmit}>

            <div>
            <p className="text-green-500 text-xl sm:text-4xl font-semibold">Contact us</p>
            <div className="py-5">
            <label className="text-green-600 text-base sm:text-lg font-bold pb-2">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="pl-2 border border-gray-500 h-12 rounded w-full hover:border-gray-700" placeholder="name"></input>
            </div>

            <div className="pb-5">
            <label className="text-green-600 text-base sm:text-lg font-bold pb-2">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="border pl-2 border-gray-500 h-12 w-full hover:border-gray-700 rounded" placeholder="Email"></input>
            </div>

            <div className="pb-5">
            <label className="text-green-600 text-base sm:text-lg font-bold pb-2">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="border pl-2 pt-2 border-gray-500 w-full hover:border-gray-700 rounded" placeholder="Write your message here"></textarea>
            </div>
            <div className="flex justify-center">
                <button style={{background: loader ? "#0af516" : "#db9a02"}} type="submit"  className="rounded px-5 py-2 text-lg font-bold text-black">Submit</button>
            </div>
            </div>
            <div className="flex justify-center">
                <img src="https://drive.google.com/uc?export=view&id=1hosm6c4hp1bsMbCf2APNBONjW88s7SZB" className="w-4/5 h-auto"/>
            </div>
        </form>
        </div>
        <Footer/>
        </div>
);
}

export default Contact;