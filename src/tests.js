



// useEffect(()=> {    
//     fetch('http://localhost:8000/blogs')
//        .then(res => {
//            if(!res.ok) {    //res got some properties, one of them is "ok" that gets true or false
//                throw Error("Couldn't reach to this resource right now!");
//            }
//            return res.json();  
//        })
//        .then(data => {   //data here is local variable
//            setBlogs(data)   //send the data to state
//            setIsPending(false) //after we fetch the data we remove the 'loading" message
//            setError(null)
//        })
//        .catch(err => {
//            setIsPending(false)
//            setError(err.message);
//        })

// }, []);   //input some element inside this Array so the useEffect will execute anytime u do some change in this element  


//<div className="blog-preview" key={blog.id}>
//<Link to= {`/blogs/${blog.id}`}  >
//     <h2> {blog.title} </h2>
 //    <p>  Writing by {blog.author}  </p>
//</Link>
//</div>