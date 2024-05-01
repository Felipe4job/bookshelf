interface ModalDefaultProps {
  content: any;
}


export const ModalDefault = (props: ModalDefaultProps) => {
  return(
    <>
      <div className='fixed z-40 flex h-screen w-full items-center justify-center overflow-hidden bg-slate-200 opacity-75'/>
      <div className='fixed left-1/2 top-1/2 z-50 max-h-[80%] min-h-96 w-5/6 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-4 shadow-xl'>
        {
          (() => {
            const Component = props.content;
            return (
              Component &&
              <>
                <Component bookTitle='chibata' />
              </>
            );
          })()
        }
      </div>
    </>  
  );
};