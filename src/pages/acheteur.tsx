import React from "react";
import { useRouter } from "next/router";
import "./../css/acheteur.css";

const acheteur = () => {
  return (
    <div className="container mx-auto">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Exploitation - Connecté</h1>
        <div className="flex items-center">
          <a href="#" className="mr-4">Connexion</a>
          <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded">Inscription</a>
        </div>
      </header>

      <main className="mt-10">
        <section className="mb-10">
          <h2 className="text-xl font-bold">Catégories</h2>
          <ul className="grid grid-cols-3 gap-4 mt-4">
            <li className="bg-gray-100 p-4 rounded">
              <a href="#">
                <h3 className="text-lg font-bold">Module 01</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </a>
            </li>
            <li className="bg-gray-100 p-4 rounded">
              <a href="#">
                <h3 className="text-lg font-bold">Module 02</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </a>
            </li>
            <li className="bg-gray-100 p-4 rounded">
              <a href="#">
                <h3 className="text-lg font-bold">Module 03</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold">Modules</h2>
          <ul className="grid grid-cols-4 gap-4 mt-4">
            <li className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-bold">Java Script</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.</p>
              <a href="#">En savoir plus</a>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-bold">Module 04</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.</p>
              <a href="#">En savoir plus</a>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-bold">Module 05</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.</p>
              <a href="#">En savoir plus</a>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-bold">Module 06</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.</p>
              <a href="#">En savoir plus</a>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-bold">Module 07</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.</p>
              <a href="#">En savoir plus</a>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-bold">Module 08</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.</p>
              <a href="#">En savoir plus</a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="py-4 text-center">
        <p>Copyright &copy; 2023 Exploitation - Connecté</p>
      </footer>
    </div>
  );
};

export default acheteur;
