document.addEventListener('DOMContentLoaded', () => {
    fetch('places.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('places-container');
            data.forEach(place => {
                const card = document.createElement('div');
                card.className = 'place-card';
                card.innerHTML = `
                    <h2>${place.name}</h2>
                    <p><strong>المحافظة:</strong> ${place.governorate}</p>
                    <p><strong>الوصف:</strong> ${place.desc}</p>
                    <p><strong>التاريخ:</strong> ${place.history}</p>
                    <p><strong>الأصل:</strong> ${place.origin}</p>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error('خطأ في تحميل البيانات:', error));
});
