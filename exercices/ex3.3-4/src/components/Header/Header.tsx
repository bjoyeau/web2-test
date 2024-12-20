import { useEffect } from "react";
import "./Header.css";
import "daisyui/dist/full.css";

interface HeaderProps {
  urlLogo: string;
  children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  // nom de la clé de stockage
  const storeName = "theme";
  // fonction pour stocker le thème dans le stockage de session
  const setUserSessionData = (theme: string) => {
    const storageValue = JSON.stringify(theme);
    localStorage.setItem(storeName, storageValue);
  };

  // fonction pour récupérer le thème du stockage de session
  const getUserSessionData = () => {
    const retrievedUser = localStorage.getItem(storeName);
    if (!retrievedUser) return;
    return JSON.parse(retrievedUser);
  };

  // fonction pour appliquer le thème
  const applyTheme = (theme: string) => {
    const headerElement = document.querySelector(".header") as HTMLElement;
    const footerElement = document.querySelector(".footer") as HTMLElement;
    headerElement.style.backgroundColor = theme === "dark" ? "darkblue" : "lightblue";
    footerElement.style.backgroundColor = theme === "dark" ? "darkblue" : "lightblue";
  };

  // fonction pour gérer le clic sur le bouton de changement de thème
  function handleColorClick() {
    const currentTheme = getUserSessionData();
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setUserSessionData(newTheme);
    applyTheme(newTheme);
  }

  // Appliquer le thème lors du chargement initial
  useEffect(() => {
    const savedTheme = getUserSessionData();
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      setUserSessionData("light"); // Définir un thème par défaut si aucun n'est enregistré
    }
  }, []);

  

  return (
    <header className="header">
      <img src={props.urlLogo} alt="logo" className="logo" />
      <div>{props.children}</div>
      <div className="">
        <button
          className="btn btn-sm btn-warning gap-4"
          onClick={handleColorClick}
        >
          Toggle theme
        </button>
      </div>
    </header>
  );
};

export default Header;
