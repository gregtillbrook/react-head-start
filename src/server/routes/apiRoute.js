
export function getUsers(req, res){
  //Mock response - this is where you'd fetch data from database/external source etc
  res.json({
    users:[
      { name:'Bruce Banner' },
      { name:'Tony Stark' },
      { name:'Bruce Wayne' },
    ]
  });
}