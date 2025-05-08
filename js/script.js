// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add the pulse animation style
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
            50% {
                transform: translate(-50%, -50%) scale(1.5);
                opacity: 0.5;
            }
            100% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);

    console.log('DOM loaded, initializing map...');
    
    // Check if the map container exists
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
        console.error('Map container not found!');
        return;
    }

    try {
        // Initialize the map
        const map = L.map('map', {
            center: [0, 0],
            zoom: 2,  // Increased zoom level from 1 to 2
            zoomControl: false,  // Disable zoom controls
            scrollWheelZoom: false,  // Disable mouse wheel zoom
            dragging: false,  // Disable dragging
            touchZoom: false,  // Disable touch zoom
            doubleClickZoom: false,  // Disable double-click zoom
            boxZoom: false,  // Disable box zoom
            keyboard: false  // Disable keyboard controls
         });

        console.log('Map initialized successfully');

        // Add the tile layer
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(map);

        console.log('Tile layer added successfully');

        // Array to store markers
        let markers = [];

        // Function to get a random color
        function getRandomColor() {
            const colors = [
                '#ff25c1', // pink
                '#00ffff', // cyan
                '#ae00ff', // purple
                '#ff0000', // red
                '#00ff00', // green
                '#ffff00', // yellow
                '#ff00ff', // magenta
                '#ff9900', // orange
                '#00ff99', // mint
                '#9900ff'  // violet
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        // Function to create a custom marker icon with a specific color
        function createCustomIcon(color) {
            return L.divIcon({
                className: 'custom-marker',
                html: `
                    <div style="
                        position: relative;
                        width: 20px;
                        height: 20px;
                    ">
                        <div style="
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            width: 12px;
                            height: 12px;
                            background-color: ${color};
                            border-radius: 50%;
                            border: 2px solid ${color};
                            animation: pulse 1.5s ease-in-out infinite;
                        "></div>
                        <div style="
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            width: 20px;
                            height: 20px;
                            background-color: ${color}33;
                            border-radius: 50%;
                            animation: pulse 1.5s ease-in-out infinite;
                            animation-delay: 0.75s;
                        "></div>
                    </div>
                `,
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            });
        }

        // Function to save markers to localStorage
        function saveMarkers() {
            const markersData = markers.map(marker => ({
                lat: marker.getLatLng().lat,
                lng: marker.getLatLng().lng,
                name: marker.options.title
            }));
            localStorage.setItem('mapMarkers', JSON.stringify(markersData));
        }

        // Function to load markers from localStorage
        function loadMarkers() {
            const savedMarkers = localStorage.getItem('mapMarkers');
            if (savedMarkers) {
                const markersData = JSON.parse(savedMarkers);
                markersData.forEach(markerData => {
                    const marker = L.marker([markerData.lat, markerData.lng], {
                        icon: createCustomIcon(markerData.color || getRandomColor()),
                        title: markerData.name
                    }).addTo(map);
                    markers.push(marker);
                });
            }
        }

        // Load saved markers
        loadMarkers();

        // Function to search for a city
        async function searchCity() {
            const cityInput = document.getElementById('cityInput');
            const city = cityInput.value.trim();

            if (!city) {
                alert('Please enter a city name');
                return;
            }

            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`);
                const data = await response.json();

                if (data.length > 0) {
                    const { lat, lon, display_name } = data[0];
                    
                    // Check if this location already exists
                    const existingMarker = markers.find(marker => 
                        marker.getLatLng().lat === parseFloat(lat) && 
                        marker.getLatLng().lng === parseFloat(lon)
                    );

                    if (existingMarker) {
                        alert('This location is already marked on the map.');
                        return;
                    }

                    const color = getRandomColor();
                    // Add new marker
                    const marker = L.marker([lat, lon], {
                        icon: createCustomIcon(color),
                        title: display_name
                    }).addTo(map);

                    markers.push(marker);
                    
                    // Save all markers with their colors
                    const markersData = markers.map(marker => ({
                        lat: marker.getLatLng().lat,
                        lng: marker.getLatLng().lng,
                        name: marker.options.title,
                        color: marker.options.icon.options.html.match(/background-color: (#[0-9a-fA-F]{6})/)[1]
                    }));
                    localStorage.setItem('mapMarkers', JSON.stringify(markersData));
                    
                    // Clear the input
                    cityInput.value = '';
                } else {
                    alert('City not found. Please try another name.');
                }
            } catch (error) {
                console.error('Error searching for city:', error);
                alert('An error occurred while searching for the city.');
            }
        }

        // Add event listener to the search button
        document.getElementById('searchButton').addEventListener('click', searchCity);

        // Add event listener for Enter key
        document.getElementById('cityInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchCity();
            }
        });

    } catch (error) {
        console.error('Error initializing map:', error);
    }
}); 