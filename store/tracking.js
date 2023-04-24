import axios from "axios";

const getUserInfo = async () => {
  // const res = await axios.get(`https://geolocation-db.com/json/`);
  const res = await axios.get(`https://api.country.is`);
  return {
    // ...res.data,
    // state: res.data.state ? res.data.state.replace(" Region", "") : "",
    ip_address: res.data.ip,
    client_country: res.data.country,
  };
};

const pushToDataLayer = async (data) => {
  const res = await getUserInfo();
  try {
    console.log({ ...res, ...data });
    window.dataLayer.push({ ...res, ...data });
  } catch (err) {}
};

const pushToPosthog = async (event, data) => {
  const res = await getUserInfo();
  window.posthog.capture(event, { ...res, data });
};

export const CityClick = async (city) => {
  pushToDataLayer({ event: "click_on_city", photostudio_city: city });
};

export const TimeSlotClick = async (city, time, zip) => {
  pushToDataLayer({
    event: "click_on_timeslot",
    timeslot: time,
    photostudio_city: city,
    photostudio_zip: zip,
  });
};

export const CloseBooking = async () => {
  pushToDataLayer({ event: "unfinished_booking" });
  pushToPosthog("booking-closed", {});
};

export const CloseBookingWithReason = async (reason) => {
  pushToDataLayer({ event: "unfinished_booking", reason: reason });
  pushToPosthog("booking-closed", { reason: reason });
};

export const Booked = async (client, client_number, city, zip) => {
  const client_data = {
    client_unique_id: client.id,
    client_first_name: client.first_name,
    client_last_name: client.last_name,
    client_email: client.email,
    client_phone: client.phone_number,
    client_city: client.city,
    client_postal_code: client.postal_code,
    client_street_name: client.street_name,
    client_street_number: client.street_number,
  };
  pushToDataLayer({
    ...client_data,
    client_number: client_number,
    photostudio_city: city,
    photostudio_zip: zip,
    event: "Schedule",
  });
  pushToPosthog("booking-successful", {
    ...client,
    client_number: client_number,
  });
};

export const ClientRegistered = async (client) => {
  pushToDataLayer({ ...client, event: "Lead" });
};

export const ClientShared = async (sharedEvent) => {
  pushToDataLayer({ event: "event_socialshare", ...sharedEvent });
};

export const ViewContent = async () => {
  pushToDataLayer({ event: "ViewContent" });
};

export const BottomScroll = async () => {
  pushToDataLayer({ event: "ScrollToBottom" });
};
