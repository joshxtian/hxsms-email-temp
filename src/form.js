import React from 'react'

const form = () => {
  // const transport = {
  //   host: process.env.REACT_APP_NODE_MAILER_SMTP,
  //   secure: true,
  //   auth: { user: process.env.REACT_APP_NODE_MAILER_USER, pass: process.env.REACT_APP_NODE_MAILER_PASS },
  // }

  // const defaults = {
  //   from: "sender@server.com",
  // }
  
  // const mailer = Mailer(
  // { transport, defaults },
  // { EmailTemp });
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  useEffect(() => {

  }, [email]);
  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="email" placeholder="EMAIL" onChange={(e)=>{
        setEmail(e.target.value);
      }} />
        <button type="submit">Send</button>
      </form>
    </>
  )
}

export default form