import React, { Suspense, lazy } from "react";
import Layout from "./Layout/index";
import { Route, Routes } from "react-router-dom";

const Homepage = lazy(() => import("./pages/home/HomePage"));
const DetailPage = lazy(() => import("./pages/specific/DetailPage"));
const SignIn = lazy(() => import("./pages/signIn/SignIn"));
const SignUp = lazy(() => import("./pages/signUp/SignUp"));
const Venues = lazy(() => import("./pages/venues/Venues"));
const UserProfile = lazy(() => import("./pages/userProfile/Profile"));
const PageNotFound = lazy(() => import("./pages/pageNotfound/ErrorPage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/venues/:id" element={<DetailPage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/error" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
