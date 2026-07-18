import React from "react";

const Contact = () => {
  return (
    <section className="mt-10 rounded-2xl border border-slate-700 bg-slate-900/40 backdrop-blur-md p-5 sm:p-6 lg:p-8">

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-white">
        Connect
      </h1>

      <div className="w-20 h-1 rounded-full bg-amber-500 mt-3 mb-8"></div>

      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">
        Contact Form
      </h2>

      <form className="space-y-6">

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <input
            type="text"
            placeholder="Full Name"
            className=" w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 "
          />

          <input
            type="email"
            placeholder="Email Address"
            className=" w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 "
          />

        </div>

        {/* Subject */}

        <input
          type="text"
          placeholder="Subject"
          className=" w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 "
        />

        {/* Textarea */}

        <textarea
          rows="7"
          placeholder="Write your message..."
          className=" w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-4 text-white placeholder:text-gray-400 resize-none outline-none transition-all duration-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 "
        ></textarea>

        {/* Button */}

        <div className="flex justify-end">
          <button
              className=" px-8 py-4 rounded-2xl bg-[#2b2b2b]  text-amber-400 font-semibold text-lg transition-all duration-500 hover:bg-linear-to-r hover:from-[#5b5137] hover:to-[#2b2b2b] hover:text-[#ffa36c] hover:shadow-[0_0_30px_rgba(255,165,0,0.15)] hover:border-t-2 hover:scale-105 active:scale-95 "
            >
              Send Message
          </button>
        </div>

      </form>

    </section>
  );
};

export default Contact;