import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
function fetchScore(url) {
  return fetch(
    "https://lighthouse-dot-webdotdevsite.appspot.com//lh/newaudit",
    {
      method: "POST",
      body: JSON.stringify({
        url,
        replace: true,
        save: false
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      credentials: "same-origin"
    }
  )
    .then((res) => res.json()) // this is the line you need
    .then((data) => data.lhrSlim[2].score)
    .catch(function (error) {
      console.log(error);

      // eslint-disable-next-line no-unused-expressions
      error.message;
    });
}

export default function Home() {
  const [score, setScore] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

 /*  useEffect(() => {
    setLoading(true);
    fetchScore("https://piyushsthr.netlify.app")
      .then(setScore)
      .then(() => setLoading(false));
  }, []); */
  return (
    <>
    <div className="App">
    <center> <h1>
          Enter Your website URL
          <span role="img" aria-label="ufo">
            🛸
          </span>
        </h1>
      <Form 
        onSubmit={(evt) => {
          evt.preventDefault();
          setLoading(true);
          fetchScore(url)
            .then(setScore)
            .then(() => setUrl(""))
            .then(() => setLoading(false));
        }}
      >
        <input
          value={url}
          onChange={(evt) => setUrl(evt.target.value)}
          placeholder="Url here"
        />
        <button>Submit</button>
      </Form> </center>
      {loading ? <h1>loading...</h1> : 
     <h1> <span class="badge rounded-pill bg-success text-dark">{score}</span></h1>}
      </div>

      <div class="list-group">
   <a href="https://www.altexsoft.com/blog/engineering/12-techniques-of-website-speed-optimization-performance-testing-and-improvement-practices/" class="list-group-item list-group-item-action active" aria-current="true">
     <div class="d-flex w-100 justify-content-between">
       <h5 class="mb-1">Remove unused CSS</h5>
       <small>Few minutes ago</small>
     </div>
     <p class="mb-1">Use a Content Delivery Network (CDN).</p>
     <small>Move your website to a better host 
     Shared hosting
     Virtual Private Servers (VPS) hosting
     Dedicated server
 .</small>
   </a>
   <a href="https://www.altexsoft.com/blog/engineering/12-techniques-of-website-speed-optimization-performance-testing-and-improvement-practices/" class="list-group-item list-group-item-action">
     <div class="d-flex w-100 justify-content-between">
       <h5 class="mb-1">Optimize the size of images on your website</h5>
       <small class="text-muted">Few minutes ago</small>
     </div>
     <p class="mb-1">Reduce the number of plugins

 Plugins are common components of each website.</p>
     <small class="text-muted">They add specific features suggested by third parties.</small>
   </a>
   <a href="https://www.altexsoft.com/blog/engineering/12-techniques-of-website-speed-optimization-performance-testing-and-improvement-practices/" class="list-group-item list-group-item-action">
     <div class="d-flex w-100 justify-content-between">
       <h5 class="mb-1">Use website caching</h5>
       <small class="text-muted">3 days ago</small>
     </div>
     <p class="mb-1">In case there are a lot of users accessing the page at one time servers work slowly and need more time to deliver the web page to each user. </p>
     <small class="text-muted">Reduce the use of web fonts it affects on the speed of the website.</small>
   </a>
 </div>
     </>
     
   );
 }
