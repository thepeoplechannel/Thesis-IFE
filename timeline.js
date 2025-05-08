// Timeline data
const timelineData = [
    {
        year: '1400',
        title: 'Sailing',
        description: 'Alessandro Volta creates the first practical battery, marking the beginning of electrical power storage.'
    },
    {
        year: '1044',
        title: 'Compass',
        description: 'By enabling reliable navigation even without the stars, the compass expanded exploration, connecting distant worlds and broadening human horizons.'
    },
    {
        year: '1250–1300',
        title: 'Mechancial Clock',
        description: 'Clocks standardized timekeeping, making daily life more synchronized and enabling coordination across growing cities and institutions.'
    },
    {
        year: '1455',
        title: 'Printing Press',
        description: 'Mass printing made books and ideas widely accessible for the first time, sparking revolutions in communication, education, and social movements.'
    },
    {
        year: '1765',
        title: 'Steam Engine',
        description: 'Steam power fueled the Industrial Revolution, accelerating travel and production, compressing time and space in ways never seen before.'
    },
    {
        year: '1804',
        title: 'Railways',
        description: 'Railroads rapidly connected cities and regions, reshaping travel, trade, and personal mobility, bringing people closer in days instead of weeks.'
    },
    {
        year: '1804',
        title: 'Steamboat',
        description: 'Steamships cut travel time over rivers and seas, expanding commerce and personal travel, and linking continents more efficiently.'
    },
    {
        year: '1826',
        title: 'Photography',
        description: 'Photographs captured real moments, allowing people to share their world visually, preserving memory and shaping collective identity.'
    },
    {
        year: '1844',
        title: 'Telegraph',
        description: 'The telegraph made communication nearly instantaneous, transforming how people interacted over long distances and reshaping global awareness.'
    },
    {
        year: '1876',
        title: 'Telephone',
        description: 'Hearing someones voice across large distances made relationships more immediate, personal, and emotionally connected.'
    },
    {
        year: '1879',
        title: 'Electric Light',
        description: 'Electric lighting extended the human day, transforming urban life, work, and the rhythm of social interaction across societies.'
    },
    {
        year: '1885',
        title: 'Automobile',
        description: 'Cars gave individuals freedom to travel independently, decentralizing life and changing how communities formed and interacted.'
    },
    {
        year: '1901',
        title: 'Radio',
        description: 'Radio broadcasted news, music, and voices to entire nations. These shared moments played a role in uniting people through sound.'
    },
    {
        year: '1903',
        title: 'Airplane',
        description: 'Flight turned once-distant continents into reachable destinations, shrinking the world and opening up new cultural and personal exchanges.'
    }
   
];

// Function to create timeline items
function createTimeline() {
    const timeline = document.getElementById('timeline');
    
    timelineData.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-year">${item.year}</div>
                <div class="timeline-title">${item.title}</div>
                <div class="timeline-description">${item.description}</div>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Initialize timeline when the page loads
document.addEventListener('DOMContentLoaded', createTimeline); 