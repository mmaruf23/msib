export default function Question({text}) {
  return (
    <div className="flex justify-between items-center py-8 border-b">
      <p className="">
        {text}
      </p>
      <svg
        className="pl-4"
        viewBox="0 0 24 24"
        height={24}
        fill="#000000"
        stroke=""
      >
        <path d="M13,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l4.3-4.3H5c-0.6,0-1-0.4-1-1s0.4-1,1-1h11.6l-4.3-4.3  c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.1,0.1,0.2,0.2,0.2,0.3c0,0.1,0.1,0.2,0.1,0.4l0,0c0,0,0,0,0,0l0,0c0,0.1,0,0.3-0.1,0.4  c0,0.1-0.1,0.2-0.2,0.3l-6,6C13.5,18.9,13.3,19,13,19z"></path>
      </svg>
    </div>
  );
};
