import http from "http";
import homeView from "./views/home/index.js";
import addCatView from "./views/addCat.js";
import addBreedView from "./views/addBreed.js";
import siteCss from "./content/styles/site.css.js";

const cats = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1510704652036-67838c2cfab6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2lhbWVzZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Whiskers",
    breed: "Siamese",
    description: "A playful and curious Siamese cat with striking blue eyes.",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1583404283135-ee11fa80b2a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNpYW4lMjBjYXR8ZW58MHx8MHx8fDA%3D",
    name: "Mittens",
    breed: "Persian",
    description: "A fluffy Persian cat who loves lounging in sunny spots.",
  },
  {
    id: 3,
    imageUrl:
      "https://media.istockphoto.com/id/1280045774/photo/maine-coon-in-the-garden.webp?a=1&b=1&s=612x612&w=0&k=20&c=RZcP8vOkxT6tQOClCVNilPFyl1HgK6V25eyIS8mdGso=",
    name: "Shadow",
    breed: "Maine Coon",
    description:
      "A large and gentle Maine Coon with a bushy tail and a loving nature.",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1598463166228-c0f90d180918?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVuZ2FsJTIwY2F0fGVufDB8fDB8fHww",
    name: "Luna",
    breed: "Bengal",
    description: "An energetic Bengal cat with a stunning spotted coat.",
  },
  {
    id: 5,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1663127210166-797379d03f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJpdGlzaCUyMHNob3J0aGFpciUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Oliver",
    breed: "British Shorthair",
    description:
      "A calm and friendly British Shorthair with a plush gray coat.",
  },
];

const server = http.createServer((request, response) => {
  const url = request.url;

  if (url === "/styles/site.css") {
    response.writeHead(200, {
      "content-type": "text/css",
    });
    response.write(siteCss);

    return response.end();
  }

  response.writeHead(200, {
    "content-type": "text/html",
  });

  if (url === "/") {
    response.write(homeView(cats));
  } else if (url === "/cats/add-breed") {
    response.write(addBreedView());
  } else if (url === "/cats/add-cat") {
    response.write(addCatView());
  }

  response.end();
});

server.listen("3000");
console.log("Server listening on http://localhost:3000...");
