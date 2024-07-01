import { UserNew } from '@/components/basic/modals/contents/userNew';
import { TableEst } from '@/components/basic/table';
import { Template } from '@/components/layout/template';
import { reqUseServer } from '@/libs/reqUseServer';
import { userGetAll } from '@/requests/users';

async function getUsers () {
  const result = await reqUseServer(userGetAll, '');

  const data: string[][] = [];

  data.push([ 'id', 'nome', 'Nome do usuário', 'email' ] );

  for(let i = 1; i < result.length; i++ ) {
    const row = result[i];
    data.push([ row._id, row.name, row.userName, row.email ]);
  }

  return data;
}

export default async function Admin () {
  const users = await getUsers();

  return(
    <div className='flex flex-col overflow-auto px-4 pb-4'>
      <Template
        title='Admin'
        button={{
          id: 'newUser',
          text: 'Adicionar Usuário',
          modalContent: UserNew
        }}
      />
      <TableEst data={users} />
    </div>
  );
}