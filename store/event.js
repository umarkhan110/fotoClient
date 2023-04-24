import axios from "axios";
import { makeObservable, observable, action } from "mobx";

import { Booked } from "./tracking";
import post_query from "../actions/post_query";
import patch_query from "../actions/patch_query";

import { getApiHost } from "../constants/url";

const BASE_URL = getApiHost();

class Event {
  state = {
    events: [],
    event: null,
    slot: null,
    loading: false,
    // confirmedEvent: {
    //   client_number: "res.data.client_number",
    //   date: "this.state.event.event_date",
    //   slot: "this.state.slot.time",
    //   location: "this.state.event.location.name",
    //   email: "clientData.email",
    // },
    confirmedEvent: null,
    error: {
      bookingForm: "",
      shootLimit: false,
    },
  };

  constructor() {
    makeObservable(this, {
      state: observable,
      getEvents: action,
      getEvent: action,
      setEvent: action,
      setSlot: action,
      createBooking: action,
      phoneExits: action,
      emailExists: action,
      updateClient: action,
      createClient: action,
      createShoot: action,
      getExistingClientForEvent: action,
      removeError: action,
      removeConfirm: action,
    });
  }

  getEvents = async () => {
    this.state.loading = true;

    const res = await axios.get(`${BASE_URL}/events/query/`);

    if (res.status === 200) {
      this.state.events = res.data;
      this.state.loading = false;
      return res.data;
    } else {
      // this.state.error = res.response.data;
      this.state.loading = false;

      return [];
    }
  };

  getEvent = async (city, date) => {
    this.state.loading = true;

    const events_by_date = await axios.get(
      `${BASE_URL}/events/query/?event_date=${date}`,
    );

    const event = events_by_date.data.find(
      (x) =>
        x.location?.city?.name?.toLowerCase() ===
          city.toLowerCase().replaceAll("-", " ") ||
        x.location?.city?.name?.toLowerCase() === city.toLowerCase(),
    );

    if (event) {
      this.state.event = event;
      this.state.loading = false;
    } else {
      this.state.loading = false;
    }
  };

  setEvent = (event) => {
    this.state.event = event;
  };

  setSlot = (slot) => {
    this.state.slot = slot;
  };

  emailExists = async (email) => {
    try {
      const res = await axios.get(`${BASE_URL}/users/clients/?email=${email}`);
      if (!(res.status === 200 && res.data.length === 0)) {
        return res.data[0].id;
      } else {
        return null;
      }
    } catch (err) {
      return null;
    }
  };

  phoneExits = async (phone) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/users/clients/?phone_number__icontains=${phone.replace(
          "+",
          "",
        )}`,
      );

      const data = res.data.find((x) => x.phone_number === phone);

      if (res.status === 200 && data) {
        return data.id;
      } else {
        return null;
      }
    } catch (err) {
      return null;
    }
  };

  updateClient = async (id, data) => {
    const res = await patch_query(`/users/clients/`, data, id);
    console.log(res);
    if (res.status === 200) {
      console.log(res);
      return res.data;
    } else {
      this.state.error.bookingForm = "Please enter all details";
      return null;
    }
  };

  createClient = async (data) => {
    const res = await post_query(`/users/clients/`, data);
    if (res.status === 201) {
      console.log(res);
      return res.data;
    } else {
      this.state.error.bookingForm = "Please enter all details";
      return null;
    }
  };

  createShoot = async (data) => {
    const res = await post_query(`/events/shoots/`, data);
    if (res.status === 201) return res.data;
    else {
      this.state.error.bookingForm = "Please enter all details";
      return null;
    }
  };

  getExistingClientForEvent = async (event, client) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/events/shoots/?event=${event}&client=${client}`,
      );
      return res.data.length > 0;
    } catch (err) {
      return false;
    }
  };

  createBooking = async (clientData) => {
    // this.state.loading = true;

    // delete clientData.number;
    // delete clientData.code;

    // const res = await post_query(`/events/book/`, {
    //   client_info: clientData,
    //   slot_number: this.state.slot.id,
    //   event: this.state.event.id,
    // });

    // console.log(res);

    // if (res.status === 400) {
    //   this.state.loading = false;
    //   if (res.data.error.value === 5) this.state.error.shootLimit = true;
    //   else this.state.error.bookingForm = res.data.error.value;
    // }

    // if (res.status === 200 || res.status === 201) {
    //   Booked(
    //     res.client,
    //     res.data.client_number,
    //     this.state.event.location.city.name,
    //     this.state.event.location.postal_code,
    //   );

    //   this.state.loading = false;
    //   this.state.confirmedEvent = {
    //     client_number: res.data.client_number,
    //     date: this.state.event.event_date,
    //     slot: this.state.slot.time,
    //     location: this.state.event.location.name,
    //     email: clientData.email,
    //     client_id: res.data.client.id,
    //   };
    // }

    // return res.data;

    this.state.loading = true;
    const userWithEmail = await this.emailExists(clientData.email);
    const userWithPhone = await this.phoneExits(clientData.phone_number);

    var client;

    if (userWithEmail) {
      client = await this.updateClient(userWithEmail, clientData);
    } else if (userWithPhone) {
      client = await this.updateClient(userWithPhone, clientData);
    } else {
      client = await this.createClient(clientData);
    }

    console.log(client);

    if (client) {
      const clientExistsInEvent = await this.getExistingClientForEvent(
        this.state.event.id,
        client.id,
      );
      if (clientExistsInEvent) {
        this.state.error.shootLimit = true;
        this.state.loading = true;
      } else {
        const shoot = await this.createShoot({
          slot_number: this.state.slot.id,
          event: this.state.event.id,
          client: client.id,
        });

        Booked(
          client,
          shoot.client_number,
          this.state.event.location.city.name,
          this.state.event.location.postal_code,
        );

        this.state.confirmedEvent = {
          client_number: shoot.client_number,
          date: this.state.event.event_date,
          shot: this.state.slot.time,
          location: this.state.event.location.name,
          email: client.email,
        };
        this.state.loading = false;
      }
    } else {
      this.state.error.bookingForm = "An error occured while creating booking";
      this.state.loading = false;
    }
  };

  removeError = () => {
    this.state.error = {
      bookingForm: "",
      shootLimit: false,
    };
  };

  removeConfirm = () => {
    this.state.confirmedEvent = null;
    this.state.slot = null;
    this.state.event = null;
  };
}

export const EventStore = new Event();
