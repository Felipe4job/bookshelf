export function GET (req: Request) {

  const url = new URL(req.url);
  
  if(url.searchParams.has('bookshelfId')) {
    const bookshelfId =  url.searchParams.get('bookshelfId');
    return Response.json({ Msg: 'Id enviado: ' + bookshelfId }, { status: 200 });
  }else return Response.json({ Msg: 'Bookshelf Id not sent' }, { status: 400 });
}