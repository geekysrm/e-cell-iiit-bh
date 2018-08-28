import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const EventCard = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Launch Event</CardTitle>
          <CardSubtitle>30 Aug, 2018.</CardSubtitle>
        </CardBody>
        <img
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
        />
        <CardBody>
          <CardText>
            The official launch of E Cell of IIIT Bhubaneswar. See you all
            there!
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default EventCard;
