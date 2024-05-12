export function GET (req: Request) {

  const url = new URL(req.url);
  
  if(url.searchParams.has('bookshelfId'))
    return Response.json({ Msg: 'your message' }, { status: 200 });
  else return Response.json({ Msg: 'Bookshelf Id not sent' }, { status: 400 });
}

export function POST (req: Request) {

  const newBook = req.body;
  console.log(newBook);
  
  return Response.json({ Msg: 'your message' }, { status: 200 });
}

export function PUT (req: Request) {

  const updateBook = req.body;
  console.log(updateBook);
  
  return Response.json({ Msg: 'your message' }, { status: 200 });
}

export function DELETE (req: Request) {

  const url = new URL(req.url);
  
  if(url.searchParams.has('bookId'))
    return Response.json({ status: 204 });
  else return Response.json({ Msg: 'Book Id not sent' }, { status: 400 });
}