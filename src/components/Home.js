import React, { useEffect, useState, useRef } from "react";
import { Container, Button, Form, FormControl } from "react-bootstrap";
export default function Home() {
  const [State, setState] = useState("");
  const ref = useRef(0); // add a ref to remove value from input when fetch is finish
  const [userUrl, setUserUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  //if you don't need to fetch data when component is mount you can remove all the useEffect
  useEffect(() => {
    onFetch("https://krishnadevz.github.io/");
  }, []); //passing a empty array told useEffect to be play only at the component did mount state
  const onFetch = (url) => {
    setIsLoading(true);
    fetch("https://lighthouse-dot-webdotdevsite.appspot.com//lh/newaudit", {
      method: "POST",
      body: JSON.stringify({
        url: url,
        replace: true,
        save: false
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      credentials: "same-origin"
    })
      .then((res) => res.json()) // this is the line you need
      .then(function (data) {
        console.log(data);
        setState(data.lhrSlim[0].score);
      })
      .catch(function (error) {
        // eslint-disable-next-line no-unused-expressions
        error.message;
      })
      .finally((_) => {
        setIsLoading(false);
        ref.current.value = "";
      });
  };
  return (
    <div>
      <Container>
        <h1>
          Enter Your website URL
          <span role="img" aria-label="ufo">
            🛸
          </span>
        </h1>
        <Form
          onSubmit={() => {
            onFetch(userUrl);
          }}
        >
          <FormControl
            ref={ref}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            name="query"
            onChange={(e) => {
              setUserUrl(e.target.value);
            }}
          />
          <Button>
            Search
            <span role="img" aria-label="search-icon">
              🔍
            </span>
          </Button>
        </Form>
      </Container>
      {isLoading ? <h2>Accessibility of your website is Loading...</h2> : <h2>{State}</h2>}
    </div>
  );
}
