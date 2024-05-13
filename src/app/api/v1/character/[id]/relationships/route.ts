export function POST (req: Request) {

  const url = new URL(req.url);
  const uuid = url.pathname.match(/\/character\/(.*)/);
  console.log(uuid);

  const newItem = req.body;
  console.log(newItem);
  
  return Response.json({ Msg: 'your message' }, { status: 200 });
}

export function PUT (req: Request) {

  const url = new URL(req.url);
  const uuid = url.pathname.match(/\/character\/(.*)/);
  console.log(uuid);

  const updatedItem = req.body;
  console.log(updatedItem);
  
  return Response.json({ Msg: 'your message' }, { status: 200 });
}