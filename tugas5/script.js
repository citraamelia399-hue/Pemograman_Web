
const searchForm = document.querySelector("#search-form");
const usernameInput = document.querySelector("#username");
const message = document.querySelector("#message");
const profile = document.querySelector("#profile");

searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();

    if (!username) return;

    // Kosongkan hasil sebelumnya
    profile.innerHTML = "";

    // Tampilkan loading
    message.textContent = "Loading...";
    message.className = "loading";

    try {
        // Memanggil GitHub API
        const response = await fetch(
            `https://api.github.com/users/${encodeURIComponent(username)}`
        );

        // Jika user tidak ditemukan
        if (response.status === 404) {
            throw new Error("User tidak ditemukan");
        }

        // Menangani error lainnya
        if (!response.ok) {
            throw new Error("Terjadi kesalahan saat mengambil data");
        }

        // Mengubah response menjadi JSON
        const data = await response.json();

        // Tampilkan profil
        profile.innerHTML = `
            <div class="profile-card">
                <img src="${data.avatar_url}" alt="Avatar GitHub">

                <h2>${data.name || data.login}</h2>

                <p class="bio">
                    ${data.bio || "Bio tidak tersedia"}
                </p>

                <div class="repos">
                    Repositori Publik: ${data.public_repos}
                </div>

                <a href="${data.html_url}" target="_blank" rel="noopener noreferrer">
                    Lihat Profil GitHub
                </a>
            </div>
        `;

        // Hapus pesan loading
        message.textContent = "";

    } catch (error) {
        message.textContent = error.message;
        message.className = "error";
        profile.innerHTML = "";
    }
});
