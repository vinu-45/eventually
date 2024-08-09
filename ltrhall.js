document.addEventListener('DOMContentLoaded', () => {
    const events = [
      {
        name: "Hotel Carnival Banquet Hall",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: [""],
        contact: ["+91 94222 54321"],
        poster: "https://t3.ftcdn.net/jpg/07/53/20/00/360_F_753200093_GBYiGwZtqrCdJwfi9VCO2XI1tR4Ek9MZ.jpg",
        address: "Near Deshikendra School, Barshi Road, Latur, Maharashtra 413512"
      },
      {
        name: "Aditya Banquet Hall",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Birthday Parties", "Corporate Events"],
        website: [""],
        contact: ["+91 93700 11223"],
        poster: "https://st2.depositphotos.com/1389715/6027/i/950/depositphotos_60277839-stock-photo-european-restaurant-in-bright-colors.jpg",
        address: "Old Ausa Road, Near D Mart, Latur, Maharashtra 413512"
      },
      {
        name: "Pragati Celebration Hall",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Anniversaries"],
        website: [""],
        contact: ["+91 94988 45567"],
        poster: "https://st.depositphotos.com/2944235/3804/i/950/depositphotos_38047803-stock-photo-banquet-hall.jpg",
        address: "Ambajogai Road, Near Latur Medical College, Latur, Maharashtra 413512"
      },
      {
        name: "Hotel Grand International Banquet Hall",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
        website: ["http://hotelgrandinternational.com/"],
        contact: ["+91 95273 56789"],
        poster: "https://cdn0.weddingwire.in/vendor/3049/3_2/960/jpg/29186833-1200184156751369-6625480346287075373-n_15_163049.webp",
        address: "Renapur Road, Latur, Maharashtra 413512"
      },
      {
        name: "Madhuban Banquet Hall",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
        website: [""],
        contact: ["+91 99230 23456"],
        poster: "https://www.shutterstock.com/image-photo/banquet-decoration-hall-restaurant-festive-260nw-2303228733.jpg",
        address: "M.G. Road, Latur, Maharashtra 413512"
      },
      {
        name: "Sai Mandap",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Religious Functions", "Corporate Events"],
        website: [""],
        contact: ["+91 94231 67890"],
        poster: "https://www.shutterstock.com/image-photo/karachi-sindh-pakistan-60322-interior-260nw-2163830623.jpg",
        address: "Near Shivaji Chowk, Latur, Maharashtra 413512"
      },
      {
        name: "Panchavati Banquet Hall",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Anniversaries"],
        website: [""],
        contact: ["+91 94232 34567"],
        poster: "https://www.shutterstock.com/image-photo/banquet-hall-luxury-hotel-amsterdam-260nw-1571679193.jpg",
        address: "Near ITI College, Barshi Road, Latur, Maharashtra 413512"
      },
      {
        name: "Mangal Karyalay",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Social Gatherings", "Cultural Events"],
        website: [""],
        contact: ["+91 94988 23456"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm6uyOXsEClPW2UteI-vn1Dn9e3lDuY8gjIA&usqp=CAU",
        address: "Udyog Bhavan, MIDC Area, Latur, Maharashtra 413512"
      },
      {
        name: "Hotel Manas Banquet Hall",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["http://hotelmanas.com/"],
        contact: ["+91 95270 12345"],
        poster: "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481542.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717372800&semt=ais_user",
        address: "Gandhi Chowk, Latur, Maharashtra 413512"
      },
      {
        name: "Ashirwad Banquet Hall",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Birthday Parties", "Corporate Events"],
        website: [""],
        contact: ["+91 94222 76543"],
        poster: "https://img.freepik.com/free-photo/decorated-venue-wedding-ceremony_8353-10183.jpg?w=1380&t=st=1722510581~exp=1722511181~hmac=69b13f2aef0da9837eb5660af075e08e7bb9f932f8a8d8348e9c72e93194356c",
        address: "Near Harsul Road, Latur, Maharashtra 413512"
      },
      {
        name: "Shubham Banquet Hall",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
        website: [""],
        contact: ["+91 94221 67890"],
        poster: "http://www.hamaraevent.com/uploads/blog/0098447001471609271.jpg",
        address: "Vivekanand Chowk, Latur, Maharashtra 413512"
      },
      {
        name: "Gurukripa Banquet Hall",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Anniversaries", "Corporate Events"],
        website: [""],
        contact: ["+91 94230 12345"],
        poster: "https://sayajihotels.com/images/innerBanner/sayaji-vadodara-banquets.jpg",
        address: "Barshi Road, Latur, Maharashtra 413512"
      },
      {
        name: "Dnyaneshwar Banquet Hall",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
        website: [""],
        contact: ["+91 94231 23456"],
        poster: "https://content.jdmagicbox.com/comp/solapur/d9/9999px217.x217.191119213239.t3d9/catalogue/veda-banquets-solapur-city-solapur-banquet-halls-hvaxdjhacc.jpg",
        address: "Ausa Road, Latur, Maharashtra 413512"
      },
      {
        name: "Vikas Mandap",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Religious Functions", "Corporate Events"],
        website: [""],
        contact: ["+91 99231 45678"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyUR12yXn68iRaoVy9RR72dIFqnAE0o0TpeQ&s",
        address: "Shivaji Nagar, Latur, Maharashtra 413512"
      },
      {
        name: "Anand Banquet Hall",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
        website: [""],
        contact: ["+91 95272 34567"],
        poster: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wedmegood.com%2Fvendors%2Fsolapur%2Fwedding-venues%2Fall%2Fbanquet-hall%2F&psig=AOvVaw2LrDT452s-IV9knxjeXCn0&ust=1722621657926000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDm9PKv1IcDFQAAAAAdAAAAABAQ",
        address: "Gandhi Chowk, Latur, Maharashtra 413512"
      },
      {
        name: "Renuka Banquet Hall",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
        website: [""],
        contact: ["+91 99232 23456"],
        poster: "https://st.depositphotos.com/1899403/2198/i/450/depositphotos_21980375-stock-photo-indoor-wedding-reception-hall-with.jpg",
        address: "MIDC Road, Latur, Maharashtra 413512"
      },
      {
        name: "Hotel Latur Garden Banquet Hall",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Anniversaries"],
        website: ["http://hotellaturgarden.com/"],
        contact: ["+91 94222 34567"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KKmVNRJY0_UngnGnRjwtJoehqXZA_FMeo50BFbSHQiTBtwvF3T7VQwru7Q&s",
        address: "Old Ausa Road, Latur, Maharashtra 413512"
      },
      {
        name: "Vrindavan Banquet Hall",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
        website: [""],
        contact: ["+91 99988 45678"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbXadcwopvDr_kbAbWIyk2tn5xb79DWNHCkA&s",
        address: "Khadgaon Road, Latur, Maharashtra 413512"
      },
      {
        name: "Swagat Banquet Hall",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Anniversaries"],
        website: [""],
        contact: ["+91 94221 56789"],
        poster: "https://st.depositphotos.com/3386033/5109/i/450/depositphotos_51097627-stock-photo-banquet-hall-with-colorful-lights.jpg",
        address: "Ambajogai Road, Latur, Maharashtra 413512"
      },
      {
        name: "Ganesh Banquet Hall",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: [""],
        contact: ["+91 94232 67890"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTZ2h_A3C0JsmPlTzarYPsdrDuZos3gMXSvg&s",
        address: "Shivaji Chowk, Latur, Maharashtra 413512"
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