import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/react";
import colors from "./colors";

const spin = keyframes`
    to{
        transform: rotate(360deg);
    }
`;

const NavBar = () => {
  const [padding] = useState(15);
  return (
    <header
      css={css`
        background-color: ${colors.dark};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: 1s ${spin} linear infinite;
          &:hover {
            text-decoration: underline;
          }
        `}
        role="img"
        aria-label="logo"
      >
        🐕
      </span>
    </header>
  );
};
export default NavBar;
