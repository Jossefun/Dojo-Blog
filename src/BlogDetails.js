import { useParams } from "react-router-dom";
import useFatch from "./useFetch";



const BlogDetails = () => {
   const { id } = useParams(); //useParams Hook help us use route parameters from the browse 
   const { data: blog , error , isPending } = useFatch('http://localhost:8000/blogs/' + id)
   console.log(blog);
   return(
       <div className="blog-details">
            {isPending && <div>Loading...</div> }
            {error && <div> { error } </div> } 
            { blog && (
                <div>
                    <h2> {blog.title} </h2>
                    <article>
                        <h3>writing by {blog.author}</h3>
                        {blog.body}
                    </article>
                </div>
            ) } 
             
       </div>
   );
}
export default BlogDetails;