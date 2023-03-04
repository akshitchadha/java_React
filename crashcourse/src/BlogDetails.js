import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = (props) => {
 const {title,id,author}= props.location.state;
 const {data,pending,err}=useFetch(`http://localhost:7100/blogdetail/${id}`) ; 
 const history=useHistory();      
const handledelete=()=>
{
 
  fetch(`http://localhost:7100/deleteblog/${id}`,{

  method:'DELETE'
  }).then((response) => {
   
        return response.text();

    }).then((converted) => 
    {
    alert(converted);
    history.push('/');
})

}


 return (
   <div className="blog-details" >
     {pending && <div >Loading...</div>}
     {err &&<div>{err}</div>}
     {data && (
        <article>

       <h2 className="blog-details-h2"><span className="blog-detail-span">{title}</span></h2>
       <p className="blog-author">Written by {author}</p>
       <div >{data.body}</div>
        </article>

     )}
       
       
        <div className="blog-bottom" >
         <p > < button  onClick={()=>handledelete()}> Delete Blog</button></p>
        </div>

   </div>
    
    
  
 );
}
 
export default BlogDetails;