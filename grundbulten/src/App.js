import React from "react";
import "./App.css";
import {
  Wrapper,
  MainHeading,
  Vertical,
  Horizontal,
  Offer,
  MicroBlogIcon,
  OfferType,
  DevelopmentIcon,
  SecurityIcon,
  CoffeeIcon,
  BoatIcon,
  Header,
  Lead
} from "@kokitotsos/react-components";

const competence = {
  frontend: ["React / Vue / Angular", "npm", "JAM Stack", "HTML", "CSS"],
  cloud: [
    "Cloud-certifiering",
    "Skalning",
    "Swagger",
    "Lastbalansering",
    "Parallellism"
  ],
  security: [
    "OWASP Top 10",
    "Exfiltration",
    "Process Injection",
    "Lateral Movement",
    "oauth2"
  ],
  grund2: [
    "CI / CD Pipelines",
    "Event Sourcing",
    "Serverless",
    "Kubernetes",
    "SOLID",
    "AWS / Azure / GCP",
    "Bash",
    "Presentationsteknik",
    "Eventual Consistency",
    "Kravhantering"
  ],
  grund1: [
    "IDE (IntelliJ, VS Code eller liknande)",
    `Läs "The Pragmatic Programmer"`,
    "Byggsystem (maven, npm scripts, make etc.)",
    "Git",
    "Scrum",
    "Docker",
    "SQL",
    "Enhetstester",
    "Linuxvana"
  ]
};

const styles = {
  mainHeading: {
    marginBottom: "30px",
    marginTop: "100px"
  },
  boxStyle: {
    marginTop: "70px"
  }
};

function App() {
  return (
    <Wrapper>
      <Header links={[]}></Header>
      <MainHeading style={styles.mainHeading}>Kompetens</MainHeading>
      <Lead>
        Börja på botten och gå uppåt, använd listorna för att identifiera ämnen
        du känner dig osäker på. Arrangera workshops för att styrka dessa.
      </Lead>
      <Vertical>
        <Horizontal
          style={{ height: "200px", justifyContent: "space-between" }}
        >
          <Offer
            icon={<CoffeeIcon />}
            heading="Frontend"
            type={OfferType.Type1}
            style={styles.boxStyle}
          >
            <ul>
              {competence.frontend.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </Offer>
          <Offer
            icon={<BoatIcon />}
            heading="Cloud & Backend"
            type={OfferType.Type2}
            style={styles.boxStyle}
          >
            <ul>
              {competence.cloud.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </Offer>
          <Offer
            icon={<SecurityIcon />}
            heading="Security"
            type={OfferType.Type3}
            style={styles.boxStyle}
          >
            <ul>
              {competence.security.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </Offer>
        </Horizontal>
        <Offer
          icon={<DevelopmentIcon />}
          heading="Fortsättning"
          type={OfferType.Type4}
          style={{ ...styles.boxStyle, marginTop: "230px" }}
        >
          <h4>
            Du som är bekväm med grunderna men vill ta din konsultnivå upp ett
            steg
          </h4>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <ul>
              {competence.grund2.slice(0, 5).map(item => (
                <li>{item}</li>
              ))}
            </ul>
            <ul>
              {competence.grund2.slice(5, 10).map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </Offer>
        <Offer
          style={styles.boxStyle}
          icon={<MicroBlogIcon />}
          heading="Grund"
          type={OfferType.Type1}
        >
          <h4>
            För att vara bekväm med att börja ett uppdrag hos kund är här
            förslag på ämnen som är bra att känna till
          </h4>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <ul>
              {competence.grund1.slice(0, 5).map(item => (
                <li>{item}</li>
              ))}
            </ul>
            <ul>
              {competence.grund1.slice(5, 10).map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </Offer>
      </Vertical>
    </Wrapper>
  );
}

export default App;
