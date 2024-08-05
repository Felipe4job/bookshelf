import { EditProfile } from '@/components/basic/editProfile';
import { Template } from '@/components/layout/template';

export default function Me () {
  return(
    <div className='flex flex-wrap overflow-y-auto px-4 pb-4'>
      <Template
        title='Meu perfil'
        breadcrumbItems={ 
          [ 
            { text: 'Página principal', link: null },
            { text: 'Meu perfil', link: null } 
          ] 
        }
      />
      <EditProfile />
    </div>
  );
}