var  createError  =  require ( 'http-errors' ) 
var  express  =  require ( 'express' ) 
var  app  =  express ( )

aplicación_use ( function  ( req ,  res ,  next )  { 
  if  ( ! req . user )  return  next ( createError ( 401 ,  'Inicie sesión para ver esta página.' ) ) 
  next ( ) 
} )
fs . readFile ( 'foo.txt' ,  function  ( err ,  buf )  { 
    if  ( err )  { 
      if  ( err . code  ===  'ENOENT' )  { 
        var  httpError  =  createError ( 404 ,  err ,  {  exponer : falso  } ) 
      }  else  { 
        var  httpError  =  createError ( 500 ,  error) 
      } 
    } 
  } )
  var  err  =  new  createError . Noencontrado ("error" );