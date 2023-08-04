/* eslint-disable @next/next/no-img-element */
export const BlogCard = () => {
  return (
    <div className="flex flex-col  h-[400px]">
      <img
        src="/img/home.png"
        alt="blog"
        className="h-[240px]  rounded-t-[30px]"
      />
      <div className="rounded-b-[30px] bg-white">
      <div className="flex flex-col gap-2 p-4">
      <h2 className="text-primary font-semibold">
          Take The New Manali Rohtang Pass Heli-Taxi Service To Avoid
        </h2>
        <p className="text-[#869EA6]">
          If you get carsick easily and biking all the way up to one of the
          world’s highest..
        </p>
        <span className="text-primary font-bold">Read More</span>
      </div>
      </div>
    </div>
  );
}; 
