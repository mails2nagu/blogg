import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";

function Blposts() {
    const [blog,setBlog] = useState([]);
    
    useEffect (() => {
        loadData()
    }, [])
    let loadData = async () => {
        
      let blog =  await axios.get("https://5cdd0a92b22718001417c19d.mockapi.io/api/blog")
      setBlog (blog.data)
     
    }

  return (
    <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">

              {blog.map((blog) => {
                      return <>
              <div className="post-preview">
                      <Link to={`/blposts/${blog.id}`} ><h2 className="post-title">{blog.title}</h2>
                          <h6 className="post-subtitle">{blog.description}</h6></Link>
                      <p className="post-meta">Posted by <b>{blog.author}</b> {blog.createdAt}</p>
                  </div>
                  
                      </>
                  })
                  }

                                 
                  <hr className="my-4" />
                  <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
              </div>
            </div>
        </div>
  )
}

export default Blposts;