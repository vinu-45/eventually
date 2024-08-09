document.addEventListener('DOMContentLoaded', () => {
    const events = [
      {
        name: "Rajyog Banquet Hall",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Birthday Parties"],
        website: ["http://rajyogbanquethall.com/"],
        contact: ["+91 98834 56789"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRrvBAc-dYqxJ0H_qdvzfyiSu54oeKXPdxcQ&s",
        address: "123, Tarabai Park, Kolhapur, Maharashtra 416003"
      },
      {
        name: "Mahalaxmi Hall",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Cultural Events", "Corporate Meetings"],
        website: ["http://mahalaxmihall.com/"],
        contact: ["+91 98765 43210"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4NY4cZXrnFunk4zEdgRJubYKbp54D4knEKTy-gYYMUNCyHtzsGGkVoq8zGA&s",
        address: "456, Mahadwar Road, Kolhapur, Maharashtra 416002"
      },
      {
        name: "Sai Celebration Hall",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Anniversaries", "Social Gatherings"],
        website: ["http://saicelebrationhall.com/"],
        contact: ["+91 98876 54321"],
        poster: "https://media.istockphoto.com/id/1857340134/photo/wedding-venue-wedding-organization-celebration-and-social-event-wedding-ceremony.jpg?s=612x612&w=is&k=20&c=loh4mBYAsU2Pmjis_P_gMTJAf0aUkcVWEeYtJWAiV1M=",
        address: "789, Rajarampuri, Kolhapur, Maharashtra 416008"
      },
      {
        name: "Shivtej Hall",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Weddings", "Conferences"],
        website: ["http://shivtejhall.com/"],
        contact: ["+91 97654 32109"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQokntdh9n5WTTB7LA7nqb6YFvkjj7CYgolw&s",
        address: "101, Shahupuri, Kolhapur, Maharashtra 416001"
      },
      {
        name: "Gulmohar Banquet Hall",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Product Launches"],
        website: ["http://gulmoharhall.com/"],
        contact: ["+91 98456 78901"],
        poster: "https://content3.jdmagicbox.com/comp/solapur/w1/9999px217.x217.211228201904.k8w1/catalogue/the-cult-banquet-indian-model-school-jule-solapur-solapur-non-ac-banquet-halls-wf3oglxshb.jpg",
        address: "202, Laxmipuri, Kolhapur, Maharashtra 416002"
      },
      {
        name: "Royal Orchid Hall",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Birthday Parties", "Social Gatherings"],
        website: ["http://royalorchidhall.com/"],
        contact: ["+91 97654 12345"],
        poster: "https://images.venuebookingz.com/17974-1485519787-wm-Tabla-kukatpally1.jpg",
        address: "303, Station Road, Kolhapur, Maharashtra 416001"
      },
      {
        name: "Kesar Hall",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Weddings", "Social Gatherings"],
        website: ["http://kesarhall.com/"],
        contact: ["+91 96543 21098"],
        poster: "https://media.istockphoto.com/id/578088264/photo/wedding-hall-or-other-function-facility-set-for-fine-dining.jpg?s=612x612&w=0&k=20&c=YkDtw5dyLM_2q-4R1MIzRE5BJ8wcUXowDxN3WH_gZ_0=",
        address: "404, New Shahupuri, Kolhapur, Maharashtra 416003"
      },
      {
        name: "Sankalp Hall",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["http://sankalphall.com/"],
        contact: ["+91 98765 65432"],
        poster: "https://img.freepik.com/free-photo/decorated-banquet-hall-with-flowers_8353-10058.jpg",
        address: "505, Rankala, Kolhapur, Maharashtra 416010"
      },
      {
        name: "Blossom Banquet Hall",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
        website: ["http://blossomhall.com/"],
        contact: ["+91 98654 32109"],
        poster: "https://www.princehotels.com/shinyokohama/wp-content/uploads/sites/8/2019/06/Z7T7835%E5%B0%8F.jpg",
        address: "606, Kolhapur Station, Kolhapur, Maharashtra 416003"
      },
      {
        name: "Gitanjali Hall",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Weddings", "Social Gatherings"],
        website: ["http://gitanjalihall.com/"],
        contact: ["+91 99876 54321"],
        poster: "https://www.shutterstock.com/image-photo/wedding-hall-other-function-facility-260nw-487246921.jpg",
        address: "707, Rajarampuri, Kolhapur, Maharashtra 416008"
      },
      {
        name: "Prithvi Hall",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Anniversaries"],
        website: ["http://prithvihall.com/"],
        contact: ["+91 98765 43219"],
        poster: "https://www.shutterstock.com/image-photo/wedding-hall-other-function-facility-260nw-487246921.jpg",
        address: "808, Shivaji Park, Kolhapur, Maharashtra 416001"
      },
      {
        name: "Kalpavriksha Hall",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Birthday Parties"],
        website: ["http://kalpavrikshahall.com/"],
        contact: ["+91 97654 98765"],
        poster: "https://www.shutterstock.com/image-photo/kolkata-india-24-october-2020-260nw-1840133818.jpg",
        address: "909, Tarabai Road, Kolhapur, Maharashtra 416003"
      },
      {
        name: "Parijat Hall",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
        website: ["http://parijathall.com/"],
        contact: ["+91 96543 21087"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMTwDOLIMHHH87RJkriLE39SI5BAoky9vjAjm-txpHZiSUipI1-t3V8wTdWIi8ooj0BU4&usqp=CAU",
        address: "110, Mahalaxmi Chowk, Kolhapur, Maharashtra 416012"
      },
      {
        name: "Snehangan Hall",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
        website: ["http://snehanganhall.com/"],
        contact: ["+91 98567 65432"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs4g-BbXIuV4f5FJE8euavmvRYAWuIUiZqr-jfkT-eDdUVSpxMT5NDwzMrN1nIUaai3yI&usqp=CAU",
        address: "121, Gadhinglaj, Kolhapur, Maharashtra 416502"
      },
      {
        name: "Mangalya Hall",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Birthday Parties", "Corporate Events"],
        website: ["http://mangalyahall.com/"],
        contact: ["+91 97654 12309"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0AFAI9_cvyaURb66C_VUPtdtebKb8zQ6DC5LAoZV-OzBYEbArBi6MrTAL3qv3oZuI6DI&usqp=CAU",
        address: "232, Jaysingpur, Kolhapur, Maharashtra 416101"
      },
      {
        name: "Vaibhav Hall",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Exhibitions"],
        website: ["http://vaibhavhall.com/"],
        contact: ["+91 96543 21087"],
        poster: "https://images.venuebookingz.com/25068-1623860267-wm-royal-bengal-room-2.jpg",
        address: "343, Ichalkaranji, Kolhapur, Maharashtra 416115"
      },
      {
        name: "Aangan Hall",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Anniversaries"],
        website: ["http://aanganhall.com/"],
        contact: ["+91 98567 43210"],
        poster: "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/035/792/new_thumb/ss20230611-30753-1dnra46.jpg?1686477847",
        address: "454, Karveer, Kolhapur, Maharashtra 416005"
      },
      {
        name: "Shrinivas Hall",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["http://shrinivashall.com/"],
        contact: ["+91 98765 43219"],
        poster: "https://cdn0.weddingwire.in/vendor/3902/3_2/640/jpg/banquet-hall-zip-by-spree-hotel-blue-stone-banquet-hall15_15_93902-160010489045937.jpeg",
        address: "565, Uchgaon, Kolhapur, Maharashtra 416005"
      },
      {
        name: "Ratnamala Hall",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
        website: ["http://ratnamalahall.com/"],
        contact: ["+91 99876 54321"],
        poster: "https://cdn0.weddingwire.in/vendor/5921/3_2/960/jpg/file-1626349820930_15_355921-162634982240667.jpeg",
        address: "676, Kagal, Kolhapur, Maharashtra 416216"
      },
      {
        name: "Suman Hall",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Birthday Parties"],
        website: ["http://sumanhall.com/"],
        contact: ["+91 96543 21087"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshzaNFnAr1fZx8dCjPB2gpoUpX2i_AKX7ULSJqvFqz7AaXiKkxZwju43CzqBg3Y3yHAQ&usqp=CAU",
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