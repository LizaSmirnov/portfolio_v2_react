import React, { useState } from 'react';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform additional validation if needed

    // Submit the form
    console.log('Form submitted');
  };

  const handleBlur = () => {
    if (email === '') {
      setError('FIELD IS REQUIRED.');
    } else {
      setError('');
    }
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError('INVALID EMAIL ADDRESS.');
    } else {
      return emailRegex.test(email);
    }
  };

  return (
    <div class='card card-side bg-base-100 shadow-xl justify-center'>
    <form onSubmit={handleSubmit}>
      <div>
        
        <input
          type="text"
          id="name"
          placeholder="Name" 
          class="input input-bordered input-primary w-full max-w-xs"
          onChange={(e) => setName(e.target.value)}
          onBlur={handleBlur}
          required
        />
        {error && <p className="error">{error}</p>}
      </div>
      <div>
        <input
          type="email"
          id="email"
          placeholder="Email Address" 
          class="input input-bordered input-primary w-full max-w-xs"
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleBlur}
          verify={validateEmail}
          required
        />
        {error && <p className="error">{error}</p>}
      </div>
      <div>
        <textarea
          id="message"
          placeholder="Message to me" 
          class="input input-bordered input-primary w-full max-w-xs"
          onChange={(e) => setMessage(e.target.value)}
          onBlur={handleBlur}
          required
        >
        </textarea>
          {error && <p className="error">{error}</p>}
      </div >
      <div class="flex justify-center items-center">
      <button class="btn btn-outline btn-primary max-w-xs justify-center" >Submit</button>
      </div>
    </form>
    </div>
  );
}



// const Contact = () => {
//     return (
//         <div class="card bg-base-100 shadow-xl">
//   <div id='Contact' class="card-body">
//     <h2 class="card-title">Contact</h2>
//                 <p>Phone: 650-xxx-xxxx</p>
//                 <p><a target="_blank" rel="noopener" href ="https://www.linkedin.com/in/liza-smirnov-rosas-8b627a124/">Linkden</a></p>
//                 <p>Email:kras*****@gmail.com</p>
//                 <input type="text" placeholder="Email Me!" class="input input-bordered input-accent w-full max-w-xs" />
//                 <button class="btn btn-outline btn-accent max-w-xs">Submit</button>
//     <div class="card-actions justify-end">
   
//     </div>
//   </div>
// </div>
//     )
// };
export default Contact;
