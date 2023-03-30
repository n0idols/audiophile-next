export default function Info() {
  return (
    <div className="container my-48">
      <div className="grid grid-cols-2 gap-12">
        <div className="col-span-1 flex flex-col justify-center space-y-6 px-6">
          <h2 className="text-4xl uppercase tracking-widest font-bold">
            bringout you the <span className="text-primary">best</span> audio
            gear{" "}
          </h2>
          <p className="text-gray-500 tracking-wide ">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="col-span-1 bg-info h-[540px]  bg-cover rounded-md"></div>
      </div>
    </div>
  );
}
