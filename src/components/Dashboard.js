import React, { useState } from "react"
import { Card, Button, Alert,Form } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom";
function fetchScore(url) {
  return fetch(
    "https://lighthouse-dot-webdotdevsite.appspot.com//lh/newaudit",
    {
      method: "POST",
      body: JSON.stringify({
        url,
        replace: true,
        save: false,
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      credentials: "same-origin",
    }
  )
    .then((res) => res.json()) // this is the line you need
    .then((data) => data.lhrSlim[0].score)
    .catch(function (error) {
      console.log(error);

      // eslint-disable-next-line no-unused-expressions
      error.message;
    });
}
export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const [score, setScore] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
    <div className="App">
        <center><h1>
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
        </Form></center>
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <h1>
            {" "}
            <span class="badge rounded-pill bg-warning text-dark">{score}</span>
          </h1>
        )}
      </div>

      <div class="list-group">
        <a
          href="https://www2.stardust-testing.com/en/10-tips-for-web-accessibility"
          class="list-group-item list-group-item-action active"
          aria-current="true"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Structure and organize with headers</h5>
            <small>Few minutes ago</small>
          </div>
          <p class="mb-1">Assign alt tags for images.</p>
          <small>
            Alt tags also contribute to a higher SEO score on Google.
          </small>
        </a>
        <a
          href="https://www2.stardust-testing.com/en/10-tips-for-web-accessibility"
          class="list-group-item list-group-item-action"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Use descriptive title for links</h5>
            <small class="text-muted">Few minutes ago</small>
          </div>
          <p class="mb-1">Use colors carefully.</p>
          <small class="text-muted">
            Design forms for web accessibility Using label tags or an ARIA
            property will increase the accessibility of your webforms..
          </small>
        </a>
        <a
          href="https://www2.stardust-testing.com/en/10-tips-for-web-accessibility"
          class="list-group-item list-group-item-action"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Use tables for tabular data</h5>
            <small class="text-muted">Few minutes ago</small>
          </div>
          <p class="mb-1">Ensure site navigation via a keyboard.</p>
          <small class="text-muted">
            A major part of web accessibility is ensuring barrier free
            navigation for millions of users with motor function and vision
            difficulties. As a result, verify that your website can be fully
            navigated using the tab and arrow keys or alternative hardware such
            as a mouth stick or single-switch input..
          </small>
        </a>
      </div>
      
    
          <h2 className="text-center mt-10">WebTest🔍</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Current User:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 text-center mt-2">
            Update Profile
          </Link>
       
      <div className="w-80 text-center mt-2">
        <Button type="button" className="btn btn-danger" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
}

