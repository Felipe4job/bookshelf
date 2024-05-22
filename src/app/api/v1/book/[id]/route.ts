type Params = {
  id: string
}

export function GET (context: { params: Params }) { 

  const uuid = context.params.id;
  if(uuid) {
    console.log(uuid);
    return Response.json({ Msg: 'Id enviado: ' + uuid }, { status: 200 });
  }else return Response.json({ Msg: 'Book Id not sent' }, { status: 400 });
}

export function DELETE (context: { params: Params }) {

  const uuid = context.params.id;
  
  if(uuid) {
    console.log(uuid);
    return Response.json({ status: 204 });
  }else return Response.json({ Msg: 'Bookshelf Id not sent' }, { status: 400 });
}