"use client";

import React from "react";
import scss from "./Footer.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import { Paper, useTheme } from "@mui/material";
import Link from "next/link";
import styled from "@emotion/styled";

const Footer = () => {
  const { data: session } = useSession();
  const theme = useTheme();

  const FooterLink = styled(Link)`
    color: ${theme.palette.text.primary};
  `;

  return (
    <footer className={scss.footer}>
      <Paper
        sx={{
          width: "100%",
          backgroundColor:
            theme.palette.mode === "dark" ? "#1e1e1e" : "#f5f5f5",
          borderTop: `1px solid ${theme.palette.mode === "dark" ? "#333" : "#e0e0e0"}`,
        }}
      >
        <ul role="menu">
          <li>
            <FooterLink href="/dashboard">Home</FooterLink>
          </li>
          <li>
            <FooterLink href="/dashboard/data">Data</FooterLink>
          </li>
          <li>
            <FooterLink href="/dashboard/profile">Profile</FooterLink>
          </li>
          <li>
            <FooterLink href="/dashboard/settings">Settings</FooterLink>
          </li>
          {/* <li>
            <FooterLink href="/termsconditions">Terms & Conditions</FooterLink>
          </li>
          <li>
            <FooterLink href="/accessibilitystatement">
              Accessibility statement
            </FooterLink>
          </li> */}
          <li>
            <Button
              variant="text"
              color={session ? "error" : "success"}
              onClick={session ? () => signOut() : () => signIn()}
            >
              {session ? "Sign Out" : "Sign In"}
            </Button>
          </li>
        </ul>
      </Paper>
    </footer>
  );
};
export default Footer;
