import React, { useState } from "react";
import { useRouter } from "next/router";
import "./../css/acheteur.css";

const acheteur = () => {
  const [activeTab, setActiveTab] = useState("modules");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="mx-auto min-h-screen w-full bg-[#F0F2FC]">
      <header className="w-full bg-[#C6CBE7] py-0.5 pl-4">
        <h1 className="text-s font-light text-[#41494E]">
          Exploitation - Connecté
        </h1>
      </header>

      <main className="container mt-10 flex flex-row justify-evenly rounded-lg bg-white shadow">
        <section className="mb-10">
          <div className="border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
            <input
              type="text"
              placeholder="Search"
              className="rounded px-4 py-2 outline outline-1 outline-[#41494E]"
            />
            <ul className="-mb-px flex flex-wrap">
              <li className="me-2">
                <a
                  href="#"
                  className={`inline-block rounded-t-lg border-b-2 ${
                    activeTab === "modules"
                      ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500"
                      : "border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                  } p-4`}
                  onClick={() => handleTabChange("modules")}
                >
                  Matières / Modules
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className={`inline-block rounded-t-lg border-b-2 ${
                    activeTab === "categories"
                      ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500"
                      : "border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                  } p-4`}
                  onClick={() => handleTabChange("categories")}
                >
                  Catégories
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className={`inline-block rounded-t-lg border-b-2 ${
                    activeTab === "lieux"
                      ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500"
                      : "border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                  } p-4`}
                  onClick={() => handleTabChange("lieux")}
                >
                  Lieux d’enseignement
                </a>
              </li>
            </ul>
          </div>

          {activeTab === "categories" && (
            <>
              <div className="max-h-96 overflow-y-auto">
                <ul className="mt-4 grid grid-cols-1 gap-4">
                  <li className="rounded bg-gray-100 p-4">
                    <a href="#">
                      <h3 className="text-lg font-bold">Module 01</h3>
                      <p>Supporte la comparaison de chaînes de caractères.</p>
                    </a>
                  </li>
                  <li className="rounded bg-gray-100 p-4">
                    <a href="#">
                      <h3 className="text-lg font-bold">Module 02</h3>
                      <p>Formate une chaîne de caractères en majuscules.</p>
                    </a>
                  </li>
                  <li className="rounded bg-gray-100 p-4">
                    <a href="#">
                      <h3 className="text-lg font-bold">Module 03</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}

          {activeTab === "modules" && (
            <>
              <div className="max-h-96 overflow-y-auto">
                <ul className="mt-4 grid grid-cols-1 gap-4">
                  <li className="rounded bg-[#F0F2FC] bg-white p-4">
                    <h3 className="text-lg font-bold">Java Script</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse potenti.
                    </p>
                    <a href="#">En savoir plus</a>
                  </li>
                  <li className="rounded bg-[#F0F2FC] bg-white p-4">
                    <h3 className="text-lg font-bold">Module 04</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse potenti.
                    </p>
                    <a href="#">En savoir plus</a>
                  </li>
                  <li className="rounded bg-[#F0F2FC] bg-white p-4">
                    <h3 className="text-lg font-bold">Module 05</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse potenti.
                    </p>
                    <a href="#">En savoir plus</a>
                  </li>
                  <li className="rounded bg-[#F0F2FC] bg-white p-4">
                    <h3 className="text-lg font-bold">Module 06</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse potenti.
                    </p>
                    <a href="#">En savoir plus</a>
                  </li>
                  <li className="rounded bg-[#F0F2FC] bg-white p-4">
                    <h3 className="text-lg font-bold">Module 07</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse potenti.
                    </p>
                    <a href="#">En savoir plus</a>
                  </li>
                  <li className="rounded bg-[#F0F2FC] bg-white p-4">
                    <h3 className="text-lg font-bold">Module 08</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse potenti.
                    </p>
                    <a href="#">En savoir plus</a>
                  </li>
                </ul>
              </div>
            </>
          )}

          {activeTab === "lieux" && (
            <>
              <div className="max-h-96 overflow-y-auto">
                <ul className="mt-4 grid grid-cols-1 gap-4">
                  <li className="rounded bg-gray-100 p-4">
                    <a href="#">
                      <h3 className="text-lg font-bold">Lieu 01</h3>
                      <p>Description du lieu 01.</p>
                    </a>
                  </li>
                  <li className="rounded bg-gray-100 p-4">
                    <a href="#">
                      <h3 className="text-lg font-bold">Lieu 02</h3>
                      <p>Description du lieu 02.</p>
                    </a>
                  </li>
                  <li className="rounded bg-gray-100 p-4">
                    <a href="#">
                      <h3 className="text-lg font-bold">Lieu 03</h3>
                      <p>Description du lieu 03.</p>
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </section>

        <section className="mb-10">{/* Remaining code */}</section>
      </main>

      <footer className="py-4 text-center">
        <p>Copyright &copy; 2023 Exploitation - Connecté</p>
      </footer>
    </div>
  );
};

export default acheteur;
