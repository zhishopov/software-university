async function lockedProfile() {
  const main = document.getElementById("main");
  const url = "http://localhost:3030/jsonstore/advanced/profiles";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching profiles: ${response.statusText}`);
    }

    const data = await response.json();
    const profiles = Object.values(data);

    main.replaceChildren();

    profiles.forEach((profile, index) => {
      const username = profile.username || "N/A";
      const email = profile.email || "N/A";
      const age = profile.age || "N/A";

      const profileDiv = document.createElement("div");
      profileDiv.className = "profile";

      profileDiv.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user${index}Locked" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="user${index}Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user${index}Username" value="${username}" disabled readonly />
            
            <div class="userInfo" style="display: none;">
              <hr>
              <label>Email:</label>
              <input type="email" name="user${index}Email" value="${email}" disabled readonly />
              <label>Age:</label>
              <input type="text" name="user${index}Age" value="${age}" disabled readonly />
            </div>
            
            <button>Show more</button>`;

      main.appendChild(profileDiv);

      const button = profileDiv.querySelector("button");
      const unlockRadio = profileDiv.querySelector(
        `input[name="user${index}Locked"][value="unlock"]`
      );
      const userInfo = profileDiv.querySelector(".userInfo");

      button.addEventListener("click", () => {
        if (!unlockRadio.checked) {
          return;
        }

        if (userInfo.style.display === "none") {
          userInfo.style.display = "block";
          button.textContent = "Hide info";
        } else {
          userInfo.style.display = "none";
          button.textContent = "Show more";
        }
      });
    });
  } catch (error) {
    main.textContent = "Error";
  }
}
