import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagram, FaEbay } from "react-icons/fa";
import { ItemNavbar } from "../../components/ItemNavbar/ItemNavbar";

export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row w-full min-h-[7vh] bg-blue-950 justify-center items-center gap-4 p-4 text-white text-center">
      <p>
        Desarrollado por <strong>Camilo Durán Mesa</strong>
      </p>
      <Navbar>
        <ul className="flex items-center gap-4">
          <ItemNavbar content={<CiFacebook size={24} />} />
          <ItemNavbar content={<CiTwitter size={24} />} />
          <ItemNavbar content={<FaInstagram size={24} />} />
          <ItemNavbar content={<FaEbay size={24} />} />
        </ul>
      </Navbar>
    </footer>
  );
};
