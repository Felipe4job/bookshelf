interface InforBoxPropsOneCollum {
  title: string;
  textMain: React.ReactNode;
}

export const OneCollum = (props: InforBoxPropsOneCollum) => {
  return (
    <div className='flex h-40 w-full flex-col overflow-y-auto rounded-lg border border-grayLight bg-secondaryExLight p-4'>
      <h3 className='mb-2'>{props.title}</h3>
      {props.textMain}
    </div>
  );
};