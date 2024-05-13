export function GET (req: Request) { 

  const url = new URL(req.url);
  const uuid = url.pathname.match(/\/book\/(.*)/);
  
  if(uuid) {
    console.log(uuid[1]);
    return Response.json({ Msg: 'Id enviado: ' + uuid[1] }, { status: 200 });
  }else return Response.json({ Msg: 'Book Id not sent' }, { status: 400 });
}

export function DELETE (req: Request) {

  const url = new URL(req.url);
  const uuid = url.pathname.match(/\/book\/(.*)/);
  
  if(uuid) {
    console.log(uuid[1]);
    return Response.json({ status: 204 });
  }else return Response.json({ Msg: 'Bookshelf Id not sent' }, { status: 400 });
}