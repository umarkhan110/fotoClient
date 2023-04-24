import React, { useEffect, useState } from "react";
import Image from "next/image";

// import codes from "../../data/phone";
import Link from "next/link";

import post_query from "../../actions/post_query";
import moment from "moment";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import SEO from "../../components/SEO";
import { ViewContent } from "../../store/tracking";

const Index = () => {
  const [position, setPosition] = useState(null);
  const [card, setCard] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    dob: new Date(),
    notes: "",
  });

  const { first_name, last_name, email, dob, notes } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    post_query("/users/applicants/", {
      ...formData,
      dob: moment(dob).format("YYYY-MM-DD"),
      position: position,
    })
      .then((res) => {
        res.status === 201 ? setCard(true) : setErr(true);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    ViewContent();
  }, []);

  return (
    <>
      <SEO
        title="Join Our Team - foto-dino Career Opportunities"
        keywords="Photographer job, secretary job, designer job, career opportunities, hiring, employment, part-time, full-time, flexible hours, job requirements, qualifications, experience, skills, portfolio, resume, cover letter, interview, salary, benefits, team, culture, growth, development, training"
        description="We are looking for talented individuals to join our team and become part of our growing business. We have job opportunities for photographers, secretaries, and designers, with part-time or full-time positions and flexible hours available. If you are passionate about photography, organization or design, have the required qualifications, experience and skills, we would love to hear from you. Showcase your portfolio and apply with your resume and cover letter, and be ready for an interview. We offer a competitive salary and benefits, and a great team culture that encourages growth, development and training"
        url="https://next.foto-dino.de/job"
      />
      <main className="sm:p-20 p-10">
        {card && <Card />}

        {position ? (
          <>
            <p className="text-3xl font-bold font-oswald">Job Application</p>
            <p className="my-2">Please completer the form below</p>
            <form
              onFocus={() => setErr(false)}
              onSubmit={(e) => onSubmit(e)}
              className="grid md:grid-cols-2 grid-cols-1 gap-2 sm:text-base text-sm">
              <input
                type="text"
                placeholder="First Name"
                className="border-[1px] border-light-grey px-4 py-2 outline-none"
                name="first_name"
                value={first_name}
                onChange={onChange}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-[1px] border-light-grey px-4 py-2 outline-none"
                name="last_name"
                value={last_name}
                onChange={onChange}
              />
              <label
                type="text"
                className="border-[1px] border-light-grey px-4 py-2 outline-none flex justify-between">
                <p>Date of birth</p>
                <input
                  type="date"
                  className="outline-none"
                  name="dob"
                  value={dob}
                  onChange={onChange}
                />
              </label>
              <input
                type="email"
                placeholder="Email"
                className="border-[1px] border-light-grey px-4 py-2 outline-none"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
              <div className="flex gap-2">
                {/* <select className="border-[1px] border-light-grey px-4 py-2 outline-none cursor-pointer">
                {codes.map((i) => (
                  <option>
                    {i.code} ({i.dial_code})
                  </option>
                ))}
              </select> */}
                <input
                  placeholder="Phone"
                  className="border-[1px] border-light-grey px-4 py-2 outline-none flex-1"
                />
              </div>

              <input
                type="text"
                placeholder="Zip"
                className="border-[1px] border-light-grey px-4 py-2 outline-none"
              />
              <input
                type="text"
                placeholder="City"
                className="border-[1px] border-light-grey px-4 py-2 outline-none"
              />
              <div className="border-[1px] border-light-grey px-4 py-2 outline-none flex gap-2">
                <label className="flex-1">Car</label>
                <input type="radio" id="yes1" name="car" value="yes" />
                <label htmlFor="yes1">Yes</label>
                <input type="radio" id="no1" name="car" value="no" />
                <label for="no1">No</label>
              </div>
              <div className="border-[1px] border-light-grey px-4 py-2 outline-none flex items-center gap-2">
                <label className="flex-1">License </label>
                <input type="radio" id="yes2" name="car" value="yes" />
                <label htmlFor="yes2">Yes</label>
                <input type="radio" id="no2" name="car" value="no" />
                <label htmlFor="no2">No</label>
              </div>
              <textarea
                placeholder="Why should we hire you?"
                className="resize-none h-32 border-[1px] border-light-grey px-4 py-2 outline-none md:col-span-2"
                name="notes"
                value={notes}
                onChange={onChange}
              />
              {err && (
                <p className="text-red text-center md:col-span-2 font-bold">
                  Please enter correct data
                </p>
              )}
              <p className="md:col-span-2">
                By giving my email and phono number, I allow FotoDino to send me
                messages or call me.
              </p>
              <div>
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  value="agree"
                  required
                />
                <label htmlFor="agree" className="font-oswald ml-1">
                  I agree to FotoDino{" "}
                  <Link href="/terms" className="text-blue">
                    Terms and Conditions
                  </Link>
                </label>
              </div>
              {loading ? (
                <button
                  type="button"
                  className="bg-yellow font-oswald justify-self-end w-32 py-3 rounded">
                  <AiOutlineLoading3Quarters className="mx-auto animate-spin" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-yellow font-oswald justify-self-end w-32 py-2 rounded">
                  Send Application
                </button>
              )}
            </form>
          </>
        ) : (
          <>
            <p className="text-center sm:text-3xl text-2xl sm:mb-10 mb-5 font-oswald">
              Please select your desired position
            </p>
            <article className="flex gap-2 justify-center flex-wrap">
              <section className="w-72 sm:h-96 h-48 relative">
                <Image
                  src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010_960_720.jpg"
                  width={500}
                  height={500}
                  className="absolute object-cover h-full w-full rounded"
                  alt="photographer"
                />
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd0M1sZLmAkipNCDAYCVJ6M3MpKAnJl0zA1tglyNw-8KqND-g/viewform"
                  target="_blank"
                  rel="noreferrer">
                  <button className="bg-black/40 rounded h-full w-full relative flex items-center justify-center">
                    <p className="relative drop-shadow-lg text-yellow mx-5 font-bold sm:text-4xl text-2xl">
                      I am a Photographer
                    </p>
                  </button>
                </a>
              </section>

              <section className="w-72 sm:h-96 h-48 relative">
                <Image
                  src="https://cdn.pixabay.com/photo/2017/04/03/17/42/secretary-2199013_960_720.jpg"
                  width={500}
                  height={500}
                  className="absolute object-cover h-full w-full rounded"
                  alt="secretary"
                />
                <button
                  onClick={() => setPosition("secretary")}
                  className="bg-black/40 rounded h-full w-full relative flex items-center justify-center">
                  <p className="relative drop-shadow-lg text-yellow mx-5 font-bold sm:text-4xl text-2xl">
                    I am a Sectretary
                  </p>
                </button>
              </section>

              <section className="w-72 sm:h-96 h-48 relative">
                <Image
                  src="https://cdn.pixabay.com/photo/2020/10/08/14/39/man-5638146_960_720.jpg"
                  width={500}
                  height={500}
                  className="absolute object-cover h-full w-full rounded"
                  alt="designer"
                />
                <button
                  onClick={() => setPosition("designer")}
                  className="bg-black/40 rounded h-full w-full relative flex items-center justify-center">
                  <p className="relative drop-shadow-lg text-yellow mx-5 font-bold sm:text-4xl text-2xl">
                    I am a Designer
                  </p>
                </button>
              </section>
            </article>
          </>
        )}
      </main>
    </>
  );
};

export default Index;

const Card = () => {
  return (
    <section className="fixed left-0 z-50 bg-black/30 w-full h-full top-0 flex items-center justify-center">
      <div className="sm:w-[500px] w-[90%] sm:h-96 sm:pb-0 pb-5 bg-white rounded-3xl text-center">
        <div className="bg-blue sm:h-36 sm:py-0 py-5 rounded-3xl relative flex items-center justify-center">
          <Image
            src="https://foto-dino.de/assets/images/star-bg.png"
            width={500}
            height={500}
            alt="background"
            className="h-full object-cover absolute rounded-3xl"
          />
          <h1 className="text-white sm:text-6xl text-3xl font-cursive">
            Thank you
          </h1>
        </div>

        <div className="sm:mt-20 mt-5">
          <p className="sm:text-xl text-lg font-bold">
            Your application was submitted
          </p>
          <p className="sm:text-base text-sm">We will contact you soon :)</p>
          <Link href="/">
            <button className="bg-yellow rounded-lg py-2 px-4 sm:mt-10 mt-5 sm:text-base text-sm">
              Homepage
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
