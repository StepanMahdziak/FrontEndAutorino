import React from 'react'

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {Github, Instagram, Linkedin} from "grommet-icons"
import { WHITE } from "../styles/colors";

const IconSection = styled.div`
  width: 20%;
  margin-right: 2em;
  padding-right: 1.5em;
  display: grid;
  justify-content: right;
  grid-template-columns: auto auto auto;
  grid-gap: 2em;
`;
const FooterIconLink = styled.a`
  width: 2em;
`;
export const FooterSocial = () => (
    <IconSection>
        <FooterIconLink href="https://github.com/StepanMahdziak">
            <Github color={WHITE} size="large" />
          </FooterIconLink>
          <FooterIconLink href="https://instagram.com/stepan_mahdziak?utm_source=ig_profile_share&igshid=8omoqraa134z">
            <Instagram color={WHITE} size="large" />
          </FooterIconLink>

          <FooterIconLink href="https://www.linkedin.com/in/stepan-mahdziak-416989177/">
            <Linkedin color={WHITE} size="large" />
          </FooterIconLink>
    </IconSection>
)