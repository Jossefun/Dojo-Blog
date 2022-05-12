import { useParams } from "react-router-dom";
import useFatch from "./useFetch";



const BlogDetails = () => {
   const { id } = useParams(); //useParams Hook help us use parameters from the browse 
   const {data: blogs , isPending , error} = useFatch("http://localhost:8000/blogs")
   
   return(
       <div className="blog-details">
           {isPending && <div>Loading...</div> }
           {error && <div> { error } </div> }
           { blogs && <div>{ blogs.auther} </div> }
           
       </div>
   );
}
export default BlogDetails;