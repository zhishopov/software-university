const middlewares = [];

// Add every middleware to the list of middlewares (array)
function use(middleware) {
  middleware.push(middleware);
}

function execute(request, response) {
  let index = 0;

  const next = () => {
    if (index >= middlewares.length) {
      return;
    }

    middlewares[index](request, response, next);
    index++;
  };

  next();
}

export default {
  use,
  execute,
};
