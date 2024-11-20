
const Heading = ({ title, subtitle }) => {
    return (
        <div className="text-center">
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-lime-800'>
                {title}
            </h1>
            <p className='text-center w-3/4 md:w-1/2 mx-auto opacity-65'>
                {subtitle}
            </p>
        </div>
    );
};

export default Heading;