import React from "react";
import RD from "../Images/R&D.jpg";
import "../../App.css";

function RND() {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center">
          <h1 className="flex absolute tracking-widest text-black text-center font-bold text-lg p-19 sm:font-bold sm:text-3xl md:font-bold md:text-4xl lg:font-extrabold lg:text-5xl xl:font-extrabold xl:text-6xl">
            Discovery of Ground Breaking Medicines
          </h1>
          <img className="w-full top_carousel" src={RD} alt="RD" />
        </div>

        <div className="m-10">
          <div className="text-center font-bold">
            <h1 className="text-2xl m-1 mt-3 font-bold sm:text-3xl sm:m-3 sm:mt-5 md:text-4xl md:m-5 md:mt-7 lg:text-5xl lg:m-7 lg:mt-5">
              Research &amp; Development
            </h1>
          </div>
          <div className="">
            <p className="my-5">
              The mission of Kaymed Research Centre is to develop
              ground-breaking medicines and works towards novel drug delivery
              systems, new molecule research. It is driven by development
              expertise and operational excellence to create innovative and
              effective treatment for the betterment of society.
              <p className="my-5">
                At Kaymed, innovations and quality up-gradation programs are the
                essential ingredients and R &amp; D plays a pivotal role.
                Marketing efforts of Kaymed are supported by a strong &amp;
                highly qualified scientists that are at work day and night in
                our R &amp; D centre, which is fully equipped with
                state-of-the-art equipments, facilitating to develop
                formulations that are bio-equivalent, safe &amp; efficacious.
              </p>
              <p className="my-5">
                Today, the success of Kaymed Research Centre is attributed to
                the capabilities of its highly skilled employees and the work
                environment. Kaymed Research Centre promotes teamwork in order
                to produce the best medicines and is committed to building a
                healthier and happier world.
              </p>
            </p>
          </div>
        </div>

        <div className="m-10">
          <div className="text-center">
            <h3 className="text-2xl m-1 mt-3 font-bold sm:text-3xl sm:m-3 sm:mt-5 md:text-4xl md:m-5 md:mt-7 lg:text-5xl lg:m-7 lg:mt-5">
              Biotechnology R&amp;D
            </h3>
          </div>
          <article>
            <div>
              <h4 className="mt-10 mb-8 text-lg font-bold">
                People, Progress, Purpose &amp; Social Responsibility
              </h4>
              <p className="my-5">
                Kaymed ventured in to the arena of biologics drug development in
                a focused manner with a well-defined strategy. A state-of- the
                art research laboratory at our integrated Research Centre houses
                latest equipment for process development and analytical
                characterisation of highly complex biological drugs. With a pool
                of talented scientists, the Biotechnology R&amp;D has
                comprehensive capabilities for clone/cell line development,
                upstream and downstream process development and analytical
                research.
              </p>
              <p className="my-5">
                Products based on recombinant proteins and mAbs are in focus for
                development of therapeutic products in the areas of auto-immune
                disorders, assisted reproductive therapy and infertility
                treatment including other important disease areas.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
export default RND;
