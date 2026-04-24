import Image from "next/image";

const Offer = () => {
  return (
    <div className="w-full px-4 md:px-12 py-15">

      {/* 🔹 Mobile Scroll */}
      <div className="flex md:hidden gap-4 overflow-x-auto pb-4">

        <img
          src="/Offer-image/image-1.png"
          className="w-[80vw] h-44 flex-shrink-0 rounded-xl object-cover"
          alt="offer1"
        />

        <img
          src="/Offer-image/image-2.png"
          className="w-[80vw] h-44 flex-shrink-0 rounded-xl object-cover"
          alt="offer2"
        />

        <img
          src="/Offer-image/image-3.png"
          className="w-[80vw] h-44 flex-shrink-0 rounded-xl object-cover"
          alt="offer3"
        />

      </div>


      {/* 🔹 Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 gap-8">
        <div className="relative w-full h-64 rounded-xl overflow-hidden">
          <Image
            src="/Offer-image/image-1.png"
            alt="offer1"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-full h-64 rounded-xl overflow-hidden">
          <Image
            src="/Offer-image/image-2.png"
            alt="offer2"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-full h-64 rounded-xl overflow-hidden">
          <Image
            src="/Offer-image/image-3.png"
            alt="offer3"
            fill
            className="object-cover"
          />
        </div>
      </div>

    </div>
  );
};

export default Offer;