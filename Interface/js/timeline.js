const timelineData = [
    {
        year: 1800,
        title: "First Electric Battery",
        description: "Alessandro Volta invents the voltaic pile, the first electric battery, marking the beginning of practical electricity."
    },
    {
        year: 1837,
        title: "Electric Telegraph",
        description: "Samuel Morse develops the electric telegraph, revolutionizing long-distance communication."
    },
    {
        year: 1876,
        title: "Telephone Invention",
        description: "Alexander Graham Bell patents the telephone, enabling voice communication over long distances."
    },
    {
        year: 1879,
        title: "Electric Light Bulb",
        description: "Thomas Edison perfects the practical electric light bulb, transforming how we live and work."
    },
    {
        year: 1903,
        title: "First Powered Flight",
        description: "The Wright brothers achieve the first successful powered flight, ushering in the age of aviation."
    },
    {
        year: 1927,
        title: "First Television Broadcast",
        description: "Philo Farnsworth demonstrates the first electronic television system, changing entertainment forever."
    },
    {
        year: 1947,
        title: "Transistor Invention",
        description: "The transistor is invented at Bell Labs, becoming the foundation of modern electronics."
    },
    {
        year: 1969,
        title: "First Moon Landing",
        description: "Apollo 11 lands on the moon, marking humanity's first steps on another celestial body."
    },
    {
        year: 1973,
        title: "First Mobile Phone Call",
        description: "Martin Cooper makes the first mobile phone call, beginning the wireless communication revolution."
    },
    {
        year: 1983,
        title: "Internet Protocol Suite",
        description: "TCP/IP becomes the standard protocol for the Internet, enabling global connectivity."
    },
    {
        year: 1989,
        title: "World Wide Web",
        description: "Tim Berners-Lee proposes the World Wide Web, revolutionizing information sharing."
    },
    {
        year: 1997,
        title: "First Smartphone",
        description: "Nokia releases the first smartphone, combining phone and PDA capabilities."
    },
    {
        year: 2007,
        title: "iPhone Revolution",
        description: "Apple releases the first iPhone, transforming mobile computing and communication."
    },
    {
        year: 2010,
        title: "iPad Launch",
        description: "Apple introduces the iPad, creating a new category of personal computing devices."
    },
    {
        year: 2012,
        title: "Commercial Space Flight",
        description: "SpaceX's Dragon becomes the first commercial spacecraft to dock with the International Space Station."
    },
    {
        year: 2014,
        title: "Quantum Computing Milestone",
        description: "First commercial quantum computer is announced, marking a new era in computing."
    },
    {
        year: 2016,
        title: "AI Revolution",
        description: "AlphaGo defeats world champion in Go, demonstrating AI's potential in complex problem-solving."
    },
    {
        year: 2018,
        title: "Commercial Space Tourism",
        description: "First commercial space tourism flights are announced, making space travel accessible to civilians."
    },
    {
        year: 2020,
        title: "COVID-19 Vaccine Development",
        description: "mRNA technology enables rapid development of COVID-19 vaccines, revolutionizing vaccine development."
    },
    {
        year: 2022,
        title: "Web3 and Blockchain",
        description: "Blockchain technology and Web3 concepts gain mainstream adoption, transforming digital ownership."
    },
    {
        year: 2023,
        title: "AI Language Models",
        description: "Advanced AI language models become widely available, transforming how we interact with technology."
    }
];

// Function to create timeline items
function createTimeline() {
    const timeline = document.querySelector('.timeline');
    
    timelineData.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-year">${item.year}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <p class="timeline-description">${item.description}</p>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Initialize timeline when DOM is loaded
document.addEventListener('DOMContentLoaded', createTimeline); 