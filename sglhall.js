document.addEventListener('DOMContentLoaded', () => {
    const events = [
      {
        name: "Swaraj Sanskrutik Bhavan",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Receptions", "Engagements", "Sangeet", "Baby Showers"],
        website: ["https://weddingz.in/satara/swaraj-sanskrutik-bhavan"],
        contact: ["+91 2249423549"],
        poster: "https://plus.unsplash.com/premium_photo-1680807988328-7ba28ad24d9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnQlMjBoYWxsc3xlbnwwfHwwfHx8MA%3D%3D",
        address: "Satara, Maharashtra"
      },
      {
        name: "Shree Ganesh Mangal Karyalaya",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Receptions", "Cultural Programs", "Conferences"],
        website: ["https://www.shreeganeshkaryalaya.com"],
        contact: ["+91 2162 237 400"],
        poster: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnQlMjBoYWxsc3xlbnwwfHwwfHx8MA%3D%3D",
        address: "Powai Naka, Satara, Maharashtra"
      },
      {
        name: "Bhagyashree Mangal Karyalaya",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Receptions", "Birthday Parties", "Corporate Meetings"],
        website: ["https://www.bhagyashreekaryalaya.com"],
        contact: ["+91 2162 238 500"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXHGz3eRJr_96o6l4ed5w2k8s5khiDvoVNg&s",
        address: "Sadar Bazar, Satara, Maharashtra"
      },
      {
        name: "Shivshakti Mangal Karyalaya",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Engagements", "Anniversaries", "Cultural Events"],
        website: ["https://www.shivshaktikaryalaya.com"],
        contact: ["+91 2162 239 600"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEixTqfRxuOw93txEd9079bJd-eSCngx9uw&s",
        address: "Shahupuri, Satara, Maharashtra"
      },
      {
        name: "Anand Bhavan",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Social Gatherings"],
        website: ["https://www.anandbhavan.com"],
        contact: ["+91 2162 240 700"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBsIF0-VeNff6a9SlVAxSjLpgehajPyj9tTQ&s",
        address: "Radhika Road, Satara, Maharashtra"
      },
      {
        name: "Kalashree Mangal Karyalaya",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Receptions", "Business Conferences", "Cultural Programs"],
        website: ["https://www.kalashreekaryalaya.com"],
        contact: ["+91 2162 241 800"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjJ8JfxcMJ_fuZ24ATtjIclN0w8-keX62Sw&s",
        address: "Rajpath Road, Satara, Maharashtra"
      },
      {
        name: "Hotel Maratha Palace",
        ratings: "4.0/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Parties"],
        website: ["https://www.hotelmarathapalace.com"],
        contact: ["+91 2162 242 900"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Jfm8L_mEQC-U732ZGDaW_aLqst53zVF7XA&s",
        address: "New Radhika Road, Satara, Maharashtra"
      },
      {
        name: "Hotel Preeti Executive",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Receptions", "Corporate Meetings", "Social Gatherings"],
        website: ["https://www.hotelpreetiexecutive.com"],
        contact: ["+91 2162 243 100"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujhLcmb9oTUXS62sgl32OQBRTK802prsGmA&s",
        address: "Sadar Bazar, Satara, Maharashtra"
      },
      {
        name: "Siddhivinayak Banquet Hall",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Engagements", "Anniversaries", "Birthday Parties"],
        website: ["https://www.siddhivinayakbanquethall.com"],
        contact: ["+91 2162 244 200"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYnxyrmA1sICvLkppl8e6BeQa-lGbLz87H0A&s",
        address: "Powai Naka, Satara, Maharashtra"
      },
      {
        name: "Hotel Rajtara",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Conferences", "Corporate Events", "Private Parties"],
        website: ["https://www.hotelrajtara.com"],
        contact: ["+91 2162 245 300"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYOtPSR53vt3Vayl_DsiX8jD_m_EKC_dJ7AQ&s",
        address: "Rajpath Road, Satara, Maharashtra"
      },
      {
        name: "Hotel Maharaja Regency",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Receptions", "Corporate Meetings", "Seminars"],
        website: ["https://www.hotelmaharajaregency.com"],
        contact: ["+91 2162 246 400"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGafO_7QQ4nhK_uW4lJtP0dtVEC0RVT1_BZA&s",
        address: "Sadar Bazar, Satara, Maharashtra"
      },
      {
        name: "Shree Sai Mangal Karyalaya",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Birthdays", "Cultural Programs", "Corporate Events"],
        website: ["https://www.shreesaimangalkaryalaya.com"],
        contact: ["+91 2162 247 500"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSilUHVaTOrFUZDIk9uEHKvr7oRiHgW3X0hnw&s",
        address: "Shahupuri, Satara, Maharashtra"
      },
      {
        name: "Hotel Radhika Palace",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings", "Conferences"],
        website: ["https://www.hotelradhikapalace.com"],
        contact: ["+91 2162 248 600"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMq09-g3YQ0CCY0eiZcXAi-Ol_5b187GC5IA&s",
        address: "Powai Naka, Satara, Maharashtra"
      },
      {
        name: "Hotel Om Executive",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Receptions", "Business Meetings", "Social Gatherings"],
        website: ["https://www.hotelomexecutive.com"],
        contact: ["+91 2162 249 700"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlgJapUJfHc9-Rw62SUUp1iIROoy8msdXnCw&s",
        address: "Sadar Bazar, Satara, Maharashtra"
      },
      {
        name: "Kamal Mangal Karyalaya",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Engagements", "Anniversaries", "Birthday Parties"],
        website: ["https://www.kamalkaryalaya.com"],
        contact: ["+91 2162 250 800"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7ctB5LSfhLeYdLRPKZEsUKXJs8SbPz9PEg&s",
        address: "Shahupuri, Satara, Maharashtra"
      },
      {
        name: "Hotel Pankaj Executive",
        ratings: "4.0/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Seminars"],
        website: ["https://www.hotelpankajexecutive.com"],
        contact: ["+91 2162 251 900"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24t0eANMAmKAs-h3PG9vIuK2fI7xbx2Yzug&s",
        address: "Rajpath Road, Satara, Maharashtra"
      },
      {
        name: "Shree Mahalaxmi Banquet Hall",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Receptions", "Corporate Meetings", "Cultural Programs"],
        website: ["https://www.shreemahalaxmibanquethall.com"],
        contact: ["+91 2162 252 000"],
        poster: "https://media.istockphoto.com/id/2151968413/photo/conference-hall-with-row-upon-row-of-chairs.webp?b=1&s=170667a&w=0&k=20&c=_0ju1PW5m1Rn82uAJyz8KAXtvQcCcgjsPgmo53Q-zXk=",
        address: "Powai Naka, Satara, Maharashtra"
      },
      {
        name: "Hotel Sagar Deluxe",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings", "Anniversaries"],
        website: ["https://www.hotelsagardeluxe.com"],
        contact: ["+91 2162 253 100"],
        poster: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGV2ZW50JTIwaGFsbHMlMjA0a3xlbnwwfHwwfHx8MA%3D%3D",
        address: "Sadar Bazar, Satara, Maharashtra"
      },
      {
        name: "Anand Mangal Karyalaya",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Engagements", "Anniversaries", "Birthday Parties"],
        website: ["https://www.anandkaryalaya.com"],
        contact: ["+91 2162 254 200"],
        poster: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGV2ZW50JTIwaGFsbHMlMjA0a3xlbnwwfHwwfHx8MA%3D%3D",
        address: "Shahupuri, Satara, Maharashtra"
      },
      {
        name: "Hotel Sangam",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Seminars"],
        website: ["https://www.hotelsangam.com"],
        contact: ["+91 2162 255 300"],
        poster: "https://media.istockphoto.com/id/907633960/photo/lobby-entrance-with-reception-desk-and-lounge-area.webp?b=1&s=170667a&w=0&k=20&c=GTrPwLjO7GPlZmPnWrlySzucUNyHFmqKPFmEj4cidc0=",
        address: "Powai Naka, Satara, Maharashtra"
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