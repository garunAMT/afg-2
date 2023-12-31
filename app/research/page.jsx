import { ResearchContent } from "@/constants";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="">
        {ResearchContent.map((research, index) => {
          return (
            <section className="body-font" key={research.id}>
              <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full md:mb-0 mb-10 flex items-center justify-center">
                  <Image
                    className="w-full border-2"
                    alt="hero"
                    src={research.image}
                    width={1000}
                    height={1000}
                  />
                </div>
                <div
                  className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
                  key={research.id}
                >
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                    {research.title}
                  </h1>
                  <div className="mb-3 leading-relaxed text-justify">
                    {research.content.map((content, index) => {
                      return (
                        <p className="mb-1" key={content}>
                          {content}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default page;
