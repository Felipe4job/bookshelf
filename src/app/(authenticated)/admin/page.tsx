import { UserNew } from '@/components/basic/modals/contents/userNew';
import { Template } from '@/components/layout/template';

export default function Admin () {
  return(
    <div className='flex flex-wrap overflow-y-auto px-4 pb-4'>
      <Template
        title='Admin'
        button={{
          id: 'newUser',
          text: 'Adicionar Usuário',
          modalContent: UserNew
        }}
      />

    </div>
  );
}