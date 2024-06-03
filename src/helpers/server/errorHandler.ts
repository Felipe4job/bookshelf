import { NextResponse } from 'next/server';

interface errorhandlerProps {
  msg: string;
  code: 
    'Id not send' | 
    'Not Found' | 
    'Validation Mongoose error' |
    'Request Entity Too Large' |
    'Unsupported Media Type' |
    'Unauthorized' |
    'Bad Request'
}

export function errorHandler (props: errorhandlerProps) {
  let status: number;

  switch(props.code) {
  case 'Id not send':
    status = 400;
    break;
  case 'Not Found':
    status = 404;
    break;
  case 'Validation Mongoose error':
    status = 400;
    break;
  case 'Request Entity Too Large':
    status = 413;
    break;
  case 'Unsupported Media Type':
    status = 415;
    break;
  case 'Unauthorized':
    status = 401;
    break;
  case 'Bad Request':
    status = 400;
  }

  return NextResponse.json({ error: props.msg, code: props.code }, { status: status });
}