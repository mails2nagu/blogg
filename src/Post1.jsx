import post1bg from "./assets/img/post-bg.jpg";
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
function Post1() {

    const params = useParams()
    console.log(params)
    
const [blogData,setBlogData] = useState({})
useEffect (() => {
      loadBlog()
    },[])

    let loadBlog = async () => {
      try {
      let blog = await axios.get(`https://5cdd0a92b22718001417c19d.mockapi.io/api/blog/${params.id}`)
          
      setBlogData(blog.data)
      
    } catch (error) {

    }
    }
    
  return (
    <>

    
        <header className="masthead" style={{backgroundImage: `url(${post1bg})`}} >
       
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="post-heading">

                            <h1>{blogData.title}</h1>
                            <h2 className="subheading">{blogData.description}</h2>
                            <span className="meta">
                                Posted by {blogData.author} {blogData.createdAt}
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </header>
        <article class="mb-4 ">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <p>{blogData.content}</p>
                    </div>
                </div>
            </div>
        </article>
    </>
  )
}

export default Post1;