import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [author , setAuthor] = useState('mario');      //איתחול למריו
    const [ispending, setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) => {                  // 'e' is event object (read here : "https://www.w3schools.com/jsref/obj_event.asp")
        e.preventDefault();                        // prevent from refreshing the page
        const blog = { title, body, author };      //the id will crate automaticly
    
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',                                 //sendeing  POST to our db file
            headers: { "Content-Type": "application/json" }, //whats the type of th content that we send
            body: JSON.stringify(blog)                      //send the blog data as a Json
            
        }).then(()=> {
          console.log("blog added");
          setIsPending(false)
          history.push(window.location.href='/');
        });
    }

   
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input 
                     type="text" 
                     required
                     value={title}
                     onChange= {(e)=> setTitle(e.target.value)} 
                />

                <label>Blog body</label>
                <textarea 
                     required
                     value={body}
                     onChange= {(e)=> setBody(e.target.value)}
                ></textarea>

                <label>Blog author</label>
                <select
                   value={author}
                   onChange = {(e)=> setAuthor(e.target.vale)}   
                >
                    <option value="mario">mario</option>
                    <option value="yossef">yossef</option>
                </select>

                {!ispending && <button>Add Blog</button>}
                {ispending && <button>Adding...</button>}

            </form>
        </div>
   );
}

export default Create;