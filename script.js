const API_KEY = 'AIzaSyAwRliPxigW7QmgRvkxbmULtfiueLyppH4'; // ganti ini
const CHANNEL_ID = 'UCj3pfi-cJo5IVZiK_zOesMA'; // ganti ini

async function fetchSubscribers() {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  const count = data.items[0].statistics.subscriberCount;
  document.getElementById("subscriber-count").innerText = count;
}

// Jalankan saat halaman dibuka
fetchSubscribers();
// Update setiap 10 detik
setInterval(fetchSubscribers, 10000);

