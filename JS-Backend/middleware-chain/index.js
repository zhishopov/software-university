import middlewareChain from "./middleware-chain.js";

middlewareChain.use((request, response, next) => {
  console.log("First Middleware");
  request.user = "Kirk";
  next();
});

middlewareChain.use((request, response, next) => {
  console.log("Second Middleware");
  request.age = 20;
  next();
});

middlewareChain.use((request, response) => {
  console.log("Third Middleware");
  console.log(request);
});

middlewareChain.execute({}, {});
