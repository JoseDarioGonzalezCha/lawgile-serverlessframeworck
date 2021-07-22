'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Olá mundo! vamo pa encima!',
        input: event,
      },
      null,
      2
    ),
  };
};
