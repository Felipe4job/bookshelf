import { NextResponse } from 'next/server';
import { connect } from './db';

export const execMiddleware = (...middleware: any[]) => async (req: Request, context: any) => {
  try{
    await connect;

  }catch(e:any) {
    return Response.json({ error: e.message }, { status: 500 });
  }

  let result:any;

  try{
    for(let i = 0; i < middleware.length; i++ ) {
      let nextInvoked = false;

      const next = () => nextInvoked = true;

      result = await middleware[i](req, context, next);

      if(!nextInvoked) break;
    }
  }catch(e: any) {
    if(e.code)
      return NextResponse.json(e, { status: e.status });

    return NextResponse.json(e.message, { status: 500 });
  }

  if (result) {
    return result;    
  }else return NextResponse.json('Your handler or middleware must return a NextResponse!', { status: 500 }); 
};