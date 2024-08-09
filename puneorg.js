document.addEventListener('DOMContentLoaded', () => {
    const events = [
        {
            name: "Dreams Event Management",
            ratings: "4.8/5",
            votes: "",
            TypesofEvents: ["Weddings", "Corporate Events", "Birthdays", "Concerts"],
            website: ["www.dreamseventmanagement.com"],
            contact: ["+91 9876543210"],
            poster: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGV2ZW50fGVufDB8fDB8fHww",
            address: "Dreams Avenue Koregaon Park Pune Maharashtra"
        },
        {
            name: "Purple Grapes Events & Entertainment",
            ratings: "4.5/5",
            votes: "",
            TypesofEvents: ["Corporate Events", "Weddings", "Product Launches", "Conferences"],
            website: ["www.purplegrapesevents.com"],
            contact: ["+91 8765432109"],
            poster: "https://images.unsplash.com/photo-1513623935135-c896b59073c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGV2ZW50fGVufDB8fDB8fHww",
            address: "Baner Pune Maharashtra"
        },
        {
            name: "White Copper Entertainment",
            ratings: "4.7/5",
            votes: "",
            TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings", "Exhibitions"],
            website: ["www.whitecopperentertainment.com"],
            contact: ["+91 9988776655"],
            poster: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
            address: "Kalyani Nagar Pune Maharashtra"
        },
        {
            name: "Dream Day Creations",
            ratings: "4.6/5",
            votes: "",
            TypesofEvents: ["Weddings", "Corporate Parties", "Cultural Events", "Anniversaries"],
            website: ["www.dreamdaycreations.com"],
            contact: ["+91 9876543211"],
            poster: "https://plus.unsplash.com/premium_photo-1681487469745-91d1d8a5836b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
            address: "Shivaji Nagar Pune Maharashtra"
        },
        {
            name: "Mark 1 Events & Productions",
            ratings: "4.4/5",
            votes: "",
            TypesofEvents: ["Corporate Events", "Weddings", "Product Launches", "Music Festivals"],
            website: ["www.mark1events.com"],
            contact: ["+91 9876543212"],
            poster: "https://images.unsplash.com/photo-1425421598808-4a22ce59cc97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGV2ZW50fGVufDB8fDB8fHww",
            address: "Camp Area Pune Maharashtra"
        },
        {
            name: "Show Makers",
            ratings: "4.3/5",
            votes: "",
            TypesofEvents: ["Corporate Events", "Weddings", "Exhibitions", "Concerts"],
            website: ["www.showmakerspune.com"],
            contact: ["+91 9876543213"],
            poster: "https://images.unsplash.com/photo-1484156818044-c040038b0719?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGV2ZW50fGVufDB8fDB8fHww",
            address: "Kothrud Pune Maharashtra"
        },
        {
            name: "Seven Events",
            ratings: "4.2/5",
            votes: "",
            TypesofEvents: ["Corporate Events", "Weddings", "Social Events", "Conferences"],
            website: ["www.sevenevents.in"],
            contact: ["+91 9876543214"],
            poster: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGV2ZW50JTIwb3JnYW5pemVyc3xlbnwwfHwwfHx8MA%3D%3D",
            address: "Viman Nagar Pune Maharashtra"
        },
        {
            name: "Weddings & More",
            ratings: "4.5/5",
            votes: "",
            TypesofEvents: ["Weddings", "Anniversaries", "Engagements", "Social Events"],
            website: ["www.weddingsandmore.in"],
            contact: ["+91 9876543215"],
            poster: "https://5.imimg.com/data5/TT/RR/MY-18676787/event-management-services-500x500.jpg",
            address: "Aundh Pune Maharashtra"
        },
        {
            name: "Celebrations Events",
            ratings: "4.4/5",
            votes: "",
            TypesofEvents: ["Weddings", "Corporate Events", "Birthday Parties", "Festivals"],
            website: ["www.celebrationsevents.in"],
            contact: ["+91 9876543216"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdbm0r75k6RkXeptf7D9GWx0cii-hHhEmS3Q&s",
            address: "Pimple Saudagar Pune Maharashtra"
        },
        {
            name: "Vighnaharta Events",
            ratings: "4.6/5",
            votes: "",
            TypesofEvents: ["Weddings", "Corporate Events", "Exhibitions", "Roadshows"],
            website: ["www.vighnahartaevents.com"],
            contact: ["+91 9876543217"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm8d_6uiiRb-zn2EX7NPV9ARo3cOFSvEAHvw&s",
            address: "Hadapsar Pune Maharashtra"
        },
        {
            name: "The Event People",
            ratings: "4.5/5",
            votes: "",
            TypesofEvents: ["Corporate Events", "Weddings", "Product Launches", "Conferences"],
            website: ["www.theeventpeople.in"],
            contact: ["+91 9876543218"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxV6C5iksySHv0ER4Wp3GN0aOC9MJH0v4RA&s",
            address: "Kharadi Pune Maharashtra"
        },
        {
            name: "Shubham Events",
            ratings: "4.7/5",
            votes: "",
            TypesofEvents: ["Weddings", "Corporate Events", "Social Events", "Religious Functions"],
            website: ["www.shubhamevents.com"],
            contact: ["+91 9876543219"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHTDeULc0f_n5KQKdBcu_1SJmVnNLcYKxs-Q&s",
            address: "Bibwewadi Pune Maharashtra"
        },
        {
            name: "Perfect Planners",
            ratings: "4.6/5",
            votes: "",
            TypesofEvents: ["Corporate Events", "Weddings", "Birthday Parties", "Anniversaries"],
            website: ["www.perfectplanners.in"],
            contact: ["+91 9876543220"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2F6QYP3fLLiV-V-hVRX_p39rHYNSIg6nEhQ&s",
            address: "Sinhagad Road Pune Maharashtra"
        },
        {
            name: "Party Poppers",
            ratings: "4.3/5",
            votes: "",
            TypesofEvents: ["Birthday Parties", "Weddings", "Corporate Events", "Festivals"],
            website: ["www.partypopperspune.com"],
            contact: ["+91 9876543221"],
            poster: "https://cdn0.weddingwire.in/vendor/5610/3_2/960/jpeg/weddingplanner-tnp-event-planners-weddingdecor-6_15_465610-171091168247326.jpeg",
            address: "Warje Pune Maharashtra"
        },
        {
            name: "FNP Weddings & Events",
            ratings: "4.5/5",
            votes: "",
            TypesofEvents: ["Weddings", "Anniversaries", "Corporate Events", "Social Gatherings"],
            website: ["www.fnpweddings.com"],
            contact: ["+91 9876543222"],
            poster: "https://5.imimg.com/data5/SELLER/Default/2024/1/375038089/WB/JJ/ZB/107725295/corporate-event-planning-service-500x500.jpeg",
            address: "Kothrud Pune Maharashtra"
        },
        {
            name: "E Factor Events",
            ratings: "4.6/5",
            votes: "",
            TypesofEvents: ["Corporate Events", "Weddings", "Product Launches", "Exhibitions"],
            website: ["www.efactorevents.com"],
            contact: ["+91 9876543223"],
            poster: "https://cdn0.weddingwire.in/vendor/5610/3_2/960/jpeg/20b1c2eb-674c-4f84-a2d9-c7698d5e90a2_15_465610-171093528816715.jpeg",
            address: "Magarpatta City Pune Maharashtra"
        },
        {
            name: "Big Bash Events",
            ratings: "4.4/5",
            votes: "",
            TypesofEvents: ["Corporate Events", "Weddings", "Birthday Parties", "Conferences"],
            website: ["www.bigbash.in"],
            contact: ["+91 9876543224"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbg_5U598Bn0qeUA9ooNdHIEyLVkUHZ7AcqA&s",
            address: "Hinjewadi Pune Maharashtra"
        },
        {
            name: "Event Dynamics",
            ratings: "4.3/5",
            votes: "",
            TypesofEvents: ["Corporate Events", "Weddings", "Social Events", "Exhibitions"],
            website: ["www.eventdynamics.com"],
            contact: ["+91 9876543225"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2HRNZUGpBPjjxCECmVRfj7gsbUWZ39eejQ&s",
            address: "Pashan Pune Maharashtra"
        },
        {
            name: "Urban Events",
            ratings: "4.5/5",
            votes: "",
            TypesofEvents: ["Corporate Events", "Weddings", "Music Festivals", "Product Launches"],
            website: ["www.urbanevents.in"],
            contact: ["+91 9876543226"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekATjnOmlZW4y2zDUEb4nnYqeFHEUeusqKA&s",
            address: "Yerwada Pune Maharashtra"
        },
        {
            name: "Vision Events",
            ratings: "4.4/5",
            votes: "",
            TypesofEvents: ["Corporate Events", "Weddings", "Birthday Parties", "Anniversaries"],
            website: ["www.visionevents.com"],
            contact: ["+91 9876543227"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWXy3FCQ0YReonVzNZ9x19rMfqEd6_Iu23Q&s",
            address: "Karve Nagar Pune Maharashtra"
        }
        
    ];

    const eventList = document.getElementById('eventhehe');

    events.forEach(event => {
        const eventContainer = document.createElement('div');
        eventContainer.className = 'container';

        eventContainer.innerHTML = `
            <div class="event-poster">
                <img src="${event.poster}" alt="${event.name}">
            </div>
            <div class="event-details">
                <h1>${event.name}</h1>
                <div class="rating">
                    <span class="star">★</span> ${event.ratings} (${event.votes} Votes)
                </div>
                <div class="TypesofEvents">
                    <span>${event.TypesofEvents.join(', ')}</span>
                </div>
                <div class="website">
                    <span>${event.website.join(', ')}</span>
                </div>
                <div class="meta">
                    <span>${event.contact.join(', ')}</span>
                </div>
            </div>
            <div class="about-event">
                <h2>Address</h2>
                <p>${event.address}</p>
            </div>
        `;

        eventList.appendChild(eventContainer);
    });
});