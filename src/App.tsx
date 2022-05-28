import React from "react";
import { Router } from "react-router-dom";
import { History } from "history";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const MapLink = ({ address }: { address: string }) => {
  return (
    <a
      style={{ textDecoration: "none" }}
      href={`https://maps.google.com/?q="${address}"`}
    >
      <a
        style={{ textDecoration: "none" }}
        href={`https://maps.apple.com/maps?q="${address}"`}
      >
        <p style={{ fontSize: 16, color: "#fff", margin: "2px 0px" }}>
          {address}
        </p>
      </a>
    </a>
  );
};

function App({
  history,
  sessionData,
}: {
  history: History<unknown>;
  sessionData;
}) {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        contentStyle={{ background: "#809DBD", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #809DBD" }}
        iconStyle={{ background: "#809DBD", color: "#fff" }}
      >
        <h3 style={{ fontSize: 24, color: "#fff", margin: "8px 0px" }}>
          Friday Before Noon
        </h3>
        <h4 style={{ fontSize: 20, color: "#fff", margin: "4px 0px" }}>
          Pick up Suits
        </h4>
        <p style={{ fontSize: 16, color: "#fff", margin: "2px 0px" }}>
          Mens Warehouse
        </p>
        <MapLink address='4302 13th Ave S, Fargo, ND 58103' />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "#809DBD", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #809DBD" }}
        iconStyle={{ background: "#809DBD", color: "#fff" }}
      >
        <h3 style={{ fontSize: 24, color: "#fff", margin: "8px 0px" }}>
          Friday 12:00 pm - 1:00 pm
        </h3>
        <h4 style={{ fontSize: 20, color: "#fff", margin: "4px 0px" }}>
          Lunch
        </h4>
        <MapLink address='TBD' />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "#809DBD", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #809DBD" }}
        iconStyle={{ background: "#809DBD", color: "#fff" }}
      >
        <h3 style={{ fontSize: 24, color: "#fff", margin: "8px 0px" }}>
          Friday Afternoon
        </h3>

        <h4 style={{ fontSize: 20, color: "#fff", margin: "4px 0px" }}>
          Gold? Smash? Breweries? IDK
        </h4>
        <MapLink address='TBD' />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: "#809DBD", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #809DBD" }}
        iconStyle={{ background: "#809DBD", color: "#fff" }}
      >
        <h3 style={{ fontSize: 24, color: "#fff", margin: "8px 0px" }}>
          Friday 4:00 pm - 5:00 pm
        </h3>
        <h4 style={{ fontSize: 20, color: "#fff", margin: "4px 0px" }}>
          Rehearsal
        </h4>
        <p style={{ fontSize: 16, color: "#fff", margin: "2px 0px" }}>
          Plains Art Museum
        </p>
        <MapLink address='704 1st Ave N, Fargo, ND 58102' />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: "#809DBD", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #809DBD" }}
        iconStyle={{ background: "#809DBD", color: "#fff" }}
      >
        <h3 style={{ fontSize: 24, color: "#fff", margin: "8px 0px" }}>
          Friday 5:30 pm - ~8:00 pm
        </h3>
        <h4 style={{ fontSize: 20, color: "#fff", margin: "4px 0px" }}>
          Grooms Dinner
        </h4>
        <p style={{ fontSize: 16, color: "#fff", margin: "2px 0px" }}>
          Hilton Garden Inn
        </p>
        <MapLink address='4351 17th Ave S, Fargo, ND 58103' />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: "#809DBD", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #809DBD" }}
        iconStyle={{ background: "#809DBD", color: "#fff" }}
      >
        <h3 style={{ fontSize: 24, color: "#fff", margin: "8px 0px" }}>
          Saturday 9:00 am - 10:30 am
        </h3>
        <h4 style={{ fontSize: 20, color: "#fff", margin: "4px 0px" }}>
          Brunch
        </h4>
        <p style={{ fontSize: 16, color: "#fff", margin: "2px 0px" }}>
          Franks Lounge
        </p>
        <MapLink address='2640 52nd Ave S, Fargo, ND 58104' />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "#809DBD", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #809DBD" }}
        iconStyle={{ background: "#809DBD", color: "#fff" }}
      >
        <h3 style={{ fontSize: 24, color: "#fff", margin: "8px 0px" }}>
          Saturday 11:00 am - 12:30 pm
        </h3>
        <h4 style={{ fontSize: 20, color: "#fff", margin: "4px 0px" }}>
          Getting Dressed
        </h4>
        <p style={{ fontSize: 16, color: "#fff", margin: "2px 0px" }}>
          Adam's House
        </p>
        <MapLink address='6226 57th Ave S. Fargo ND, 58104' />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "#809DBD", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #809DBD" }}
        iconStyle={{ background: "#809DBD", color: "#fff" }}
      >
        <h3 style={{ fontSize: 24, color: "#fff", margin: "8px 0px" }}>
          Saturday 1:20 pm - 1:40 pm
        </h3>
        <h4 style={{ fontSize: 20, color: "#fff", margin: "4px 0px" }}>
          Groomsman Pictures
        </h4>
        <p style={{ fontSize: 16, color: "#fff", margin: "2px 0px" }}>
          Plains Art Museum
        </p>
        <p style={{ fontSize: 16, color: "#fff", margin: "2px 0px" }}>
          704 1st Ave N, Fargo, ND 58102
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "#809DBD", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #809DBD" }}
        iconStyle={{ background: "#809DBD", color: "#fff" }}
      >
        <h3 style={{ fontSize: 24, color: "#fff", margin: "8px 0px" }}>
          Saturday 1:40 pm - 3:00 pm
        </h3>
        <h4 style={{ fontSize: 20, color: "#fff", margin: "4px 0px" }}>
          Relax and Wait
        </h4>
        <p style={{ fontSize: 16, color: "#fff", margin: "2px 0px" }}>
          Plains Art Museum
        </p>
        <MapLink address='704 1st Ave N, Fargo, ND 58102' />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "#809DBD", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #809DBD" }}
        iconStyle={{ background: "#809DBD", color: "#fff" }}
      >
        <h3 style={{ fontSize: 24, color: "#fff", margin: "8px 0px" }}>
          Saturday 3:00 pm - 3:45 pm
        </h3>
        <h4 style={{ fontSize: 20, color: "#fff", margin: "4px 0px" }}>
          Ceremony
        </h4>
        <p style={{ fontSize: 16, color: "#fff", margin: "2px 0px" }}>
          Plains Art Museum{" "}
        </p>

        <MapLink address='704 1st Ave N, Fargo, ND 58102' />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "#809DBD", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #809DBD" }}
        iconStyle={{ background: "#809DBD", color: "#fff" }}
      >
        <h3 style={{ fontSize: 24, color: "#fff", margin: "8px 0px" }}>
          Saturday 3:45 pm - 4:00 pm
        </h3>
        <h4 style={{ fontSize: 20, color: "#fff", margin: "4px 0px" }}>
          Receiving Line
        </h4>
        <p style={{ fontSize: 16, color: "#fff", margin: "2px 0px" }}>
          Plains Art Museum
        </p>

        <MapLink address='704 1st Ave N, Fargo, ND 58102' />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "#809DBD", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #809DBD" }}
        iconStyle={{ background: "#809DBD", color: "#fff" }}
      >
        <h3 style={{ fontSize: 24, color: "#fff", margin: "8px 0px" }}>
          Saturday 4:30 pm - 5:30 pm
        </h3>
        <h4 style={{ fontSize: 20, color: "#fff", margin: "4px 0px" }}>
          Pictures
        </h4>
        <p style={{ fontSize: 16, color: "#fff", margin: "2px 0px" }}>
          Island Park
        </p>
        <MapLink address='302 7th St S, Fargo, ND 58103' />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "#809DBD", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #809DBD" }}
        iconStyle={{ background: "#809DBD", color: "#fff" }}
      >
        <h3 style={{ fontSize: 24, color: "#fff", margin: "8px 0px" }}>
          Saturday 5:45 pm - 6:00 pm
        </h3>
        <h4 style={{ fontSize: 20, color: "#fff", margin: "4px 0px" }}>
          Introduction at Reception
        </h4>
        <p style={{ fontSize: 16, color: "#fff", margin: "2px 0px" }}>
          Hilton Garden Inn
        </p>
        <p style={{ fontSize: 16, color: "#fff", margin: "2px 0px" }}>
          4351 17th Ave S, Fargo, ND 58103
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "#809DBD", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #809DBD" }}
        iconStyle={{ background: "#809DBD", color: "#fff" }}
      >
        <h3 style={{ fontSize: 24, color: "#fff", margin: "8px 0px" }}>
          Saturday 6:00 pm - 12:00 am
        </h3>
        <h4 style={{ fontSize: 20, color: "#fff", margin: "4px 0px" }}>
          Reception
        </h4>
        <p style={{ fontSize: 16, color: "#fff", margin: "2px 0px" }}>
          Hilton Garden Inn
        </p>
        <MapLink address='4351 17th Ave S, Fargo, ND 58103' />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "#809DBD", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #809DBD" }}
        iconStyle={{ background: "#809DBD", color: "#fff" }}
      >
        <h3 style={{ fontSize: 24, color: "#fff", margin: "8px 0px" }}>
          Sunday 7:00 am - 10:00 am
        </h3>
        <h4 style={{ fontSize: 20, color: "#fff", margin: "4px 0px" }}>
          Hotel Breakfast
        </h4>
        <p style={{ fontSize: 16, color: "#fff", margin: "2px 0px" }}>
          Hilton Garden Inn
        </p>
        <MapLink address='4351 17th Ave S, Fargo, ND 58103' />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "#809DBD", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #809DBD" }}
        iconStyle={{ background: "#809DBD", color: "#fff" }}
      >
        <h3 style={{ fontSize: 24, color: "#fff", margin: "8px 0px" }}>
          Sunday 10:00 am - 12:00 pm
        </h3>
        <h4 style={{ fontSize: 20, color: "#fff", margin: "4px 0px" }}>
          Gift Opening
        </h4>
        <p style={{ fontSize: 16, color: "#fff", margin: "2px 0px" }}>
          Hilton Garden Inn
        </p>
        <MapLink address='4351 17th Ave S, Fargo, ND 58103' />
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default App;
