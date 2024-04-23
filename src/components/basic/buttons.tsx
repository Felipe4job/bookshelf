interface ButtonProps {
  id: string;
  bgColor: string;
  textColor: string;
  text: string;
  type: 'submit' | 'reset' | 'button';
  onClick?: ()=> void;
  disable?: boolean;
  disableText?: 'Salvando...' | 'Entrando...' | 'Excluindo...' | 'Aguarde...';
}

interface ButtonTextProps {
  text: string;
  textColor: string;
  onClick: ()=> void;
  id: string;
  type: 'submit' | 'reset' | 'button';
}

export const ButtonEst = {
  smallRound: (props: ButtonProps)=>{
    return (
      <button
        id={props.id}
        type={props.type}
        disabled={props.disable}
        onClick={props.onClick}
        className={`${'text-' + props.textColor} rounded-full px-10 py-2.5 text-sm font-medium hover:font-bold hover:opacity-75`}
        style={{ backgroundColor: props.bgColor }}
      >
        {
          props.disable &&
          <svg className='-ml-1 mr-3 size-5 animate-spin text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
            <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
            <path className='opacity-75' fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'>
            </path>
          </svg>
        }
        {props.disable ? props.disableText : props.text}
      </button>
    );
  },
  ButtonText: (props: ButtonTextProps)=>{
    return (
      <div
        id={props.id}
        onClick={props.onClick}
        className='cursor-pointer'
        style={{ color: props.textColor }}
      >
        {props.text}
      </div>
    );
  }
};