import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "./style.css";
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
    .then((data) => data.lhrSlim[3].score)
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
 <h1>
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
      </Form>
      {loading ? <h1>loading...</h1> : 
     <h1> <span class="badge rounded-pill bg-danger text-dark">{score}</span></h1>}
      </div>

      <div class="list-group">
  <a href="https://www.altexsoft.com/blog/engineering/12-techniques-of-website-speed-optimization-performance-testing-and-improvement-practices/" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Improve User Experience Across Your Entire Site</h5>
      <small>Few minutes ago</small>
    </div>
    <p class="mb-1">Make Your Posts Easy to Read.</p>
    <small>Use Bucket Brigades to Keep the Flow Originally, a “bucket brigade” was a chain of people who passed buckets of water from person to person to extinguish a fire. Now it's a copywriting 
      technique designed to capture and keep a reader’s interest.
.</small>
  </a>
  <a href="https://www.altexsoft.com/blog/engineering/12-techniques-of-website-speed-optimization-performance-testing-and-improvement-practices/" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Use the Inverted Pyramid Style of Writing</h5>
      <small class="text-muted">Few minutes ago</small>
    </div>
    <p class="mb-1">This method means giving away the most valuable information at the top of the article, with less important information appearing below.

</p>
    <small class="text-muted">Readers that scan articles rarely reach the bottom of the page, so it makes sense to give them what they want as soon as they land..</small>
  </a>
  <a href="https://www.altexsoft.com/blog/engineering/12-techniques-of-website-speed-optimization-performance-testing-and-improvement-practices/" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Do Your Keyword Research</h5>
      <small class="text-muted">Few minutes ago</small>
    </div>
    <p class="mb-1">Organizing content thematically is key, but it’s a mistake to ignore keywords entirely. Keywords act as signposts to Google’s spiders, signaling topics and providing hints as to the nature of the content on the website. </p>
    <small class="text-muted">By doing keyword research, you discover who is searching for the topics you want to write about, create blog posts or other types of content that answers customers' specific questions and increase brand recognition.</small>
  </a>
</div>
    </>
  );
}
