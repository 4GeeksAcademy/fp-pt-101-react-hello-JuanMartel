import React from "react";

const Hero = () => {
  return (
    <div className="p-5 py-4 mb-4 mt-5 bg-dark-subtle ">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
        <p className="col-md-8 fs-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet hic, culpa voluptas saepe ex cumque veritatis in accusantium doloremque architecto, nesciunt esse repellendus molestias voluptate distinctio ipsam quasi voluptatum sint.
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Call to Action!
        </button>
      </div>
    </div>
  );
};
export default Hero;