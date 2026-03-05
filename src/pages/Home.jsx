import React from "react";
// State
import { useGetUsersQuery } from "../app/apiSlice";
// Components
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import BackToTop from "../components/BackToTop";
import { filteredProjects } from "../config";
// Utils
import { updateTitle } from "../utils";

// #region component
const Home = () => {
  const { data: userData } = useGetUsersQuery();

  React.useEffect(() => {
    updateTitle(`${userData.name} | Portfolio`);
  }, [userData]);

  return (
    <>
      <Hero name={userData.name} />
      <main>
        <AboutMe avatar_url={userData.avatar_url} />
        <Experience />
        <Skills />
        <Certificates />
        <Projects filteredProjects={filteredProjects} />
      </main>
      <BackToTop />
    </>
  );
};
// #endregion

export default Home;
