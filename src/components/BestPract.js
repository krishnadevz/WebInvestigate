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
    .then((data) => data.lhrSlim[1].score)
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
     <h1> <span class="badge rounded-pill bg-success text-dark">{score}</span></h1>}
      </div>

      <div class="list-group">
 <a href="https://www.quicksprout.com/website-design-best-practices/" class="list-group-item list-group-item-action active" aria-current="true">
   <div class="d-flex w-100 justify-content-between">
     <h5 class="mb-1">Don’t fill your pages with massive blocks of text.</h5>
     <small>Few minutes ago</small>
   </div>
   <p class="mb-1">Visuals not only help you break up the written content, but they can also provide deeper explanation. </p>
   <small>Show your visitors what you’re about. They’ll understand more in a shorter amount of time..</small>
 </a>
 <a href="https://www.quicksprout.com/website-design-best-practices/" class="list-group-item list-group-item-action">
   <div class="d-flex w-100 justify-content-between">
     <h5 class="mb-1">Use short sentences </h5>
     <small class="text-muted">Few minutes ago</small>
   </div>
   <p class="mb-1">Short sentences are easier to read..</p>
   <small class="text-muted">Use paragraph breaks to your advantage. It’s okay to write longer paragraphs, but I like to keep my homepage paragraphs to a few sentences.</small>
 </a>
 <a href="https://www.quicksprout.com/website-design-best-practices/" class="list-group-item list-group-item-action">
   <div class="d-flex w-100 justify-content-between">
     <h5 class="mb-1">Reinforce actions with familiarity</h5>
     <small class="text-muted">Few minutes ago</small>
   </div>
   <p class="mb-1">If your message is the same, your CTA should be the same on every single page..</p>
   <small class="text-muted">Simplify the navigation

It shouldn’t be difficult for a website visitor to find what they’re looking for on your site and also optimize your site for mobile.</small>
 </a>
</div>
</>
 );
}

