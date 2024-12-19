
        function updateTheme() {
            const hour = new Date().getHours();
            if (hour >= 6 && hour < 18) {
                document.body.classList.add('day');
                document.body.classList.remove('night');
            } else {
                document.body.classList.add('night');
                document.body.classList.remove('day');
            }
        }

        let imageInterval;
        window.onload = function () {
            updateTheme();
            const interval = parseInt(prompt("Enter the image change interval in milliseconds (e.g., 3000):", "3000"));
            if (!isNaN(interval) && interval > 0) {
                imageInterval = setInterval(changeImage, interval);
            } else {
                alert("Invalid interval. No image changes will occur.");
            }
        };

        const images = [
            "https://via.placeholder.com/800x400?text=Image+1",
            "https://via.placeholder.com/800x400?text=Image+2",
            "https://via.placeholder.com/800x400?text=Image+3"
        ];
        let currentImageIndex = 0;

        function changeImage() {
            const imageElement = document.getElementById('dynamic-image');
            currentImageIndex = (currentImageIndex + 1) % images.length;
            imageElement.src = images[currentImageIndex];
        }

        function generateTable() {
            const min = parseInt(document.getElementById('min-value').value);
            const max = parseInt(document.getElementById('max-value').value);
            if (isNaN(min) || isNaN(max) || min >= max) {
                alert("Please enter a valid numeric range where min < max.");
                return;
            }

            const table = document.getElementById('random-table');
            table.innerHTML = "";

            for (let i = 0; i < 10; i++) {
                const row = document.createElement('tr');
                for (let j = 0; j < 10; j++) {
                    const cell = document.createElement('td');
                    cell.textContent = Math.floor(Math.random() * (max - min + 1)) + min;
                    cell.className = (i + j) % 2 === 0 ? 'black' : 'white';
                    row.appendChild(cell);
                }
                table.appendChild(row);
            }
        }