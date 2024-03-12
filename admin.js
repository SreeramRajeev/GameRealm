
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
console.log(allDropdown)
const sidebar = document.getElementById('sidebar');

allDropdown.forEach(item => {
	const a = item.parentElement.querySelector('a:first-child');
	a.addEventListener('click', function (e) {
		e.preventDefault();
		if (!this.classList.contains('active')) {
			allDropdown.forEach(i => {
				const aLink = i.parentElement.querySelector('a:first-child');

				aLink.classList.remove('active');
				i.classList.remove('show');
			})
		}

		this.classList.toggle('active');
		item.classList.toggle('show');
	})
})


// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');


toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if (sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item => {
			item.textContent = '-'
		})
		// when sidebar is hide i dont have active and site dropdown
		allDropdown.forEach(item => {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item => {
			item.textContent = item.dataset.text;
		})
	}
})

sidebar.addEventListener('mouseleave', function () {
	console.log(this)
	if (this.classList.contains('hide')) {
		allDropdown.forEach(item => {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item => {
			item.textContent = '-'
		})
	}
})

// PROFILE DROPDOWN
const imgProfile = document.querySelector('.profile-img');
const dropdownProfile = document.querySelector('.profile-link');

imgProfile.addEventListener('click', function () {
	dropdownProfile.classList.toggle('show');
})

const allProgress = document.querySelectorAll('main .card .progress');

allProgress.forEach(item => {

	item.style.setProperty('--value', item.dataset.value)
})

document.addEventListener("DOMContentLoaded", () => {
  const chatForm = document.getElementById("chat-form");
  const chatBox = document.querySelector(".chat-box");

  chatForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const inputField = chatForm.querySelector("input[type='text']");
    const messageText = inputField.value;

    if (!messageText) return;

    displayMessage("me", messageText);
    inputField.value = "";

    const botResponse = await generateBotResponse(messageText);
    displayMessage("Deoxy", botResponse);
  });

  async function generateBotResponse(userMessage) {
    // Simulate a delay for bot response (you can replace this with your actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Replace this with your logic to generate bot responses
    const responses = [
      "Hello there! How can I assist you?",
      "Welcome to GameRealm! Ready for some gaming fun?",
      "Got any gaming questions? I'm here to help!",
      "Exploring new games? I've got some recommendations!",
      "Level up your gaming experience with GameRealm!",
    ];

    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  }

  function displayMessage(sender, message) {
    const msgClass = sender === "me" ? "msg me" : "msg";
    const profileImage = sender === "me" ? "vector.jpg" : "arc.png"; // Replace with appropriate image URLs

    const chatMessage = `
      <div class="${msgClass}">
        <img src="${profileImage}" alt="Profile Image">
        <div class="chat">
          <div class="profile">
            <span class="username" style="color: white">${sender}</span>
            <span class="time">${getCurrentTime()}</span>
          </div>
          <p>${message}</p>
        </div>
      </div>
    `;

    const lastMessage = chatBox.querySelector(".msg:last-of-type p");
    if (lastMessage && lastMessage.textContent === "Incoming grenade! Take cover!") {
      lastMessage.closest(".msg").insertAdjacentHTML("afterend", chatMessage);
    } else {
      chatBox.insertAdjacentHTML("beforeend", chatMessage);
    }

    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }
});


document.addEventListener("DOMContentLoaded", () => {
        const searchForm = document.getElementById("search-form");
        const searchInput = document.getElementById("search-input");
        const searchLink = document.getElementById("search-link");

        searchLink.addEventListener("click", (event) => {
            event.preventDefault();
            const searchText = searchInput.value.trim();
            if (searchText) {
                const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`;
                window.open(searchUrl, "_blank");
                searchInput.value = "";
            }
        });
    });



