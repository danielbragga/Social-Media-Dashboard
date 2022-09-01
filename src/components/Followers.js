import React from "react";
import facebook from "../images/icon-facebook.svg";
import up from "../images/icon-up.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import down from "../images/icon-down.svg";

export default function Followers() {
  return (
    <>
      <section className="max-w-7xl mx-auto py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 ">
        <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow shadow-slate-50 dark:shadow-slate-700">
          <ul className="flex items-center justify-center text-center">
            <li>
              <img src={facebook} alt="Facebook" className="mr-2 " />
            </li>
            <li className="text-sm text-slate-600 font-bold dark:text-slate-400">
              @nathanf
            </li>
          </ul>

          <h2 className="text-5xl font-bold text-slate-800 text-center my-5 dark:text-white">
            1987{" "}
            <spam className="text-slate-600 text-sm block font-normal uppercase tracking-widest dark:text-slate-400 ">
              {" "}
              Followers{" "}
            </spam>
          </h2>
          <p className="text-center text-emerald-600 flex items-center justify-center text-sm font-bold">
            <img src={up} className="mr-2 w-3" />
            12 Today
          </p>
        </article>
        <article className="bg-slate-200 p-5 rounded-lg dark:bg-slate-800 shadow shadow-slate-50 dark:shadow-slate-700">
          <ul className="flex items-center justify-center text-center">
            <li>
              <img src={twitter} alt="Twitter" className="mr-2 " />
            </li>
            <li className="text-sm text-slate-600 font-bold dark:text-slate-400">
              @nathanf
            </li>
          </ul>

          <h2 className="text-5xl font-bold text-slate-800 dark:text-white text-center my-5">
            1044{" "}
            <spam className="text-slate-600 text-sm block font-normal uppercase tracking-widest dark:text-slate-400 ">
              {" "}
              Followers{" "}
            </spam>
          </h2>
          <p className="text-center text-emerald-600 flex items-center justify-center text-sm font-bold">
            <img src={up} className="mr-2 w-3" />
            99 Today
          </p>
        </article>
        <article className="bg-slate-200 p-5 rounded-lg dark:bg-slate-800 shadow shadow-slate-50 dark:shadow-slate-700">
          <ul className="flex items-center justify-center text-center">
            <li>
              <img src={instagram} alt="Instagram" className="mr-2 " />
            </li>
            <li className="text-sm text-slate-600 font-bold dark:text-slate-400">
              @realnathanf
            </li>
          </ul>

          <h2 className="text-5xl font-bold text-slate-800 dark:text-white text-center my-5">
            11k{" "}
            <spam className="text-slate-600 text-sm block font-normal uppercase tracking-widest ">
              {" "}
              Followers{" "}
            </spam>
          </h2>
          <p className="text-center text-emerald-600 flex items-center justify-center text-sm font-bold">
            <img src={up} className="mr-2 w-3" />
            1099 Today
          </p>
        </article>
        <article className="bg-slate-200 p-5 dark:bg-slate-800 rounded-lg shadow shadow-slate-50 dark:shadow-slate-700">
          <ul className="flex items-center justify-center text-center">
            <li>
              <img src={youtube} alt="Youtube" className="mr-2 " />
            </li>
            <li className="text-sm text-slate-600 dark:text-slate-400 font-bold">
              Nathan F.
            </li>
          </ul>

          <h2 className="text-5xl font-bold text-slate-800 text-center my-5 dark:text-white">
            8239{" "}
            <spam className="text-slate-600 text-sm block font-normal uppercase tracking-widest dark:text-slate-400 ">
              {" "}
              Subscribers{" "}
            </spam>
          </h2>
          <p className="text-center text-rose-600 flex items-center justify-center text-sm font-bold">
            <img src={down} className="mr-2 w-3" />
            144 Today
          </p>
        </article>
      </section>
    </>
  );
}
