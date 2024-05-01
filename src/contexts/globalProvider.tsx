'use client';

import { ModalDefault } from '@/components/basic/modals/modal';
import { createContext, useContext, useState } from 'react';

interface GlobalContextProps {
  handleModal: (active: boolean, modal?: any) => void;
}

export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {

  const [ activeModal, setActiveModal ] = useState(false);
  const [ { modal }, setModal ] = useState<any>({ modal: undefined });

  const handleModal = (active: boolean, modal: any) => {
    
    if(active) {
      setModal({ modal: modal });
    }else{
      setModal({ modal: undefined });
    }

    setActiveModal(active);
  };

  return (
    <GlobalContext.Provider
      value={{
        handleModal
      }} 
    >
      {
        activeModal &&
        <ModalDefault content={modal} />
      }
      { children }
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);