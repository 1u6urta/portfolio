const RandomShape = ({fill} : {fill : string}) => {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <defs>
        {" "}
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          {" "}
          <stop
            id="stop1"
            stop-color="rgba(1, 212, 255, 0.17)"
            offset="0%"
          ></stop>{" "}
          <stop
            id="stop2"
            stop-color={fill}
            offset="100%"
          ></stop>{" "}
        </linearGradient>{" "}
      </defs>{" "}
      <path
        fill="url(#sw-gradient)"
        d="M17.2,-31.9C21.1,-27.6,22.2,-20.5,25.6,-14.7C29,-9,34.7,-4.5,37.2,1.5C39.8,7.5,39.3,14.9,36.1,21.1C33,27.3,27.2,32.2,20.8,34C14.3,35.7,7.2,34.2,0.2,33.9C-6.7,33.5,-13.4,34.2,-19.9,32.4C-26.3,30.7,-32.5,26.5,-35.1,20.7C-37.8,14.9,-36.9,7.4,-34.3,1.5C-31.6,-4.4,-27.2,-8.8,-23.3,-12.3C-19.3,-15.8,-15.7,-18.5,-11.9,-22.9C-8.1,-27.3,-4.1,-33.4,1.3,-35.7C6.7,-37.9,13.3,-36.3,17.2,-31.9Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        stroke-width="0"
        stroke="url(#sw-gradient)"
      ></path>
    </svg>
  );
};

export default RandomShape;
