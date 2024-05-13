export function GET (req: Request) {

  const url = new URL(req.url);
  
  if(url.searchParams.has('bookId')) {
    const bookId =  url.searchParams.get('bookId');
    return Response.json({ Msg: 'Id enviado: ' + bookId }, { status: 200 });
  }else return Response.json({ Msg: 'Book Id not sent' }, { status: 400 });
}