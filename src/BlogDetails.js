import { useParams, useHistory } from "react-router-dom";
import useFatch from "./useFetch";



const BlogDetails = () => {
   const { id } = useParams(); //useParams Hook help us use route parameters from the browse 
   const { data: blog , error , isPending } = useFatch('http://localhost:8000/blogs/' + id)
   console.log(blog);
    
   const history = useHistory();

    const handleDelete = ()=> {
        fetch("http://localhost:8000/blogs" + blog.id, {
            method: 'DELETE'
        }).then(()=> {
            history.push(window.location.href="/");
        })
    }

   return(
       <div className="blog-details">
            {isPending && <div>Loading...</div> }
            {error && <div> { error } </div> } 
            { blog && (
                <div>
                    <h2> {blog.title} </h2>
                    <article>
                       <div className="author" > <h3>writing by {blog.author}</h3></div>
                        {blog.body}
                    </article>
                    <button onClick={handleDelete}>Delete Blog</button>
                </div>
            ) } 
             
       </div>
   );
}
export default BlogDetails;