import { Suspense } from "react";
import Albums from "./Albums.jsx";
import { useState } from "react";
import React from "react";

const ArtistPage = ({ artist }) => {
  return (
    <>
      <h1>{artist.name}</h1>
      <Suspense fallback={<Loading />}>
        <Albums artistId={artist.id} />
      </Suspense>
    </>
  );
};

const Loading = () => {
  return <h2>🌀 Loading...</h2>;
};

export default function ReactSuspense() {
  const [show, setShow] = useState(false);
  if (show) {
    return (
      <ArtistPage
        artist={{
          id: "the-beatles",
          name: "The Beatles",
        }}
      />
    );
  } else {
    return (
      <button onClick={() => setShow(true)}>
        Open The Beatles artist page
      </button>
    );
  }
}
