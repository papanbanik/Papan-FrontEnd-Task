import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const payments = [
    { name: "PayPal", img: "/payment-logo/paypal.png" },
    { name: "Stripe", img: "/payment-logo/stripe.png" },
    { name: "MasterCard", img: "/payment-logo/visa.png" },
    { name: "Skrill", img: "/payment-logo/skrill.png" },
  ];

  return (
    <footer className="w-full bg-[#0042cc] text-white pt-10 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">

          {/* BRAND */}
          <div className="space-y-4 flex flex-col">
            <Image
              src="/navbar-logo.png"
              alt="logo"
              width={290}
              height={100}
              className="block"/>

            <p className=" pl-15 text-blue-100 text-sm leading-relaxed">
              Dive into local recommendations for a truly authentic experience.
            </p>

            <div className="pl-15 pt-4">
              <p className="text-xs text-blue-200">📞 Need help? Call us</p>
              <a
                href="tel:1-800-222-8888"
                className="text-lg font-bold hover:text-orange-400 transition pt-2"
              >
                1-800-222-8888
              </a>
            </div>
          </div>

          {/* COMPANY + SERVICES (MOBILE 2 COL) */}
          <div className="grid grid-cols-2 sm:pl-15 lg:contents gap-8 col-span-2">

            {/* COMPANY */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3 text-sm text-blue-100">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/community">Community Blog</Link></li>
                <li><Link href="/jobs">Jobs & Careers</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/awards">Our Awards</Link></li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-sm text-blue-100">
                <li><Link href="/tour-guide">Tour Guide</Link></li>
                <li><Link href="/tour-booking">Tour Booking</Link></li>
                <li><Link href="/hotel-booking">Hotel Booking</Link></li>
                <li><Link href="/ticket-booking">Ticket Booking</Link></li>
                <li><Link href="/rental">Rental Services</Link></li>
              </ul>
            </div>

          </div>

          {/* NEWSLETTER + PAYMENTS */}
          <div className="space-y-8">

            {/* NEWSLETTER */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>

              <form className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full py-3 px-4 pr-28 bg-white rounded-full text-gray-800 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-1 bg-[#ffb703] hover:bg-orange-400 text-black font-bold py-2 px-5 rounded-full text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* PAYMENTS */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Payments</h3>

              <div className="flex flex-wrap gap-2">
                {payments.map((p) => (
                  <div
                    key={p.name}
                    className="bg-gray-200 p-2 rounded-md w-12 h-8 flex items-center justify-center"
                  >
                    <Image
                      src={p.img}
                      alt={p.name}
                      width={30}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-blue-400/30 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-blue-200">
          <p>© 2024 Travila Inc. All rights reserved.</p>

          <div className="flex gap-4">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Support</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;