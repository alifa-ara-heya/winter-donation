import Heading from "../Heading/Heading";

const ImpactStories = () => {
    const stories = [
        {
            name: "Rahim from Dhaka",
            story: "Thanks to WinterAid, my family received blankets during the coldest nights.",
            image: 'https://i.ibb.co/Wz73f8Z/banner-4.jpg',
        },
        {
            name: "Ayesha from Sylhet",
            story: "The warm clothes we received have been a blessing for my children this winter.",
            image: "https://i.ibb.co/fDY8fj8/old-woman.jpg",
        },
        {
            name: "Volunteer Kabir",
            story: "Helping distribute donations has been one of the most fulfilling experiences of my life.",
            image: "https://i.ibb.co/fFsjbQd/girl.jpg",
        },
    ];

    return (
        <div className="bg-primary/20 py-12">
            <div className="w-11/12 mx-auto px-6 md:px-12 lg:px-20">
                <Heading title={'Real Stories of Impact'} subtitle={'Your kindness brings warmth to lives in need. Here are their stories:'} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
                    {stories.map((story, index) => (
                        <div key={index} className="card image-full shadow-xl">
                            <figure>
                                <img
                                    src={story.image}
                                    alt={story.name}
                                    className="w-full"
                                />
                            </figure>
                            <div className="card-body flex flex-col items-center justify-center">
                                {/* Quote Block */}
                                <blockquote className="relative text-center p-6 w-1/2 md:w-3/4">
                                    {/* Opening Blockquote */}
                                    <span className="absolute top-0 left-4 text-5xl text-gray-300 font-serif">
                                        &ldquo;
                                    </span>
                                    {/* Quote Text */}
                                    <p className="text-gray-200 text-lg italic">{story.story}</p>
                                    {/* Closing Blockquote */}
                                    <span className="absolute bottom-0 right-2 text-5xl text-gray-400 font-serif">
                                        &rdquo;
                                    </span>
                                </blockquote>

                                {/* Quoted Person */}
                                <p className="mt-4 text-gray-300 italic">
                                    &mdash; {story.name}
                                </p>

                                {/* Card Actions */}
                                <div className="card-actions mt-6">
                                    <button className="btn bg-primary">Donate Now</button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImpactStories;
