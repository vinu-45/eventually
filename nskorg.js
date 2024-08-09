document.addEventListener('DOMContentLoaded', () => {
    const events = [
      {
        name: "Nashik Event Planners",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Weddings", "Social Gatherings"],
        website: ["https://www.nashikeventplanners.com"],
        contact: ["+91 98222 34567"],
        poster: "",
        address: "Near Nashik Road Railway Station, Nashik, Maharashtra 422101"
      },
      {
        name: "Elite Events",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Birthday Parties"],
        website: ["https://www.eliteeventsnashik.com"],
        contact: ["+91 90044 22334"],
        poster: "https://content.jdmagicbox.com/comp/solapur/d9/9999px217.x217.191119213239.t3d9/catalogue/veda-banquets-solapur-city-solapur-banquet-halls-hvaxdjhacc.jpg",
        address: "Opposite Nashik Municipal Corporation, Nashik, Maharashtra 422002"
      },
      {
        name: "Glamour Events",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Gatherings", "Social Events"],
        website: ["https://www.glamourevents.com"],
        contact: ["+91 94220 87654"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_9IgstiFq9xz3Vm1aNsgMgybg2TBIW0Qx8ZsI8jew2KeUYUxXSSDqyVXzeZro19kTMo&usqp=CAU",
        address: "Shree Venkatesh Complex, Near Nashik Central Mall, Nashik, Maharashtra 422005"
      },
      {
        name: "Blissful Events",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Anniversaries", "Corporate Events"],
        website: ["https://www.blissfulevents.com"],
        contact: ["+91 98231 45678"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL18E_icgl-eJfPrV9SFNu_4XRMz_BoEVYCcaUicymGgXeNezlYziUybE1gmt2l07SVR4&usqp=CAU",
        address: "Sanghvi Plaza, Opposite Nashik Engineering College, Nashik, Maharashtra 422010"
      },
      {
        name: "Divine Events",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Cultural Programs", "Social Gatherings"],
        website: ["https://www.divineevents.com"],
        contact: ["+91 91234 56789"],
        poster: "https://images.venuebookingz.com/22080-1601036044-wm-umang-banquet-santacruz-west-mumbai-2.jpg",
        address: "Kushal Complex, Near Nashik Road, Nashik, Maharashtra 422101"
      },
      {
        name: "Royal Events",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Festivals"],
        website: ["https://www.royalevents.com"],
        contact: ["+91 97670 12345"],
        poster: "https://cdn0.weddingwire.in/vendor/9538/3_2/960/png/146792.webp",
        address: "Chetna Complex, Near Sula Vineyard, Nashik, Maharashtra 422002"
      },
      {
        name: "Star Events",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Gatherings", "Birthday Parties"],
        website: ["https://www.starevents.com"],
        contact: ["+91 93670 12345"],
        poster: "https://cdn.venuelook.com/uploads/space_37850/1703853903_204x158.png",
        address: "Anand Plaza, Opp. Nashik Medical College, Nashik, Maharashtra 422001"
      },
      {
        name: "Celebration Events",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
        website: ["https://www.celebrationevents.com"],
        contact: ["+91 90000 67890"],
        poster: "https://cdn.venuelook.com/uploads/space_37854/1703848790_204x158.png",
        address: "Guruprasad Complex, Near Nashik Road Railway Station, Nashik, Maharashtra 422101"
      },
      {
        name: "Epic Events",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["https://www.epicevents.com"],
        contact: ["+91 92012 34567"],
        poster: "https://cdn.venuelook.com/uploads/space_26716/1713618111_204x158.png",
        address: "Sahyadri Tower, Near Trimbakeshwar Temple, Nashik, Maharashtra 422212"
      },
      {
        name: "Majestic Events",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Parties"],
        website: ["https://www.majestic.com"],
        contact: ["+91 97000 12345"],
        poster: "https://cdn.venuelook.com/uploads/space_3190/1432204169_204x158.png",
        address: "Prithvi Complex, Near Nashik College, Nashik, Maharashtra 422005"
      },
      {
        name: "Vibrant Events",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Anniversaries", "Corporate Gatherings"],
        website: ["https://www.vibrantevents.com"],
        contact: ["+91 97670 67890"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQHGOOjsu1MxW116wasjiv2s--K2NA-J0biJngXD5rzRVA3do7Xq53ep-wa6eb29Y8Xo&usqp=CAU",
        address: "Siddhivinayak Building, Near Bombay Sweets, Nashik, Maharashtra 422002"
      },
      {
        name: "Shree Events",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Social Gatherings", "Cultural Programs"],
        website: ["https://www.shreeevents.com"],
        contact: ["+91 96000 12345"],
        poster: "https://image.wedmegood.com/resized/540X/uploads/member/1195850/1586760889_81147742_111148157062161_2294295018975789056_o.jpg",
        address: "Aishwarya Plaza, Near Patel Chowk, Nashik, Maharashtra 422010"
      },
      {
        name: "Gala Events",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Gatherings", "Social Gatherings"],
        website: ["https://www.galaevents.com"],
        contact: ["+91 95274 23456"],
        poster: "https://image.wedmegood.com/resized/540X/uploads/member/756906/1570189872_2.jpg",
        address: "Kothari Heights, Near Nashik Railway Station, Nashik, Maharashtra 422101"
      },
      {
        name: "Wonder Events",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Festivals", "Corporate Events"],
        website: ["https://www.wonderevents.com"],
        contact: ["+91 99450 89012"],
        poster: "https://cdn0.weddingwire.in/vendor/0453/3_2/960/jpg/banquet-halls-dolives-hotel-event-space-10_15_320453-159422290757173.jpeg",
        address: "Sai Mandir Complex, Opposite Nashik Central, Nashik, Maharashtra 422003"
      },
      {
        name: "Dream Events",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Anniversaries", "Corporate Events"],
        website: ["https://www.dreamevents.com"],
        contact: ["+91 99700 23456"],
        poster: "https://cdn0.weddingwire.in/vendor/6056/3_2/960/jpg/gallery-7_15_136056.jpeg",
        address: "Venus Plaza, Near Sakri Phata, Nashik, Maharashtra 422212"
      },
      {
        name: "Radiant Events",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Birthday Parties", "Social Gatherings"],
        website: ["https://www.radiant.com"],
        contact: ["+91 96000 56789"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopI7-NsBbgrnmOz1inZ6CPQAGw5R8nan12RGaUcc26LFWr9NzrCDQuhXE65gxLN3OCbs&usqp=CAU",
        address: "Shivaji Nagar, Near Nashik Food Market, Nashik, Maharashtra 422005"
      },
      {
        name: "Perfect Planners",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Parties"],
        website: ["https://www.perfectplanners.com"],
        contact: ["+91 97500 67890"],
        poster: "https://www.royalpalmsolapur.com/wp-content/uploads/2021/12/Royal-Palm-Gents-Dinning-scaled.jpeg",
        address: "Siddhi Heights, Near Ganesh Temple, Nashik, Maharashtra 422002"
      },
      {
        name: "Grand Celebrations",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Birthday Parties"],
        website: ["https://www.grandcelebrations.com"],
        contact: ["+91 98765 43210"],
        poster: "https://www.visionvivaah.com/blog/wp-content/uploads/2019/05/Best-Event-Planners-In-Mumbai.jpg",
        address: "Nashik Road, Opposite Nashik Institute, Nashik, Maharashtra 422101"
      },
      {
        name: "Elegant Affairs",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Gatherings", "Social Events"],
        website: ["https://www.elegantaffairs.com"],
        contact: ["+91 96370 67890"],
        poster: "https://www.celebrationforever.in/assets/images/event-management-company.png",
        address: "Krishna Plaza, Near Omkar Lawns, Nashik, Maharashtra 422010"
      },
      {
        name: "Festive Moments",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Engagements", "Social Gatherings"],
        website: ["https://www.festivemoments.com"],
        contact: ["+91 96450 89012"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAakBrFHI-PU2sZPVYpT-teUKrg5-YrQaaxY4i6svU3wW5ILOGuLLX7odZRJDZ9zbdv8Y&usqp=CAU",
        address: "Chandrakant Tower, Near Trimbakeshwar Temple, Nashik, Maharashtra 422212"
      },
      {
        name: "Joyous Events",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Birthday Parties", "Corporate Events"],
        website: ["https://www.joyousevents.com"],
        contact: ["+91 95274 23456"],
        poster: "https://images.venuebookingz.com/27506-1678881328-wm-oreanns4.jpg",
        address: "Shubham Complex, Near Nashik Road, Nashik, Maharashtra 422101"
      },
      {
        name: "Signature Creations",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Parties"],
        website: ["https://www.signaturecreations.com"],
        contact: ["+91 94500 67890"],
        poster: "https://images.venuebookingz.com/21432-1595942100-wm-invitation-banquet-ashok-vihar-delhi-delhi-1.jpg",
        address: "Sanket Plaza, Near Nashik Engineering College, Nashik, Maharashtra 422005"
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
                <button class="rate-btn">Rate now</button>
                <div class="TypesofEvents">
                    <span>${event.TypesofEvents.join(', ')}</span>
                </div>
                <div class="website">
                    <span>${event.website.join(', ')}</span>
                </div>
                <div class="meta">
                    <span>${event.contact.join(', ')}</span>
                </div>
                <button class="book-tickets">Book tickets</button>
            </div>
            <div class="about-event">
                <h2>Address</h2>
                <p>${event.address}</p>
            </div>
        `;

        eventList.appendChild(eventContainer);
    });
});