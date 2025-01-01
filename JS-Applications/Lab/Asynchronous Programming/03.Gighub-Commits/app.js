async function loadCommits() {
  const username = document.getElementById("username").value;
  const repo = document.getElementById("repo").value;
  const commits = document.getElementById("commits");

  const url = `https://api.github.com/repos/${username}/${repo}/commits`;

  try {
    const response = await fetch(url);
    if (response.ok == false) {
      const message = await response.json();
      throw message;
    }
    const data = await response.json();

    commits.replaceChildren();
    data.forEach((entry) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${entry.commit.author.name}: ${entry.commit.message}`;
      commits.appendChild(listItem);
    });
  } catch (error) {
    commits.replaceChildren();
    const listItem = document.createElement("li");
    listItem.textContent = `Error: ${error.status} (Not Found)`;
    commits.appendChild(listItem);
  }
}
