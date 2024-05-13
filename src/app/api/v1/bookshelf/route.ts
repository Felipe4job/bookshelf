export function POST (req: Request) {

  const newItem = req.body;
  console.log(newItem);
  
  return Response.json({ Msg: 'your message' }, { status: 200 });
}

export function PUT (req: Request) {

  const updatedItem = req.body;
  console.log(updatedItem);
  
  return Response.json({ Msg: 'your message' }, { status: 200 });
}