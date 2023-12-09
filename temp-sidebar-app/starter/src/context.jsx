import { createContext, useContext, useState } from 'react';

// Creo el objeto AppContext que tiene la propiedad
// Provider, la cual me permite pasar todo a todos
// lados
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  // Special hook useContext que busca lo que
  // se exportó con el createContext y de donde
  // voy a 'gettear' los estados y funciones
  // que hay en el provier
  return useContext(AppContext);
};
