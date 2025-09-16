document.addEventListener('DOMContentLoaded', () => {
    const dataURL = 'https://script.google.com/macros/s/AKfycbwks0aSGwh4hHtbQy2KAUoMnRcVi-HPrnCcIlufr5M2bSwhljlkEt5PLvu9_C8bnUXL/exec';
    const tableBody = document.getElementById('anggota-table-body');
    const table = document.getElementById('anggota-table');
    const spinner = document.getElementById('loading-spinner');

    async function fetchAnggota() {
        try {
            const response = await fetch(dataURL);
            const result = await response.json();

            if (result.result === 'success') {
                displayAnggota(result.data);
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            console.error('Gagal mengambil data anggota:', error);
            spinner.innerHTML = `<p class="text-danger">Maaf, gagal memuat data anggota. Coba lagi nanti.</p>`;
        }
    }

    function displayAnggota(anggotaList) {
        tableBody.innerHTML = '';
        anggotaList.reverse();

        if (anggotaList.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="4" class="text-center">Belum ada anggota yang mendaftar.</td></tr>';
        } else {
            anggotaList.forEach((anggota, index) => {
                const row = `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${anggota.nama}</td>
                        <td>${anggota.fakultas}</td>
                        <td>${anggota.asal}</td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });
        }

        spinner.style.display = 'none';
        table.style.display = 'table';
    }

    fetchAnggota();
});
