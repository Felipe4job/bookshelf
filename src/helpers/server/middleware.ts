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
    console.log(e);
  }

  if (result) {
    return result;    
  }else throw new Error('Your handler or middleware must return a NextResponse!');   
};