document.addEventListener('DOMContentLoaded', () => {
    const events = [
      {
        name: "Swaraj Sanskrutik Bhavan",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Receptions", "Engagements", "Sangeet", "Baby Showers"],
        website: ["https://weddingz.in/satara/swaraj-sanskrutik-bhavan"],
        contact: ["+91 2249423549"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtUwLG_3ErUM_0SIc6sRdiQRaAzbS-vVNrh-4lkf76vM8AGPnJO9s8lujD2yhq-K5q28&usqp=CAU",
        address: "Satara, Maharashtra"
      },
      {
        name: "Shree Ganesh Mangal Karyalaya",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Receptions", "Cultural Programs", "Conferences"],
        website: ["https://www.shreeganeshkaryalaya.com"],
        contact: ["+91 2162 237 400"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFYGwP5e8l4rma4M7VWTjnzdL94pbMHsGuaKBUPlDRUTRZOKKxjzZOF8qCvX5vI5VN74&usqp=CAU",
        address: "Powai Naka, Satara, Maharashtra"
      },
      {
        name: "Bhagyashree Mangal Karyalaya",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Receptions", "Birthday Parties", "Corporate Meetings"],
        website: ["https://www.bhagyashreekaryalaya.com"],
        contact: ["+91 2162 238 500"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREcLvI6Db-0o-a_D7kKdQwr-FPUUVEWOorSd2ctELF5ChSZfeyln6vCASzLTg1hlC9N_M&usqp=CAU",
        address: "Sadar Bazar, Satara, Maharashtra"
      },
      {
        name: "Shivshakti Mangal Karyalaya",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Engagements", "Anniversaries", "Cultural Events"],
        website: ["https://www.shivshaktikaryalaya.com"],
        contact: ["+91 2162 239 600"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYaMPyMlzC0m7kUAChFkgVKnyckotQEBOOrX_BUt_4hG7LVgUgcHRcOWSIyovaLPOYSWc&usqp=CAU",
        address: "Shahupuri, Satara, Maharashtra"
      },
      {
        name: "Anand Bhavan",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Social Gatherings"],
        website: ["https://www.anandbhavan.com"],
        contact: ["+91 2162 240 700"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVL4xolAr-aynW1l37MTz-5T5B13Uwcac1m3Ex-R0yNA7l1OIr73sEvaJ6L9hX6EvBva0&usqp=CAU",
        address: "Radhika Road, Satara, Maharashtra"
      },
      {
        name: "Kalashree Mangal Karyalaya",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Receptions", "Business Conferences", "Cultural Programs"],
        website: ["https://www.kalashreekaryalaya.com"],
        contact: ["+91 2162 241 800"],
        poster: "https://cdn0.weddingwire.in/vendor/8597/3_2/960/jpg/wedding-venue-hotel-seetal-event-space-3_15_318597-159601546490509.jpeg",
        address: "Rajpath Road, Satara, Maharashtra"
      },
      {
        name: "Hotel Maratha Palace",
        ratings: "4.0/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Parties"],
        website: ["https://www.hotelmarathapalace.com"],
        contact: ["+91 2162 242 900"],
        poster: "https://cdn0.weddingwire.in/vendor/3776/3_2/960/jpg/banquet-hall-ashirwad-restaurant-banquets-banquet-hall-6_15_33776-162183291045580.jpeg",
        address: "New Radhika Road, Satara, Maharashtra"
      },
      {
        name: "Hotel Preeti Executive",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Receptions", "Corporate Meetings", "Social Gatherings"],
        website: ["https://www.hotelpreetiexecutive.com"],
        contact: ["+91 2162 243 100"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQravU6mLIivpZZXhddtTkoe0cQ8m0l-mkyOsY--l8MFXHsGSbEMG6K574Y5n0vw09vtms&usqp=CAU",
        address: "Sadar Bazar, Satara, Maharashtra"
      },
      {
        name: "Siddhivinayak Banquet Hall",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Engagements", "Anniversaries", "Birthday Parties"],
        website: ["https://www.siddhivinayakbanquethall.com"],
        contact: ["+91 2162 244 200"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGXpfPgLjM5OWBq2ZM8UjOirNOPrsWzAA2JY87qE6jwdiPEII3ahlg_KPbWkgQVQVscAQ&usqp=CAU",
        address: "Powai Naka, Satara, Maharashtra"
      },
      {
        name: "Hotel Rajtara",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Conferences", "Corporate Events", "Private Parties"],
        website: ["https://www.hotelrajtara.com"],
        contact: ["+91 2162 245 300"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbw_gfGpm9sBiLdNLuS7g__I2ecDvzW6NK0LU-cUXZkbnb2jkv15A20qkw6Kjx70wH20&usqp=CAU",
        address: "Rajpath Road, Satara, Maharashtra"
      },
      {
        name: "Hotel Maharaja Regency",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Receptions", "Corporate Meetings", "Seminars"],
        website: ["https://www.hotelmaharajaregency.com"],
        contact: ["+91 2162 246 400"],
        poster: "https://cdn0.weddingwire.com/vendor/462483/3_2/960/jpg/50-xl_51_384264-1572978854.jpeg",
        address: "Sadar Bazar, Satara, Maharashtra"
      },
      {
        name: "Shree Sai Mangal Karyalaya",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Birthdays", "Cultural Programs", "Corporate Events"],
        website: ["https://www.shreesaimangalkaryalaya.com"],
        contact: ["+91 2162 247 500"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7W7E9lCXysz8toybUw4SNIGblD0iMDpmzTRUe8GFz9MZDOh4Xjoi_JMyWKVoNgAxNlFI&usqp=CAU",
        address: "Shahupuri, Satara, Maharashtra"
      },
      {
        name: "Hotel Radhika Palace",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings", "Conferences"],
        website: ["https://www.hotelradhikapalace.com"],
        contact: ["+91 2162 248 600"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2H0ERCNDARUAnG2SM5nnuuquzxaR0IVMM2D1zPLtCuv_QC1hS7Q9xgGJ7iV_jLH-4g8U&usqp=CAU",
        address: "Powai Naka, Satara, Maharashtra"
      },
      {
        name: "Hotel Om Executive",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Receptions", "Business Meetings", "Social Gatherings"],
        website: ["https://www.hotelomexecutive.com"],
        contact: ["+91 2162 249 700"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUnxW0mIxmWLY5Sl2dQhA6RYoEHMUxeCF29JLBt7aZzZzdM6I0beRSXyI1NQp1h3YG6T8&usqp=CAU",
        address: "Sadar Bazar, Satara, Maharashtra"
      },
      {
        name: "Kamal Mangal Karyalaya",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Engagements", "Anniversaries", "Birthday Parties"],
        website: ["https://www.kamalkaryalaya.com"],
        contact: ["+91 2162 250 800"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7pgKq1H8UhsZalR7ks-lao89FnNOh8n4kl4pChDuq8dTkfPT2Nwz1O7KdGS9TZLQL5k&usqp=CAU",
        address: "Shahupuri, Satara, Maharashtra"
      },
      {
        name: "Hotel Pankaj Executive",
        ratings: "4.0/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Seminars"],
        website: ["https://www.hotelpankajexecutive.com"],
        contact: ["+91 2162 251 900"],
        poster: "https://cdn0.weddingwire.com/vendor/854310/3_2/640/jpg/ceremony_51_13458-165306042616279.jpeg",
        address: "Rajpath Road, Satara, Maharashtra"
      },
      {
        name: "Shree Mahalaxmi Banquet Hall",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Receptions", "Corporate Meetings", "Cultural Programs"],
        website: ["https://www.shreemahalaxmibanquethall.com"],
        contact: ["+91 2162 252 000"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDVeOKU59Fcp3EmDz-PbwbHRKVhe9L_YyDofF75hLaBgOYgXhHtWdnY0JWBIM-Lb_NIvA&usqp=CAU",
        address: "Powai Naka, Satara, Maharashtra"
      },
      {
        name: "Hotel Sagar Deluxe",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings", "Anniversaries"],
        website: ["https://www.hotelsagardeluxe.com"],
        contact: ["+91 2162 253 100"],
        poster: "https://cdn0.weddingwire.com/vendor/854310/3_2/960/jpg/0636-kolodnyphoto_51_13458-165970833222276.jpeg",
        address: "Sadar Bazar, Satara, Maharashtra"
      },
      {
        name: "Anand Mangal Karyalaya",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Engagements", "Anniversaries", "Birthday Parties"],
        website: ["https://www.anandkaryalaya.com"],
        contact: ["+91 2162 254 200"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROye5odf_j-QSatVoX_Y7JH63fwSpThu1cn6A9a7bsKDJxLFoU7T6d3rQhblLHkHmXaXo&usqp=CAU",
        address: "Shahupuri, Satara, Maharashtra"
      },
      {
        name: "Hotel Sangam",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Seminars"],
        website: ["https://www.hotelsangam.com"],
        contact: ["+91 2162 255 300"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Xk8DmxDWM9BGlykvn3xC1CPqYs2iuQe1EcAUzsdT2CwmeAln3DpfKc22ygGhXRhg-go&usqp=CAU",
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