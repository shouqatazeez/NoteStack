import React from "react";
import heroimg from "../assets/Heroimg.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import Features from "./Features";
import Techstack from "./Techstack";

const Hero = () => {
  return (
    <div>
      <h1> This is the dashboard page of our website</h1>

      <div className="py-16 lg:py-32">
        <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mr-auto ml-auto text-center lg:ml-0 lg:max-w-lg lg:text-left [&>p]:mx-auto [&>p]:max-w-xl">
                <div className="text-muted-foreground text-sm font-medium">
                  Save Smarter, Work Faster
                </div>
                <h1 className="mt-4 text-4xl/tight font-bold tracking-tight sm:text-4xl/tight lg:text-5xl/tight">
                  All Your Notes in One Smart Stack{" "}
                </h1>
                <p className="text-muted-foreground mt-4 text-lg/8">
                  Capture ideas, tasks, and reminders in seconds. NotesStack
                  helps you stay organized with a clean, distraction-free
                  interface that’s always within reach.
                </p>
                <div className="mt-8 grid gap-3 sm:flex sm:justify-center lg:justify-start">
                  <Button
                    className={
                      " bg-[#0072FF] hover:bg-[#00BFFF] cursor-pointer"
                    }
                  >
                    <Link to={"/signup"}>Get Started</Link>
                  </Button>
                  <Button variant={"outline"}>
                    {" "}
                    <Link to={"/signup"}>Learn more</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <img
                className="aspect-[16/9] rounded-2xl object-cover object-center shadow-xs lg:aspect-[5/4] border border-black"
                src={heroimg}
                alt="#"
              />
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Techstack />
    </div>
  );
};
export default Hero;
