const API_KEY = 'AIzaSyAwRliPxigW7QmgRvkxbmULtfiueLyppH4'; 
const CHANNEL_ID = 'UCSfTD5RbK4aLrVuAlE2o-6Q'; 

async function fetchSubscribers() {
  try {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      const count = parseInt(data.items[0].statistics.subscriberCount);
      // Format angka pakai titik (contoh: 1.396)
      const formattedCount = count.toLocaleString("id-ID");
      document.getElementById("subscriber-count").innerText = formattedCount;
    } else {
      document.getElementById("subscriber-count").innerText = "Data tidak ditemukan";
    }
  } catch (error) {
    console.error("Gagal mengambil data subscriber:", error);
    document.getElementById("subscriber-count").innerText = "Error";
  }
}

// Jalankan saat halaman dibuka
fetchSubscribers();
// Update setiap 10 detik
setInterval(fetchSubscribers, 10000);
