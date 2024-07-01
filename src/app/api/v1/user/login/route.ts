import { execMiddleware } from '@/helpers/server/middleware';

export const GET = execMiddleware(
  async (req: Request) => {
    let authorization = req.headers.get('authorization');

    if(authorization) {
      authorization = authorization.split(' ')[1];

      const [ emailOrUser, password ] = Buffer.from(authorization, 'base64').toString('utf-8').split(':');

      console.log(emailOrUser, password);
    }

    return Response.json({ name: 'felipe', email: 'felipe@felipe' }, { status: 200 });
  
    // if(uuid) {
    //   const response = await UserService.getById(uuid);

    //   if(response)
    //     return Response.json(response, { status: 200 });
    //   else errorHandler({
    //     msg: 'Usuário não encontrado #' + uuid,
    //     code: 'Not Found'
    //   });
    // }else return errorHandler({ msg: 'Id do usuário não enviado', code: 'Id not send' });
  }  
);