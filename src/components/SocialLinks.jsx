import React from "react";
// Styles
import styled from "styled-components";
// State
import { useGetUsersQuery, useGetSocialsQuery } from "../app/apiSlice";
// Icons
import { Icon } from "@iconify/react";
// Config
// blog icon/config not needed with current link setup

// #region styled-components
const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;
// #endregion

// #region component
const SocialLinks = () => {
  const { data: userData } = useGetUsersQuery();
  const { isSuccess, error, data: socialsData } = useGetSocialsQuery();

  React.useEffect(() => {
    if (error) {
      console.log(
        `${error.status} - check getSocials query in src/app/apiSlice.js`,
      );
    }
  }, [error, socialsData]);

  return (
    <StyledSocialLinks>
      <a
        href={userData.html_url}
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <Icon icon="icomoon-free:github" />
      </a>
      {isSuccess &&
        // only show LinkedIn from the socials data to avoid extra icons
        socialsData
          .filter((element) => element.provider === "linkedin")
          .map((element, index) => {
            return (
              <a
                key={index}
                href={element.url}
                aria-label="LinkedIn profile"
                className="link-icons"
              >
                <Icon icon="fa-brands:linkedin" />
              </a>
            );
          })}
      {/* omit blog link altogether unless specifically needed */}
    </StyledSocialLinks>
  );
};
// #endregion

export default SocialLinks;
