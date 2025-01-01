async function loadRepos() {
  const username = document.getElementById("username").value;
  const list = document.getElementById("repos");

  const url = `https://api.github.com/users/${username}/repos`;

  try {
    const response = await fetch(url);
    if (response.ok == false) {
      const message = await response.json();
      throw message;
    }
    const data = await response.json();
    console.log(data);

    list.replaceChildren();
    data.forEach((repo) => {
      const link = document.createElement("a");
      link.href = repo.html_url;
      link.textContent = repo.full_name;

      const listItem = document.createElement("li");
      listItem.appendChild(link);
      list.appendChild(listItem);
    });
  } catch (error) {
    list.textContent = error.message;
  }
}
