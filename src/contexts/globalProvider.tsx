import { ModalDefault } from '@/components/basic/modals/modal';
import { createContext, useContext, useState } from 'react';

interface GlobalContextProps {
  handleModal: (active: boolean, modal: any) => void;
}

const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {

  const [ activeModal, setActiveModal ] = useState(false);
  const [ modal, setModal ] = useState<React.ReactNode>(<></>);

  const handleModal = (active: boolean, modal: any) => {
    setActiveModal(active);

    if(active)
      setModal(modal);
    else setModal(<></>);
  };

  return (
    <GlobalContext.Provider
      value={{
        handleModal
      }} 
    >
      {
        activeModal &&
        <ModalDefault>
          {modal}
        </ModalDefault>
      }
      { children }
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);