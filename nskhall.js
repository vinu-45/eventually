document.addEventListener('DOMContentLoaded', () => {
    const events = [
      {
        name: "Shree Sai Hall",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["https://www.shreesaihall.com"],
        contact: ["+91 92240 56789"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNcfzWIQWI_y_DWaApctP8Oc25GJD6yE7dcg&s",
        address: "Near Nashik Road Railway Station, Nashik, Maharashtra 422101"
      },
      {
        name: "Gokul Garden",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Receptions", "Birthday Parties"],
        website: ["https://www.gokulgarden.com"],
        contact: ["+91 91580 67890"],
        poster: "https://cdn0.weddingwire.in/vendor/2978/3_2/640/jpg/weddingvenue-urban-gateway-banquets-banquethsll-2_15_462978-170679203249529.jpeg",
        address: "Opposite Maharashtra Bank, Nashik, Maharashtra 422002"
      },
      {
        name: "Siddhivinayak Banquet Hall",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["https://www.siddhivinayakbanquethall.com"],
        contact: ["+91 97670 12345"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLW7EZKeqlMMAVrlRe9W3kQt5mS9zr1nL6g&s",
        address: "Near Mico Circle, Nashik, Maharashtra 422003"
      },
      {
        name: "Shree Ganesh Hall",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Cultural Programs", "Corporate Events"],
        website: ["https://www.shreeganeshhall.com"],
        contact: ["+91 98222 34567"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIp45cvQzy9ND612k6ZET83fWCHdtYKhMew&s",
        address: "Ganesh Complex, Near Nashik Medical College, Nashik, Maharashtra 422010"
      },
      {
        name: "Kumar Hall",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Social Gatherings", "Conferences"],
        website: ["https://www.kumarhall.com"],
        contact: ["+91 99222 33445"],
        poster: "https://www.thecorinthianspune.com/new-img/Alexandria.jpg",
        address: "Shivaji Nagar, Near Ganesh Temple, Nashik, Maharashtra 422001"
      },
      {
        name: "Royal Banquets",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Parties"],
        website: ["https://www.royalbanquets.com"],
        contact: ["+91 98765 43210"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5MDZpQ4xfGfXxZv--OKQ1HkLKOpBQCPTlQ&s",
        address: "Opposite Nashik Road Railway Station, Nashik, Maharashtra 422101"
      },
      {
        name: "Sanjay Hall",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Birthday Parties"],
        website: ["https://www.sanjayhall.com"],
        contact: ["+91 90044 55667"],
        poster: "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/the-orchid-hotel-pune/AK_04800_uu2kif",
        address: "Near Trimbakeshwar Temple, Nashik, Maharashtra 422212"
      },
      {
        name: "Shivam Hall",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Cultural Programs", "Social Events"],
        website: ["https://www.shivamhall.com"],
        contact: ["+91 92222 67890"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEUfmwYFS2tUTFkBRqaG1xo7Lc9oTTRgK-A&s",
        address: "Opposite Anand Plaza, Nashik, Maharashtra 422005"
      },
      {
        name: "The Grand Banquet",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Gatherings", "Parties"],
        website: ["https://www.grandbanquet.com"],
        contact: ["+91 97670 23456"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzb9IyO7TJhH_Ckri_IVd36qGVKw8v6FGwQ&s",
        address: "Near Nashik Central Mall, Nashik, Maharashtra 422006"
      },
      {
        name: "Aishwarya Hall",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Social Gatherings", "Conferences"],
        website: ["https://www.aishwaryahall.com"],
        contact: ["+91 97500 12345"],
        poster: "https://lh3.googleusercontent.com/PinE-4lVE4Z1DlnkGYwFSzOF-0vH9XNtTks7fCCtGV6Bi-hjsECBHlnHytoUq2vZ5NBQFND7FGJM1osMnugj-u2gXA=w961-h641-l80-e31",
        address: "Near Patel Chowk, Nashik, Maharashtra 422010"
      },
      {
        name: "Nashik Banquet Hall",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Receptions", "Corporate Events"],
        website: ["https://www.nashikbanquethall.com"],
        contact: ["+91 98765 56789"],
        poster: "https://content.jdmagicbox.com/comp/pune/d8/020pxx20.xx20.211029134512.y8d8/catalogue/rhythm-banquet-pimple-saudagar-pune-banquet-halls-1m19lg80g5.jpg",
        address: "Near Sakri Phata, Nashik, Maharashtra 422212"
      },
      {
        name: "Manas Hall",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Cultural Events", "Corporate Gatherings"],
        website: ["https://www.manashall.com"],
        contact: ["+91 96000 34567"],
        poster: "https://image.wedmegood.com/resized/800X/uploads/member/411069/1532583557_she1832mf.225377_xx.jpg",
        address: "Near Nashik Food Market, Nashik, Maharashtra 422005"
      },
      {
        name: "Jubilee Banquets",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Birthday Parties"],
        website: ["https://www.jubileebanquets.com"],
        contact: ["+91 99700 67890"],
        poster: "https://image.wedmegood.com/resized/540X/uploads/member/750629/1655450007_PHM_Banquet_Hall_with_LED_Screen1.jpeg?crop=38,214,1751,985",
        address: "Near Shree Venkatesh Complex, Nashik, Maharashtra 422005"
      },
      {
        name: "Sapphire Hall",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["https://www.sapphirehall.com"],
        contact: ["+91 97670 45678"],
        poster: "https://image.wedmegood.com/resized/540X/uploads/member/587524/1721300979_2024_01_28.jpg?crop=6,93,1009,567",
        address: "Near Bombay Sweets, Nashik, Maharashtra 422002"
      },
      {
        name: "Euphoria Hall",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Social Gatherings", "Cultural Programs"],
        website: ["https://www.euphoriahall.com"],
        contact: ["+91 90000 12345"],
        poster: "https://i.pinimg.com/736x/5d/5f/6a/5d5f6a2c5454c52c23605823d3e68869.jpg",
        address: "Near Ganesh Temple, Nashik, Maharashtra 422001"
      },
      {
        name: "Imperial Hall",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["https://www.imperialhall.com"],
        contact: ["+91 92240 12345"],
        poster: "https://cdn0.weddingwire.in/vendor/2617/3_2/640/jpeg/whatsapp-image-2024-05-20-at-11-28-15-am_15_352617-171618583086432.jpeg",
        address: "Near Mico Circle, Nashik, Maharashtra 422003"
      },
      {
        name: "Radiance Hall",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Anniversaries", "Corporate Events"],
        website: ["https://www.radiancehall.com"],
        contact: ["+91 91580 45678"],
        poster: "https://images.venuebookingz.com/20149-1582375984-wm-The-President-6.jpg",
        address: "Near Nashik Institute, Nashik, Maharashtra 422101"
      },
      {
        name: "Classic Banquets",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["https://www.classicbanquets.com"],
        contact: ["+91 99450 89012"],
        poster: "https://image.wedmegood.com/resized/540X/uploads/member/496376/1715432677_Capture_22.PNG",
        address: "Opposite Nashik Central, Nashik, Maharashtra 422003"
      },
      {
        name: "Grandeur Hall",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Gatherings", "Parties"],
        website: ["https://www.grandeurhall.com"],
        contact: ["+91 98220 45678"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZTXFl4FqHPeuDRKpGjLG-DFR4ymueLHJNQ&s",
        address: "Near Ganesh Temple, Nashik, Maharashtra 422005"
      },
      {
        name: "Royal Pavilion",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Social Gatherings", "Cultural Programs"],
        website: ["https://www.royalpavilion.com"],
        contact: ["+91 96370 67890"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQlLgMhirqBD_kME90hJMainspvF9Nmyl2_Q&s",
        address: "Near Shree Venkatesh Complex, Nashik, Maharashtra 422101"
      },
      {
        name: "Majestic Hall",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Anniversaries"],
        website: ["https://www.majestichall.com"],
        contact: ["+91 97670 12345"],
        poster: "https://ik.imagekit.io/pu0hxo64d/uploads/gallery/tr:w-450,h-250/interior-of-abhinehas-ceremonial-malad-west-559.jpeg",
        address: "Near Sakri Phata, Nashik, Maharashtra 422212"
      },
      {
        name: "Opal Banquet Hall",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
        website: ["https://www.opalbanquet.com"],
        contact: ["+91 94500 67890"],
        poster: "https://cdn0.weddingwire.in/vendor/2615/3_2/960/jpg/banquet-halls-the-classic-banquet-hall-event-space-1_15_302615-159975161782159.jpeg",
        address: "Near Anand Plaza, Nashik, Maharashtra 422005"
      },
      {
        name: "Eternal Hall",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Receptions", "Corporate Events"],
        website: ["https://www.eternalhall.com"],
        contact: ["+91 90044 55667"],
        poster: "https://blog.peppynite.com/wp-content/uploads/2022/12/Banquet-Halls-in-Mumbai.jpeg",
        address: "Near Patel Chowk, Nashik, Maharashtra 422212"
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