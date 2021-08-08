import { Link } from "react-router-dom";
import React from "react";
import { sponsors } from "../../repository/mockData";
import { Card, CardActionArea } from "@material-ui/core";

const Sponsors = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#F8F8F8",
        marginTop: "10vh",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {sponsors.map((sponsor, index) => (
          <Card key={index} style={{ padding: 10, margin: 10 }}>
            {" "}
            <CardActionArea>
              <Link to={{pathname: sponsor.url}} target="_blank"style={{ width: "100%", height: "100%" }}>
                <img
                  src={sponsor.imageUrl}
                  alt={sponsor.name}
                  style={{ width: "15vw", height: "13vh" }}
                />
              </Link>{" "}
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
