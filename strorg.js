document.addEventListener('DOMContentLoaded', () => {
    const events = [
      {
        name: "Giriyog Events & Media Pvt Ltd",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Weddings", "Social Gatherings"],
        website: ["https://www.justdial.com/Aurangabad-maharashtra/Giriyog-Events-Media-Pvt-Ltd-Near-Datta-Mandir-Devlai-Chowk-Gut-No-130-Satara-Parisar/9999PX240-X240-160801133442-R4T1_BZDET"],
        contact: ["+91 98222 34459"],
        poster: "https://i.pinimg.com/736x/38/e2/b1/38e2b11566503e5018336e2452a82796.jpg",
        address: "Near Datta Mandir, Devlai Chowk, Satara Parisar, Aurangabad, Maharashtra"
      },
      {
        name: "Amigos Event Management",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Birthday Parties"],
        website: ["https://www.indiamart.com/company/14853155/"],
        contact: ["+91 90044 22901"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRitBzATR6fMDQRHZZZ2O_vbAWvB4e7tAqA6z6xWSiAyu1AnCXzdUhPlRaFqSfl1T2I-vg&usqp=CAU",
        address: "Satara, Maharashtra"
      },
      {
        name: "Prabhat Talkies Event Management",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Weddings", "Concerts"],
        website: ["https://www.indiamart.com/company/14853155/"],
        contact: ["+91 94220 81317"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8idcn_VI__YiFSNUf8MfaSEspGDs4PxWZlgcawotoHLDnRgAPE7igksI7qhvKkGrBPtY&usqp=CAU",
        address: "Satara, Maharashtra"
      },
      {
        name: "AK Light and Event Sound System",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Cultural Programs"],
        website: ["https://www.dnb.com/"],
        contact: ["+91 2162 246 400"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4kQ_6cELJaqxRdTsqU-2LOep3ISmpKGu3tdyBtz9UwtHHevrqy8flTYg2DwFj3xGVgk&usqp=CAU",
        address: "Satara, Maharashtra"
      },
      {
        name: "Event Arena Private Limited",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Weddings", "Social Gatherings"],
        website: ["https://www.dnb.com/"],
        contact: ["+91 2162 255 300"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdkcK1IsCjgEc36KP7W0oAfCkwGyRETRlMfCs71afCxbCNGAPh5fZHUIpXmwE4DmSm-4I&usqp=CAU",
        address: "Satara, Maharashtra"
      },
      {
        name: "Star Events",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Birthday Parties", "Corporate Events"],
        website: ["https://www.justdial.com"],
        contact: ["+91 95274 23456"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-RXs1rndVK-jIAJMqXbOmohqdmk-L8rHpLmWCeyG8lFfgV6iKSR_yaFKZpU2syhp6aaY&usqp=CAU",
        address: "Satara, Maharashtra"
      },
      {
        name: "Shree Samarth Event Management",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Engagements", "Cultural Programs"],
        website: ["https://www.justdial.com"],
        contact: ["+91 92714 23567"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdkcK1IsCjgEc36KP7W0oAfCkwGyRETRlMfCs71afCxbCNGAPh5fZHUIpXmwE4DmSm-4I&usqp=CAU",
        address: "Powai Naka, Satara, Maharashtra"
      },
      {
        name: "Elegant Event Planners",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Weddings", "Birthday Parties"],
        website: ["https://www.indiamart.com"],
        contact: ["+91 98231 45789"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMqMoVFoo8Js2OTcyFPQQoFkpOyDTRZ4wDtHL8EhO_R1KfpoAcUsZYJAjKihWVrYoOjQ&usqp=CAU",
        address: "Satara, Maharashtra"
      },
      {
        name: "Blossom Events",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Anniversaries", "Corporate Events"],
        website: ["https://www.justdial.com"],
        contact: ["+91 94030 56789"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcIXr6nQnRFvDellWv8sfKEOvrObikC2I5VVzIfHqQMHl71MhzFINOXh0rN8UmvitT7Ko&usqp=CAU",
        address: "Satara, Maharashtra"
      },
      {
        name: "Vivaah Events",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Engagements", "Receptions"],
        website: ["https://www.indiamart.com"],
        contact: ["+91 94220 34567"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDE0Bia9FKNOGyhIOtLxcFYaKnCSmF7j_CHZjpruUWORvTYAG536Rnw4KPwazVU87krms&usqp=CAU",
        address: "Satara, Maharashtra"
      },
      {
        name: "Elite Events",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Weddings", "Product Launches"],
        website: ["https://www.justdial.com"],
        contact: ["+91 98220 45678"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDE0Bia9FKNOGyhIOtLxcFYaKnCSmF7j_CHZjpruUWORvTYAG536Rnw4KPwazVU87krms&usqp=CAU",
        address: "Satara, Maharashtra"
      },
      {
        name: "Grand Celebrations",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Birthdays", "Corporate Meetings"],
        website: ["https://www.justdial.com"],
        contact: ["+91 91680 12345"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0i1NWMdYAaq-WvgcKKlwZQcITTZwyFJVh3UafKmX5b5n3bXnSqvNHd0J2cvQmU8vVGhY&usqp=CAU",
        address: "Satara, Maharashtra"
      },
      {
        name: "Dream Makers",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Engagements", "Corporate Events"],
        website: ["https://www.justdial.com"],
        contact: ["+91 99700 23456"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpg2pp9UhDJwYw_SALtOAtJltbWh1cbe9u1rI8IZKnqxwq01OCDVVtw9S7cA2EaiFig_0&usqp=CAU",
        address: "Satara, Maharashtra"
      },
      {
        name: "Joyous Events",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Anniversaries", "Birthday Parties"],
        website: ["https://www.indiamart.com"],
        contact: ["+91 97670 34567"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlbyyrznq8dqwg1qjFWpLGggxsRM2eRQlnOV6jOaCW-Tc2wNi9oYm2_PDJdeGxkMWi_LI&usqp=CAU",
        address: "Satara, Maharashtra"
      },
      {
        name: "Celebration Planners",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Festivals"],
        website: ["https://www.indiamart.com"],
        contact: ["+91 92240 45678"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBLPOoMLx0FIEGZEVdZXvCsHRc0FMhHqQWcFPC4BKqJ1PlJcUf3U4GoTmc5VXLyuB9as&usqp=CAU",
        address: "Satara, Maharashtra"
      },
      {
        name: "Radiant Events",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Conferences", "Birthday Parties"],
        website: ["https://www.justdial.com"],
        contact: ["+91 91580 56789"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjVbUhOjTyboxQX4Hnf4JUz4r8I_7shTaKkOnmT2hiOEEUgoLBbE25iqlrYa30nXi9YgI&usqp=CAU",
        address: "Satara, Maharashtra"
      },
      {
        name: "Elegant Affairs",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Anniversaries"],
        website: ["https://www.justdial.com"],
        contact: ["+91 96370 67890"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mXXyIONdQZk0lkn2XKrdFWXoU7Pm3vjXpE17jSf7MPevP9Exc9Ij6haUGugLXdqJoTw&usqp=CAU",
        address: "Satara, Maharashtra"
      },
      {
        name: "Glamour Events",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Cultural Events", "Corporate Gatherings"],
        website: ["https://www.indiamart.com"],
        contact: ["+91 98560 78901"],
        poster: "https://specialeventsdubai.com/wp-content/uploads/2023/12/B8E76B90-DCB7-4601-A253-ADE0A26C6F13-e1702468158988.jpeg",
        address: "Satara, Maharashtra"
      },
      {
        name: "Festive Moments",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Engagements", "Social Gatherings"],
        website: ["https://www.justdial.com"],
        contact: ["+91 98450 89012"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGvkuYkrLcKNMelQTMvkFbK2dzP1lbCpi9K-cru6Ih_MVHNT1rBV19ahLZYcE2tMMe-U&usqp=CAU",
        address: "Satara, Maharashtra"
      },
      {
        name: "Perfect Planners",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Parties"],
        website: ["https://www.indiamart.com"],
        contact: ["+91 98330 90123"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-ZIOHpIQ0NFFItcBYxsPimI-a65de7qKpyJDDKtQi-8AUt10J1D3hPWYOkWwiboOqIc&usqp=CAU",
        address: "Satara, Maharashtra"
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
                <a href="https://www.google.com/maps/place/Satara,+Maharashtra/data=!4m2!3m1!1s0x3bc239be08d96bbd:0x5f4adf559fb4b19a?sa=X&ved=1t:242&ictx=111"><h2>Address</h2></a>
                <p>${event.address}</p>
            </div>
        `;

        eventList.appendChild(eventContainer);
    });
});