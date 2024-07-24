import { ModalDefault } from '@/components/basic/modals/modal';
import { user } from '@/libs/auth';
import { createContext, useContext, useState } from 'react';

interface GlobalContextProps {
  handleModal: (active: boolean, modal?: any) => void;
  handleMyProfile: (user: user) => void;
  myProfile: user | undefined;
}

export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {

  // Ativa e carregar conteúdo de modais
  
  const [ activeModal, setActiveModal ] = useState(false);
  const [ { modal }, setModal ] = useState<any>({ modal: undefined });

  function handleModal (active: boolean, modal: any) {
    
    if(active) {
      setModal({ modal: modal });
    }else{
      setModal({ modal: undefined });
    }

    setActiveModal(active);
  }

  // Carregar informações do usuário logado

  const [ myProfile, setMyProfile ] = useState<user | undefined>();

  function handleMyProfile (user: user) {
    setMyProfile(user);
  }

  return (
    <GlobalContext.Provider
      value={{
        handleModal,
        handleMyProfile,
        myProfile
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