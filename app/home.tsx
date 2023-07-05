"use client";
import { useState } from "react";


const PLAYTESTERS = "For Playtesters";
const COMPANIES = "For Companies";

const Card = ({ title, description, children }: any) => (
  <div className="flex flex-col shadow p-5 rounded text-left outline-2 outline-lime-400">
    <h3 className="flex justify-center font-semibold md:text-lg text-base pb-1">
      {title}
    </h3>
    {children}
  </div>
);

const BASE_BUTTON_STYLE = "mt-2 p-3 items-center";
const UNSELECTED_BUTTON_STYLE = (rounded: string) =>
  `${BASE_BUTTON_STYLE} ${rounded} bg-gray-200 hover:bg-gray-300 active:bg-gray-200 shadow`;
const SELECTED_BUTTON_STYLE = (rounded: string) =>
  `${BASE_BUTTON_STYLE} ${rounded} bg-lime-400 hover:bg-lime-300 active:bg-lime-400 shadow`;

const Support = () => (
  <h3>
    Questions?
    <p className="font-semibold">support@playtest.fyi</p>
  </h3>
)
  
const Guarantee = () => (
  <h3>We know you&apos;ll love playtest.fyi as much as we do. 
    In fact, if for any reason you&apos;re not completely satisfied, we&apos;ll issue a full refund 💸.
  </h3>
)

const PlaytestersHome = () => {
  return (
    <div className="flex flex-col mt-6 space-y-6 pb-10 items-center justify-center">
      <div>
        <h1 className="font-semibold md:text-3xl text-2xl">
          Test out the newest
          <p>
            <span className="text-lime-500">
              sports equipment
            </span>
          </p>
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <label className="font-semibold">
          Invite only. Have a referral?
        </label>
        <a
          href="https://forms.gle/Ve5CEw3DVN68AfCo9"
          target="_blank"
          className={SELECTED_BUTTON_STYLE('rounded')}
        >
          Sign up to be a playtester!
        </a>
      </div>
    </div>
  )
}

const CompaniesHome = () => (
  <div className="flex flex-col space-y-7 mt-7 items-center justify-center pb-10">
      <div>
        <h1 className="font-semibold md:text-3xl text-2xl">
          A product testing platform for
          <p>
            <span className="text-lime-500">
              sports brands
            </span>
          </p>
        </h1>
      </div>
      
      <div className="flex flex-col mt-7 items-center">
        <label className="font-semibold">
          Testing out a new product?
        </label>
        <a
          href="https://forms.gle/VbbEth7kiT2AoY56A"
          target="_blank"
          className={SELECTED_BUTTON_STYLE('rounded')}
        >
          Sign up to run a playtest!
        </a>
      </div>
      {/* <div className="mt-6">
        <Support />
      </div> */}

      <div className="md:mx-72 mx-5 mt-6 font-semibold border-lime-400 border-2 p-3">
        <Guarantee />
      </div>

    <div className="mt-10 md:mx-24 mx-5 grid md:grid-cols-3 grid-cols-1 gap-5">
      <Card title="Verified Playtesters ✅">
        Every playtester is verified to ensure
        that they consistently play the sport 
        at their submitted skill level.
      </Card>
      <Card title="No-Hassle Sign Up 📝">
        Start the playtesting process today. After signing up,
        we&apos;ll schedule a call to gather your requirements
        and go to work.
      </Card>
      <Card title="Powerful, Real-Time Insights 🔎">
        Analyze playtest reviews as they are submitted by skill level, 
        player attributes, aggregate ratings, and more. You&apos;ll be able 
        to export this data to use for custom analysis. 
      </Card>

    </div>

  </div>
)


export default function Home() {
  const [toggle, setToggle] = useState(COMPANIES);
  return (
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

      {toggle === COMPANIES ? (
        <CompaniesHome />
      ) : (
        <PlaytestersHome />
      )}
    </div>
  )
}
