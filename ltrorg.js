document.addEventListener('DOMContentLoaded', () => {
    const events = [
      {
        name: "Sunshine Events",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Birthday Parties"],
        website: ["http://sunshineeventslatur.com/"],
        contact: ["+91 93712 34567"],
        poster: "https://content.jdmagicbox.com/comp/solapur/d9/9999px217.x217.191119213239.t3d9/catalogue/veda-banquets-solapur-city-solapur-banquet-halls-hvaxdjhacc.jpg",
        address: "Shivaji Nagar, Latur, Maharashtra 413512"
      },
      {
        name: "Royal Events Latur",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["http://royaleventslatur.com/"],
        contact: ["+91 94221 23456"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_9IgstiFq9xz3Vm1aNsgMgybg2TBIW0Qx8ZsI8jew2KeUYUxXSSDqyVXzeZro19kTMo&usqp=CAU",
        address: "Ausa Road, Latur, Maharashtra 413512"
      },
      {
        name: "Dream Makers",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Anniversaries", "Corporate Events"],
        website: ["http://dreammakerslatur.com/"],
        contact: ["+91 98832 12345"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL18E_icgl-eJfPrV9SFNu_4XRMz_BoEVYCcaUicymGgXeNezlYziUybE1gmt2l07SVR4&usqp=CAU",
        address: "Gandhi Chowk, Latur, Maharashtra 413512"
      },
      {
        name: "Elegant Events",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
        website: ["http://eleganteventslatur.com/"],
        contact: ["+91 98564 56789"],
        poster: "https://images.venuebookingz.com/22080-1601036044-wm-umang-banquet-santacruz-west-mumbai-2.jpg",
        address: "Khadgaon Road, Latur, Maharashtra 413512"
      },
      {
        name: "Celebrations Unlimited",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Birthday Parties", "Social Gatherings"],
        website: ["http://celebrationsunlimitedlatur.com/"],
        contact: ["+91 99765 43210"],
        poster: "https://cdn0.weddingwire.in/vendor/9538/3_2/960/png/146792.webp",
        address: "MIDC Road, Latur, Maharashtra 413512"
      },
      {
        name: "Mangal Events",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["http://mangaleventslatur.com/"],
        contact: ["+91 94231 76543"],
        poster: "https://cdn.venuelook.com/uploads/space_37850/1703853903_204x158.png",
        address: "Udyog Bhavan, Latur, Maharashtra 413512"
      },
      {
        name: "Blissful Celebrations",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Anniversaries"],
        website: ["http://blissfulcelebrationslatur.com/"],
        contact: ["+91 98831 23456"],
        poster: "https://cdn.venuelook.com/uploads/space_37854/1703848790_204x158.png",
        address: "Barshi Road, Latur, Maharashtra 413512"
      },
      {
        name: "Elegant Weddings & Events",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Exhibitions"],
        website: ["http://elegantweddingsandevents.com/"],
        contact: ["+91 98876 54321"],
        poster: "https://cdn.venuelook.com/uploads/space_26716/1713618111_204x158.png",
        address: "Old Ausa Road, Latur, Maharashtra 413512"
      },
      {
        name: "Golden Events",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
        website: ["http://goldeneventslatur.com/"],
        contact: ["+91 94222 67890"],
        poster: "https://cdn.venuelook.com/uploads/space_3190/1432204169_204x158.png",
        address: "Market Yard, Latur, Maharashtra 413512"
      },
      {
        name: "Royal Orchid Events",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["http://royalorchideventslatur.com/"],
        contact: ["+91 98877 43210"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQHGOOjsu1MxW116wasjiv2s--K2NA-J0biJngXD5rzRVA3do7Xq53ep-wa6eb29Y8Xo&usqp=CAU",
        address: "Shivaji Chowk, Latur, Maharashtra 413512"
      },
      {
        name: "Classic Events",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["http://classiceventslatur.com/"],
        contact: ["+91 99765 43210"],
        poster: "https://image.wedmegood.com/resized/540X/uploads/member/1195850/1586760889_81147742_111148157062161_2294295018975789056_o.jpg",
        address: "Ausa Road, Latur, Maharashtra 413512"
      },
      {
        name: "Celebrations by Neha",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["http://celebrationsbynehalatur.com/"],
        contact: ["+91 94231 12345"],
        poster: "https://image.wedmegood.com/resized/540X/uploads/member/756906/1570189872_2.jpg",
        address: "Barshi Road, Latur, Maharashtra 413512"
      },
      {
        name: "Radiant Events",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Anniversaries"],
        website: ["http://radianeventslatur.com/"],
        contact: ["+91 99876 54321"],
        poster: "https://cdn0.weddingwire.in/vendor/0453/3_2/960/jpg/banquet-halls-dolives-hotel-event-space-10_15_320453-159422290757173.jpeg",
        address: "Shivaji Nagar, Latur, Maharashtra 413512"
      },
      {
        name: "Elegant Event Planners",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Exhibitions"],
        website: ["http://eleganteventplanners.com/"],
        contact: ["+91 98765 43210"],
        poster: "https://cdn0.weddingwire.in/vendor/6056/3_2/960/jpg/gallery-7_15_136056.jpeg",
        address: "Khadgaon Road, Latur, Maharashtra 413512"
      },
      {
        name: "Blissful Events",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
        website: ["http://blissfuleventslatur.com/"],
        contact: ["+91 94222 12345"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopI7-NsBbgrnmOz1inZ6CPQAGw5R8nan12RGaUcc26LFWr9NzrCDQuhXE65gxLN3OCbs&usqp=CAU",
        address: "MIDC Road, Latur, Maharashtra 413512"
      },
      {
        name: "Vijay Event Planners",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["http://vijayeventplanners.com/"],
        contact: ["+91 99765 12345"],
        poster: "https://www.royalpalmsolapur.com/wp-content/uploads/2021/12/Royal-Palm-Gents-Dinning-scaled.jpeg",
        address: "Market Yard, Latur, Maharashtra 413512"
      },
      {
        name: "Perfect Planners",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["http://perfectplanners.com/"],
        contact: ["+91 94221 43210"],
        poster: "https://www.visionvivaah.com/blog/wp-content/uploads/2019/05/Best-Event-Planners-In-Mumbai.jpg",
        address: "Old Ausa Road, Latur, Maharashtra 413512"
      },
      {
        name: "Shree Events",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Anniversaries"],
        website: ["http://shreeeventslatur.com/"],
        contact: ["+91 98876 12345"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAakBrFHI-PU2sZPVYpT-teUKrg5-YrQaaxY4i6svU3wW5ILOGuLLX7odZRJDZ9zbdv8Y&usqp=CAU",
        address: "Shivaji Chowk, Latur, Maharashtra 413512"
      },
      {
        name: "Celebrations by Riya",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["http://celebrationsbyriya.com/"],
        contact: ["+91 94221 67890"],
        poster: "https://images.venuebookingz.com/27506-1678881328-wm-oreanns4.jpg",
        address: "Khadgaon Road, Latur, Maharashtra 413512"
      },
      {
        name: "Golden Celebrations",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
        website: ["http://goldencelebrations.com/"],
        contact: ["+91 99876 43210"],
        poster: "https://images.venuebookingz.com/21432-1595942100-wm-invitation-banquet-ashok-vihar-delhi-delhi-1.jpg",
        address: "Shivaji Nagar, Latur, Maharashtra 413512"
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
                <button class="book-tickets hr" >Book tickets</button>
            </div>
            <div class="about-event">
                <h2>Address</h2>
                <p>${event.address}</p>
            </div>
        `;

        eventList.appendChild(eventContainer);
    });
});