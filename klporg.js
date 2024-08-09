document.addEventListener('DOMContentLoaded', () => {
    const events = [
      {
        name: "Dream Events",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Birthday Parties"],
        website: ["http://dreamevents.com/"],
        contact: ["+91 98834 56789"],
        poster: "https://content.jdmagicbox.com/comp/kolhapur/s5/0231px231.x231.171231171747.z7s5/catalogue/ravaji-sanskrutik-bhavan-sane-guruji-vasahat-kolhapur-banquet-halls-ozwyyn7jg9.jpg",
        address: "123, Shahupuri, Kolhapur, Maharashtra 416001"
      },
      {
        name: "Royal Event Planners",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["http://royaleventplanners.com/"],
        contact: ["+91 98765 43210"],
        poster: "https://content.jdmagicbox.com/comp/navsari/k7/9999p2637.2637.230129040031.r3k7/catalogue/welcome-wedding-venue-majigam-navsari-banquet-halls-ywzwg2odrq.jpg",
        address: "456, Rajarampuri, Kolhapur, Maharashtra 416008"
      },
      {
        name: "Elegant Celebrations",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Anniversaries", "Corporate Events"],
        website: ["http://elegantcelebrations.com/"],
        contact: ["+91 98876 54321"],
        poster: "https://image.wedmegood.com/resized/540X/uploads/member/1333761/1598426829_Screenshot__300_.png",
        address: "789, Tarabai Park, Kolhapur, Maharashtra 416003"
      },
      {
        name: "Shree Events",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Weddings", "Cultural Events"],
        website: ["http://shreeevents.com/"],
        contact: ["+91 97654 32109"],
        poster: "https://image.wedmegood.com/resized/540X/uploads/member/1333761/1598426830_Screenshot__301_.png",
        address: "101, Mahadwar Road, Kolhapur, Maharashtra 416002"
      },
      {
        name: "Perfect Planners",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Product Launches"],
        website: ["http://perfectplanners.com/"],
        contact: ["+91 98456 78901"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMS4BtF930vJ3vzTXkyAwGtVB-ZEY92yF9m2PTRA_GgvLaOO5fJfFYN1dmvS7h_hfn1Oc&usqp=CAU",
        address: "202, Laxmipuri, Kolhapur, Maharashtra 416002"
      },
      {
        name: "Celebrations Unlimited",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Birthday Parties", "Social Gatherings"],
        website: ["http://celebrationsunlimited.com/"],
        contact: ["+91 97654 12345"],
        poster: "https://content.jdmagicbox.com/comp/kolhapur/s5/0231px231.x231.171231171747.z7s5/catalogue/ravaji-sanskrutik-bhavan-sane-guruji-vasahat-kolhapur-banquet-halls-ozwyyn7jg9-250.jpg",
        address: "303, Station Road, Kolhapur, Maharashtra 416001"
      },
      {
        name: "Golden Events",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Weddings", "Social Gatherings"],
        website: ["http://goldenevents.com/"],
        contact: ["+91 96543 21098"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqpdbyoE2O-OOgCrHKwgi_9tgu6nizd7tq95N_sN8826G71yRdUzfkuYMIL4I9M1IOmy8&usqp=CAU",
        address: "404, New Shahupuri, Kolhapur, Maharashtra 416003"
      },
      {
        name: "Maheshwari Event Planners",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["http://maheshwarieventplanners.com/"],
        contact: ["+91 98765 65432"],
        poster: "https://cdn0.weddingwire.in/vendor/3485/3_2/960/jpg/wedding-venue-royal-classic-convention-center-banquet-hall-5_15_323485-160630926541373.jpeg",
        address: "505, Rankala, Kolhapur, Maharashtra 416010"
      },
      {
        name: "Royal Orchid Events",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
        website: ["http://royalorchidevents.com/"],
        contact: ["+91 98654 32109"],
        poster: "https://viwaha.lk/uploaded_images/resized_1678603268-WhatsApp%20Image%202022-09-03%20at%2010.32.03%20AM%20(4).jpeg",
        address: "606, Kolhapur Station, Kolhapur, Maharashtra 416003"
      },
      {
        name: "Vijay Event Planners",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Weddings", "Social Gatherings"],
        website: ["http://vijayeventplanners.com/"],
        contact: ["+91 99876 54321"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6pyxr9yghwRQ05aH3tgrA9moGEEl19SI5nHcZ1fBpS5dPddmcRKKINB8VOnNAkzXbzsc&usqp=CAU",
        address: "707, Rajarampuri, Kolhapur, Maharashtra 416008"
      },
      {
        name: "Elegant Weddings & Events",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Anniversaries"],
        website: ["http://elegantweddingsandevents.com/"],
        contact: ["+91 98765 43219"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCd1WUuwOb-qnzLM9nI1FcfPqpH9yBPj8nzWtRqVr8qKEjW1_Wplam-9RtptgHqg3Xe90&usqp=CAU",
        address: "808, Shivaji Park, Kolhapur, Maharashtra 416001"
      },
      {
        name: "Creative Celebrations",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Birthday Parties"],
        website: ["http://creativecelebrations.com/"],
        contact: ["+91 97654 98765"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlRLi0gKxwQk6hGtgYRJ65NxSK_LZ1oH0e28kWD3qjmr3qcGW27ZQ_tz9_8AqsWU4WWk&usqp=CAU",
        address: "909, Tarabai Road, Kolhapur, Maharashtra 416003"
      },
      {
        name: "Radiant Events",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
        website: ["http://radianevents.com/"],
        contact: ["+91 96543 21087"],
        poster: "https://imagewedz.oyoroomscdn.com/medium/photologue/images/bhemma-gardens-suraram-hyderabad.jpg",
        address: "110, Mahalaxmi Chowk, Kolhapur, Maharashtra 416012"
      },
      {
        name: "Classic Events",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
        website: ["http://classicevents.com/"],
        contact: ["+91 98567 65432"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCL4vOSm66yNC8terVVbKb9ctseRBDj6jv14mTu6c7QLQ6NoVJP5yCRWF7v-AiinwweoQ&usqp=CAU",
        address: "121, Gadhinglaj, Kolhapur, Maharashtra 416502"
      },
      {
        name: "Joyful Events",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Birthday Parties", "Corporate Events"],
        website: ["http://joyfulevents.com/"],
        contact: ["+91 97654 12309"],
        poster: "https://images.venuebookingz.com/33441-1704864464-wm-mekala-4.jpeg",
        address: "232, Jaysingpur, Kolhapur, Maharashtra 416101"
      },
      {
        name: "Elegant Event Solutions",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Exhibitions"],
        website: ["http://eleganteventsolutions.com/"],
        contact: ["+91 96543 21087"],
        poster: "https://content.jdmagicbox.com/comp/khammam/u3/9999p8742.8742.140218151641.i9u3/catalogue/sri-lakshmi-chandra-wedding-services-khammam-ho-khammam-photographers-gh0g7a41zr.jpg",
        address: "343, Ichalkaranji, Kolhapur, Maharashtra 416115"
      },
      {
        name: "Blissful Events",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Anniversaries"],
        website: ["http://blissfulevents.com/"],
        contact: ["+91 98567 43210"],
        poster: "https://3.imimg.com/data3/RG/WW/MY-14550021/corporate-events-250x250.png",
        address: "454, Karveer, Kolhapur, Maharashtra 416005"
      },
      {
        name: "Celebrations by Neha",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["http://celebrationsbyneha.com/"],
        contact: ["+91 98765 43219"],
        poster: "https://i.pinimg.com/736x/38/e2/b1/38e2b11566503e5018336e2452a82796.jpg",
        address: "565, Uchgaon, Kolhapur, Maharashtra 416005"
      },
      {
        name: "Sankalp Event Management",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
        website: ["http://sankalpeventmanagement.com/"],
        contact: ["+91 99876 54321"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRitBzATR6fMDQRHZZZ2O_vbAWvB4e7tAqA6z6xWSiAyu1AnCXzdUhPlRaFqSfl1T2I-vg&usqp=CAU",
        address: "676, Kagal, Kolhapur, Maharashtra 416216"
      },
      {
        name: "Shubham Events",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Birthday Parties"],
        website: ["http://shubhamevents.com/"],
        contact: ["+91 96543 21087"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-RXs1rndVK-jIAJMqXbOmohqdmk-L8rHpLmWCeyG8lFfgV6iKSR_yaFKZpU2syhp6aaY&usqp=CAU",
        address: "787, Panhala, Kolhapur, Maharashtra 416201"
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