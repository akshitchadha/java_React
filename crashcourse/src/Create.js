import { useState } from "react";
import { useHistory } from "react-router-dom";


function Create() {
    const [pending, setpending] = useState(false);
    const [title, settitle] = useState('');
    const [author, setauthor] = useState('');
    const [body, setbody] = useState('');
    const [posted, setposted] = useState(false);
    const history=useHistory();       

    const  handlesubmit =(e)=> {
  
        const data = {title,author,body};
       
        setpending(true);
               fetch('http://localhost:7100/createblog', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then((response) => {
            setpending(false);
        
                return response.text();

            }).then((converted) => 
            {
            alert(converted);
       
            history.push('/');
    })
         

    }

    return (
        <div className="Create">
            <h2 className="create-blog-heading">CREATE  NEW BLOG</h2>
          

            <form className="form" onSubmit={handlesubmit}>
                <div className="form-div">
                    <p className="form-para" ><label > Blog Title</label></p>
                    <p className="form-para"> <input type="text" id="title" value={title} required
                        onChange={(e) => settitle(e.target.value)}></input> </p>
                    <p className="form-para" ><label > Blog Author</label></p>
                    <p className="form-para"> <input type="text" required value={author}

                        onChange={(e) => setauthor(e.target.value)}
                    ></input> </p>
                    <p className="form-para" ><label > Blog Body</label></p>
                    <p className="form-para" > < textarea className="textarea" required
                        value={body} onChange={e => { setbody(e.target.value) }}
                    >
                        </textarea></p>
                 { !pending && <p className="form-para" > < button className="form-button"  onClick={(e)=>handlesubmit(e)}> Add Blog</button></p>}
                 { pending && <p className="form-para" > < button className="form-button" disabled  > Adding blog ...</button></p>}

                </div>


            </form>

        </div>
    );
}

export default Create;