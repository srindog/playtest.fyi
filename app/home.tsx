"use client";
import { useRef } from "react";

import { useState } from "react";

const PLAYTESTERS = "For Playtesters";
const COMPANIES = "For Companies";

const Card = ({ title, description, children }: any) => (
  <div className="flex flex-col shadow p-5 rounded text-left">
    <h3 className="flex justify-center font-semibold md:text-lg text-base pb-1">
      {title}
    </h3>
    {children}
  </div>
);

const BASE_BUTTON_STYLE = "mt-2 p-3 items-center";
const UNSELECTED_BUTTON_STYLE = (rounded: string) =>
  `${BASE_BUTTON_STYLE} ${rounded} bg-gray-200 hover:bg-gray-300 active:bg-gray-200`;
const SELECTED_BUTTON_STYLE = (rounded: string) =>
  `${BASE_BUTTON_STYLE} ${rounded} bg-lime-400 hover:bg-lime-300 active:bg-lime-400`;

function HowItWorks() {
  const [toggle, setToggle] = useState(COMPANIES);
  return (
    <>
      <div className="flex flex-row justify-center">
        <button
          className={
            toggle === COMPANIES
              ? SELECTED_BUTTON_STYLE("rounded-l")
              : UNSELECTED_BUTTON_STYLE("rounded-l")
          }
          onClick={() => setToggle(COMPANIES)}
        >
          {COMPANIES}
        </button>
        <button
          className={
            toggle === PLAYTESTERS
              ? SELECTED_BUTTON_STYLE("rounded-r")
              : UNSELECTED_BUTTON_STYLE("rounded-r")
          }
          onClick={() => setToggle(PLAYTESTERS)}
        >
          {PLAYTESTERS}
        </button>
      </div>
      <div className="mx-10 mt-5 grid md:grid-cols-3 sm:grid-cols-1 gap-5">
        {toggle === COMPANIES ? (
          <>
            <Card title="Plan">
              Strategically plan out the requirements of your playtest
              (location, timeline, consumer breakdown, additional questions,
              etc…)
            </Card>
            <Card title="Run Playtest">
              Select your playtesters, ship out the products (and return
              labels), and view the playtest reviews in real time. Once the
              playtest ends, we will ensure that your products are returned.
            </Card>
            <Card title="Analyze">
              Filter & analyze quantitative (average ratings) & qualitative
              measures (open ended questions) across one or all of your
              playtests to uncover key insights. For custom analysis, export the
              data to use in your own systems.
            </Card>
          </>
        ) : (
          <>
            <Card title="Apply Instantly">
              Once you are an eligible playtester for a sport, immediately apply
              for any related playtest. If it is your first time applying to
              playtest in a new sport, you will be verified & onboarded shortly
              after, so you can start playtesting right away
            </Card>
            <Card title="Test">
              Upon being selected for a playtest, the product and a return label
              will be shipped, and you will receive a form to submit your
              feedback by the deadline.
            </Card>
            <Card title="Earn climeibility">
              Your honest feedback is valuable, so the more playtests you
              complete successfully, the more likely you will be chosen in
              future playtests.
            </Card>
          </>
        )}
      </div>
    </>
  );
}

export default function Home() {
  const [toggle, setToggle] = useState(COMPANIES);
  const playtestsSignUpRef = useRef(null);
  const scrollToPlaytestsSignUp = () =>
    playtestsSignUpRef.current?.scrollIntoView({ behavior: "smooth" });
  return (
    <div className="flex py-24 border-b-2 justify-center items-center">
      <div className="flex flex-col text-center">
        <div className="flex flex-row justify-center">
          <button
            className={
              toggle === COMPANIES
                ? SELECTED_BUTTON_STYLE("rounded-l")
                : UNSELECTED_BUTTON_STYLE("rounded-l")
            }
            onClick={() => setToggle(COMPANIES)}
          >
            {COMPANIES}
          </button>
          <button
            className={
              toggle === PLAYTESTERS
                ? SELECTED_BUTTON_STYLE("rounded-r")
                : UNSELECTED_BUTTON_STYLE("rounded-r")
            }
            onClick={() => setToggle(PLAYTESTERS)}
          >
            {PLAYTESTERS}
          </button>
        </div>

        <div className="flex flex-col mt-6 items-center justify-center">
          {toggle === COMPANIES ? (
            <>
              <h1 className="font-semibold md:text-3xl text-2xl">
                A product testing platform for
                <p>
                  <span className="text-lime-500">
                    sports equipment brands
                  </span>
                </p>
              </h1>

              <div className="flex flex-col mt-6">
                <label className="font-semibold">
                  Testing out a new product?
                </label>
                <a
                  href="https://forms.gle/VbbEth7kiT2AoY56A"
                  target="_blank"
                  className="mt-2 p-3 bg-lime-400 hover:bg-lime-300 active:bg-lime-400 rounded"
                >
                  Sign up to run a playtest!
                </a>
              </div>
            </>
          ) : (
            <>
              <h1 className="font-semibold md:text-3xl text-2xl">
                Test out the newest
                <p>
                  <span className="text-lime-500">
                    sports equipment
                  </span>
                </p>
              </h1>
              <div className="flex flex-col mt-6">
                <label className="font-semibold">
                  Interested in product testing?
                </label>
                <button
                  className="mt-2 p-3 bg-lime-400 hover:bg-lime-300 active:bg-lime-400 rounded"
                  onClick={scrollToPlaytestsSignUp}
                >
                  👇 Apply for a playtest below 👇
                </button>
              </div>
            </>
          )}
        </div>
        <h3 className="mt-7 pb-10 border-b-2">
          Questions?
          <p className="font-semibold">support@playtest.fyi</p>
        </h3>

        <div className="flex flex-col mt-10 items-center justify-center">
          {toggle === COMPANIES ? (
            <>
              
            </>
          ) : (
            <>
              <h2  className="font-semibold md:text-3xl text-2xl">
                Playtests
              </h2>
              <p ref={playtestsSignUpRef} className="mt-3">Coming soon...</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
