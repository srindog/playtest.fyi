"use client";
import { useState } from "react";
import { Player } from '@lottiefiles/react-lottie-player';

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

const BASE_BUTTON_STYLE = "p-3 items-center";
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
    <div className="flex flex-col mt-6 space-y-6 pb-10 items-center justify-center mx-4">
      <div>
        <h1 className="font-semibold md:text-3xl text-2xl">
          Your feedback is the {' '}
          <p>
            <span className="text-lime-600">
              most valuable
            </span>
          </p>
          <h2 className="mt-3 md:text-lg text-base">Test out the {' '}
            <span className="text-lime-600 font-semibold">
              newest products in sports
            </span>
          </h2>
          
        </h1>

        
      </div>

      <div className="flex flex-col items-center">
        <label className="font-semibold">
          Invite only 🎉. Have a referral?
        </label>
        <a
          href="https://forms.gle/Ve5CEw3DVN68AfCo9"
          target="_blank"
          className={SELECTED_BUTTON_STYLE('rounded') + ' mt-2'}
        >
          Sign up today!
        </a>
      </div>
      <div className="mt-10 md:mx-10 mx-4 grid md:grid-cols-3 grid-cols-1 gap-5">
        <Card title="Get Verified ✅">
          After sign up, we verify all our playtesters to accurately
          gauge their skill level, consistency of play, & community influence.
        </Card>
        <Card title="Earn Rewards 🏅">
          Earn rewards for reviewing the newest products in the industry.
          Based on your playtest history & community influence, you&apos;ll be 
          able to earn a variable amount of rewards. Even earn bonuses from posting
          on social media / or a video review!
        </Card>
        <Card title="Save on Future Purchases 💸">
          Using your rewards, we&apos;ll reimburse you for future sports-related purchases you make, 
          or, if you prefer, cash out directly.
        </Card>
      </div>
    </div>
  )
}

const CompaniesHome = () => (
  <div className="flex flex-col mt-5 md:px-16 mx-3 pb-10">
    <div className="flex md:flex-row flex-col md:space-x-52 space-x-0 md:space-y-0 sm:space-y-5 md:text-left md:justify-left items-center justify-center">
      
      <div className="space-y-7 md:pl-20 pl-0">
        <div>
          <h1 className="font-semibold md:text-3xl text-2xl">
            Build better products <p>for the <span className="text-lime-600">sports industry</span> </p>
          </h1>

          <h2 className="md:text-xl mt-2 text-base">
            The only insight driven product testing platform
            {' '}
              <p className="font-semibold text-lime-600">
                made for sports brands
              </p>
            </h2>
        </div>
        
        <div className="flex flex-col md:w-48">
          <label className="font-semibold">
            Building a new product?
          </label>
          <a
            href="https://calendly.com/playtest-fyi/60min"
            target="_blank"
            className={SELECTED_BUTTON_STYLE('rounded') + 'justify-center text-center mt-1 md:mx-0 mx-10'}
          >
            Schedule a call today!
          </a>
        </div>
      </div>
      <div className="flex flex-row md:w-42 md:h-42 relative z-0 md:space-x-10 space-x-32 justify-center items-center">
        <div className="absolute inset-0 flex justify-center items-center z-10 skew-y-12 md:pr-80 pr-32 md:pt-10">
            <Player 
              src="/99549-review-ratings.json" 
              className="player" 
              loop
              autoplay
              speed={1} 
              style={{ height: '300px', width: '300px' }}
            />
        </div>
        <div className="">
          <Player 
            src="/40519-isometric-tennis.json" 
            className="player" 
            loop
            autoplay
            speed={1} 
            style={{ height: '300px', width: '200px' }}
          />
        </div>
      </div>
    </div> 
    
    <div className="lg:mx-72 md:mx-42 mx-5 mt-1 font-semibold border-lime-400 border-2 p-3">
      <Guarantee />
    </div>
    
    <div className="mt-10 md:mx-0 grid md:grid-cols-4 grid-cols-1 gap-5">
      <Card title="Immediate Sign Up 📝">
        Start the playtesting process today. After signing up,
        we&apos;ll schedule a call to gather your requirements, so
        you can get back to focusing on building product.
      </Card>
      <Card title="Verified Playtesters ✅">
        Every playtester&apos;s skill level, consistency of play, and community influence
        is verified to ensure that you get the feedback you want.
      </Card>
      <Card title="Powerful Feedback 🔎">
        By collecting highly detailed reviews, analyze playtest reviews by skill level, 
        player attributes, aggregate ratings, and more. You&apos;ll be able 
        to export this data to use for custom analysis. 
      </Card>
      <Card title="Build Hype 🎉">
        Organically build an audience for your product by having
        playtesters post mentions on social media, video reviews, etc...
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
