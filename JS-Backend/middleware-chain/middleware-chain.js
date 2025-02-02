const middlewares = [];

// Add every middleware to the list of middlewares (array)
function use(middleware) {
  middlewares.push(middleware);
}

function execute(request, response) {
  let index = 0;

  const next = () => {
    if (index >= middlewares.length) {
      return;
    }

    middlewares[index++](request, response, next);
  };

  next();
}

export default {
  use,
  execute,
};
