import BlogList from "./BlogList";
import Create from "./Create";
import useFetch from "./useFetch";

const Home = () => {
const  title="BLOGS_POST!";

const {data:blogs,pending,err}=useFetch(`http://localhost:7100/blogs`) ; 
 



    return (
      <div className="main">
        {err && <div className="dataloading">< h2 className="dataloadingh2">{err}</h2> </div>}
        {pending && <div className="dataloading">< h2 className="dataloadingh2">Loading...</h2> </div>}
        {blogs && <BlogList blogs={blogs}   title={title}    /*handledelete={handledelete}*//>}
      
    
      </div>
    );
  }
   
 
export default  Home;