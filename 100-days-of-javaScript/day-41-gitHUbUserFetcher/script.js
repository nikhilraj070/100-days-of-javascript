// Get references to HTML elements
const searchForm = document.getElementById('search-form');
const usernameInput = document.getElementById('username-input');
const profileContainer = document.getElementById('profile-container');

// GitHub API base URL
const API_URL = 'https://api.github.com/users/';

// Listen for form submission
searchForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from actually submitting
    const username = usernameInput.value.trim();

    if (username) {
        getUser(username);
        usernameInput.value = ''; // Clear the input field
    }
});

/**
 * Fetches user data from the GitHub API.
 * @param {string} username - The GitHub username to search for.
 */
async function getUser(username) {
    try {
        const response = await fetch(API_URL + username);

        // Check if the user was found
        if (!response.ok) {
            throw new Error('User not found');
        }

        const userData = await response.json();
        createProfileCard(userData);

    } catch (error) {
        displayError(error.message);
    }
}

/**
 * Creates and displays the user profile card in the HTML.
 * @param {object} user - The user data object from the API.
 */
function createProfileCard(user) {
    const joinedDate = new Date(user.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const cardHTML = `
        <div class="profile-header">
            <img src="${user.avatar_url}" alt="${user.name}'s avatar" class="profile-avatar">
            <div class="profile-info">
                <h2>${user.name || user.login}</h2>
                <p>@<a href="${user.html_url}" target="_blank">${user.login}</a></p>
                <p>Joined: ${joinedDate}</p>
            </div>
        </div>
        <p class="profile-bio">${user.bio || 'This profile has no bio.'}</p>
        <div class="profile-stats">
            <div class="stat">
                <h3>${user.public_repos}</h3>
                <p>Repos</p>
            </div>
            <div class="stat">
                <h3>${user.followers}</h3>
                <p>Followers</p>
            </div>
            <div class="stat">
                <h3>${user.following}</h3>
                <p>Following</p>
            </div>
        </div>
    `;

    profileContainer.innerHTML = cardHTML;
    profileContainer.style.display = 'block'; // Make the container visible
}

/**
 * Displays an error message in the profile container.
 * @param {string} message - The error message to display.
 */
function displayError(message) {
    const errorHTML = `<p class="error-message">${message}</p>`;
    profileContainer.innerHTML = errorHTML;
    profileContainer.style.display = 'block'; // Make the container visible to show the error
}