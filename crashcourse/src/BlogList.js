import { Link } from "react-router-dom";

function BlogList({blogs,title,handledelete}) {

    return (
        <main className="bloglist"> 
        <h2 className="blog-title" >{title}</h2>         
         {blogs.map((blogs)=>(
         <div className="Blog-preview" key={blogs.id}>
          <Link className="blogpreview-anchor"
           to={{
            pathname:"/blogdetail",
            state:blogs,
                             }}>
          <h2 className="Blog-preview-h2">{blogs.title}</h2>
          <p>Written by {blogs.author}</p>
     
          </Link>
         </div>
         )
         )}
        </main>
      );
}

 
export default BlogList;