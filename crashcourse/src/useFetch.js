import { useState,useEffect } from 'react';

const useFetch =(url)=>
{
    const [data, setdata] = useState(null);
    const [pending, setpending] = useState(true);
    const [err, seterr] = useState(null);
    useEffect(() => {
        fetch(url)
          .then(res => {
            if(!res.ok)
            {
              throw Error(`Fail to load Blog data server error`);
            }
            return res.json();
          })
          .then(data => {
            setdata(data);
            setpending(false);
            seterr(null);
          }).catch(err=>{
            seterr("Fail to load blog data from server ")
            setpending(false);
          })


          
      }, [])
 return {data,pending,err};
}
export default useFetch;