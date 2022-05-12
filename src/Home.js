import BlogList from "./BlogList";
import useFetch from "./useFetch";



const Home = () => {
        //use data as blogs
    const { data: blogs , isPending , error } = useFetch("http://localhost:8000/blogs")
    
    

    return(
          <div className="Home">
              { error && <div>{ error } </div> }
              { isPending && <div>Loading...</div> }
               
              {/* we use && to check if the useEffect is already fetch the data. till then blugs is null */}
              {blogs && <BlogList blogs={blogs}  title='All Blogs'  />} 
          </div>
    );
}

export default Home; 