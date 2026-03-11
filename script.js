document.addEventListener('DOMContentLoaded', () => {
    fetch('places.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('places-container');
            const filterSelect = document.getElementById('filter');

            function displayPlaces(places) {
                container.innerHTML = '';
                places.forEach(place => {
                    const card = document.createElement('div');
                    card.className = 'place-card';
                    card.innerHTML = `
                        <h2>${place.name}</h2>
                        <p><strong>المحافظة:</strong> ${place.governorate}</p>
                        <p><strong>التصنيف:</strong> ${place.category}</p>
                        <p><strong>الوصف:</strong> ${place.desc}</p>
                    `;
                    container.appendChild(card);
                });
            }

            displayPlaces(data);

            filterSelect.addEventListener('change', (e) => {
                const selectedGov = e.target.value;
                if (selectedGov === 'all') {
                    displayPlaces(data);
                } else {
                    const filtered = data.filter(p => p.governorate === selectedGov);
                    displayPlaces(filtered);
                }
            });
        });
});
