import { useState } from "react"
import "../App.css"
import { useAuth0 } from "@auth0/auth0-react";
const Contact = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    const [users, setUsers] = useState({
        Name: "", Email: "", Subject: "", Message: ""
    })
    let name, value

    const data = (e) => {
        name = e.target.name;
        value = e.target.value
        setUsers({ ...users, [name]: value })
    }

    const senddata = async (e) => {
        const { Name, Email, Subject, Message } = users
        e.preventDefault()
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name, Email, Subject, Message
            })
        }
        const res = await fetch('https://zingify-bbb5a-default-rtdb.firebaseio.com/Message.json', options)
        if (res) {
            setUsers({
                Name: "", Email: "", Subject: "", Message: ""
            })
            alert("Your Message is sent successfull")
        }
    }
    return (
        <>
            <div className="contact_container">
                <div className="contant">
                    <div className="form">
                        <form method="POST">
                            <input type="text" name="Name" value={users.Name} placeholder="Enter Your Full-Name" required autoComplete="off" onChange={data} />
                            <input type="email" name="Email" value={users.Email} placeholder="Enter Your Email" required autoComplete="off" onChange={data} />
                            <input type="text" name="Subject" value={users.Subject} placeholder="Enter Your Subject" required autoComplete="off" onChange={data} />
                            <textarea name="Message" value={users.Message} placeholder="Enter Your Message" required autoComplete="off" onChange={data}></textarea>
                            {
                                isAuthenticated ?
                                    <button type="submit" onClick={senddata}>send</button>
                                    :
                                    <button type="submit" onClick={() => loginWithRedirect()}>Login</button>
                            }

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact