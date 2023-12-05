exports.handler = async function(event, context) {
    const statusCode = event.queryStringParameters && event.queryStringParameters.code
      ? parseInt(event.queryStringParameters.code, 10)
      : 500; 
  
    return {
      statusCode: 302, 
      headers: {
        Location: '/', 
      },
      body: '',
    };
  };