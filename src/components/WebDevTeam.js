import * as React from "react";
import Box from "@mui/material/Box";
import MemberCard from "./MemberCard";
import { Grid } from "@mui/material";

import CHIRAG_SHELAR from "../assets/Team/CHIRAG_SHELAR.jpeg";
import AMANPREET_BAINS from "../assets/Team/AMANPREET_BAINS.jpg";
import NISHTHA_SAINGER from "../assets/Team/NISHTHA_SAINGER.webp";
import ASAVARI_AMBAVANE from "../assets/Team/ASAVARI_AMBAVANE.webp";
import DARSH_BAVISHI from "../assets/Team/DARSH_BAVISHI.webp";
import CHAITRAVI_CHALKE from "../assets/Team/CHAITRAVI_CHALKE.webp";

export default function WebDevTeam() {
  return (
    <Box sx={{ maxWidth: "1300px", margin: "0 auto" }} data-aos="fade-up">
      <center>
        <p style={{ marginBottom: "1.2rem" }}>
          Backend for the website contributed by{" "}
          <a
            href="https://communityofcoders.in/"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "green",
              fontSize: "1.2rem",
              fontWeight: "strong",
            }}
          >
            Community of Coders, VJTI
          </a>{" "}
          💚
        </p>
      </center>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item md>
          <MemberCard
            color="orange"
            name="Asavari Ambavane"
            img={ASAVARI_AMBAVANE}
            type="web"
            link="https://www.linkedin.com/in/asavariambavane/"
            git="https://github.com/AsavariA"
          />
        </Grid>
        <Grid item md>
          <MemberCard
            color="orange"
            name="Darsh Bavishi"
            img={DARSH_BAVISHI}
            type="web"
            link="https://www.linkedin.com/in/darsh-bavishi-026b50118/"
            git="https://github.com/DarshBavishi"
          />
        </Grid>
        <Grid item md>
          <MemberCard
            color="orange"
            name="Nishtha Sainger"
            img={NISHTHA_SAINGER}
            type="web"
            link="https://www.linkedin.com/in/nishtharsainger/"
            git="https://github.com/Nishtha2709"
          />
        </Grid>
        <Grid item md>
          <MemberCard
            color="orange"
            name="Chaitravi Chalke"
            img={CHAITRAVI_CHALKE}
            type="web"
            link="https://www.linkedin.com/in/chaitravi-chalke-6b4806190/"
            git="https://github.com/chaitravi-ce"
          />
        </Grid>
        <Grid item md>
          <MemberCard
            color="orange"
            name="Chirag Shelar"
            img={CHIRAG_SHELAR}
            type="web"
            link="https://www.linkedin.com/in/chiragshelar/"
            git="https://github.com/ChiragShelar"
          />
        </Grid>
        <Grid item md>
          <MemberCard
            color="orange"
            name="Amanpreet Bains"
            img={AMANPREET_BAINS}
            type="web"
            link="https://www.linkedin.com/in/amanpreet-bains-939ba5227/"
            git=""
          />
        </Grid>
      </Grid>
    </Box>
  );
}
