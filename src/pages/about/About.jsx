import bgImage from "../../assets/images/deadpool.png";
import { ACard, ContactForm } from "../../components";

const About = () => {
    return (
        <section className="text-center w-full bg-gradient-to-b from-red-950/70 to-blue-950/80 py-3">
            <div className="relative">
                <img
                    src={bgImage}
                    alt="deadpool background image"
                    className="mx-auto brightness-[0.85] "
                />
                <h2 className="text-[10vw] font-bold italic font-[Poppins] absolute top-6 md:top-1/4 left-1/2 transform -translate-x-1/2 w-full  ">
                    Hi there,
                </h2>
                <img
                    src={bgImage}
                    alt="deadpool background image"
                    className="mx-auto brightness-[0.55] absolute top-0 left-1/2 transform -translate-x-1/2 opacity-70 "
                />
            </div>
            <div className=" mx-auto max-w-4xl px-3 mb-8">
                <h3 className="text-3xl font-bold mb-3">
                    Let's talk about TMDB
                </h3>
                <p className="text-gray-400">
                    The Movie Database (TMDB) is a community built movie and TV
                    database. Every piece of data has been added by our amazing
                    community dating back to 2008. TMDB's strong international
                    focus and breadth of data is largely unmatched and something
                    we're incredibly proud of. Put simply, we live and breathe
                    community and that's precisely what makes us different.
                </p>
            </div>

            <div className="mx-auto max-w-4xl px-3 mb-5">
                <h3 className="text-2xl font-bold mb-3">The TMDB advantage</h3>
                <div className="flex flex-col gap-5">
                    <ACard
                        number={1}
                        desc={
                            "Every year since 2008, the number of contributions to our database has increased (check out our last years wrap!) With over 1,000,000 developers and companies using our platform, TMDB has become a premiere source for metadata."
                        }
                    />
                    <ACard
                        number={2}
                        desc={
                            "Along with extensive metadata for movies, TV shows and people, we also offer one of the best selections of high resolution posters and fanart. On average, over 1,000 images are added every single day."
                        }
                    />
                    <ACard
                        number={3}
                        desc={
                            "We're international. While we officially support 39 languages we also have extensive regional data. Every single day TMDB is used in over 180 countries."
                        }
                    />
                    <ACard
                        number={4}
                        desc={
                            "Our community is second to none. Between our staff and community moderators, we're always here to help. We're passionate about making sure your experience on TMDB is nothing short of amazing."
                        }
                    />
                    <ACard
                        number={5}
                        desc={
                            "Trusted platform. Every single day our service is used by millions of people while we process over 3 billion requests. We've proven for years that this is a service that can be trusted and relied on."
                        }
                    />
                </div>
            </div>

            <div className="mb-5">
                <ContactForm />
            </div>
        </section>
    );
};

export default About;
