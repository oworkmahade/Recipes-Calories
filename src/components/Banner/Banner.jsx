// import PropTypes from 'prop-types';

const Banner = () => {
  return (
    <div className="border-green-600 border-2 m-4 p-4">
      <div
        className="hero w-full min-h-96 rounded-2xl"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/KjNsxg9m/medium-shot-man-cooking.jpg)",
        }}
      >
        <div className="hero-overlay rounded-2xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="w-3/4">
            <h1 className="mb-5 text-4xl font-bold">
              Discover cooking classes that fit your style
            </h1>
            <p className="mb-5 text-slate-400">
              Learn practical techniques, explore diverse cuisines, and build
              confidence in the kitchen. Whether beginner or enthusiast, this
              personalized experience helps you cook smarter.
            </p>
            <div className="md:flex md:flex-row  md:gap-4 justify-center">
              <button className="btn btn-outline btn-success rounded-3xl p-4 bg-green-600">
                Explore Now
              </button>
              <button className="btn btn-primary border-white border rounded-3xl p-4">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Banner.propTypes = {

// };

export default Banner;
