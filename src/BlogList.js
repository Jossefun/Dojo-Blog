import { Link } from 'react-router-dom';



const BlogList = ({ blogs, title }) => {  //like props

    return(
        <div className="blog-list">
        
           <h1> { title } </h1>
             {blogs.map((blog) => (      //like for loop
                <div className="blog-preview" key={blog.id}>
                      <Link to= {`/blogs/${blog.id}`}>
                           <h2> {blog.title} </h2>
                           <p>  Writing by {blog.author}  </p>
                      </Link>
                </div>
             ))}
       </div>
    );
}

export default BlogList;