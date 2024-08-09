document.addEventListener('DOMContentLoaded', () => {
  const events = [
    {
      name: "Shri Siddheshwar Sabhagruha",
      ratings: "4.5/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Cultural Programs"],
      website: ["http://shrisiddheshwarsabhagruha.com/"],
      contact: ["+91 98812 34567"],
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNcfzWIQWI_y_DWaApctP8Oc25GJD6yE7dcg&s",
      address: "123, Navi Peth, Solapur, Maharashtra 413001"
    },
    {
      name: "Hotel Tripursundari Banquet Hall",
      ratings: "4.4/5",
      votes: "",
      TypesofEvents: ["Weddings", "Conferences", "Birthday Parties"],
      website: ["http://tripursundari.com/"],
      contact: ["+91 98823 45678"],
      poster: "https://cdn0.weddingwire.in/vendor/2978/3_2/640/jpg/weddingvenue-urban-gateway-banquets-banquethsll-2_15_462978-170679203249529.jpeg",
      address: "456, South Sadar Bazar, Solapur, Maharashtra 413003"
    },
    {
      name: "Shivparvati Mangal Karyalay",
      ratings: "4.3/5",
      votes: "",
      TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
      website: ["http://shivparvatikaryalay.com/"],
      contact: ["+91 99012 34567"],
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLW7EZKeqlMMAVrlRe9W3kQt5mS9zr1nL6g&s",
      address: "789, Hotgi Road, Solapur, Maharashtra 413003"
    },
    {
      name: "Hotel Surya Executive Banquet Hall",
      ratings: "4.5/5",
      votes: "",
      TypesofEvents: ["Corporate Events", "Weddings", "Parties"],
      website: ["http://hotelsuryaexecutive.com/"],
      contact: ["+91 98765 43210"],
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIp45cvQzy9ND612k6ZET83fWCHdtYKhMew&s",
      address: "101, Murarji Peth, Solapur, Maharashtra 413001"
    },
    {
      name: "Hotel City Park Banquet Hall",
      ratings: "4.4/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Product Launches"],
      website: ["http://hotelcitypark.com/"],
      contact: ["+91 98876 54321"],
      poster: "https://www.thecorinthianspune.com/new-img/Alexandria.jpg",
      address: "202, Sidheshwar Peth, Solapur, Maharashtra 413003"
    },
    {
      name: "Pratham Garden",
      ratings: "4.3/5",
      votes: "",
      TypesofEvents: ["Weddings", "Anniversaries", "Social Gatherings"],
      website: ["http://prathamgarden.com/"],
      contact: ["+91 98456 78901"],
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5MDZpQ4xfGfXxZv--OKQ1HkLKOpBQCPTlQ&s",
      address: "303, Bijapur Road, Solapur, Maharashtra 413004"
    },
    {
      name: "Vardhaman Banquet Hall",
      ratings: "4.2/5",
      votes: "",
      TypesofEvents: ["Corporate Events", "Weddings", "Social Gatherings"],
      website: ["http://vardhamanbanquethall.com/"],
      contact: ["+91 99887 65432"],
      poster: "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/the-orchid-hotel-pune/AK_04800_uu2kif",
      address: "404, Railway Lines, Solapur, Maharashtra 413001"
    },
    {
      name: "Solapur Social Club Hall",
      ratings: "4.3/5",
      votes: "",
      TypesofEvents: ["Social Gatherings", "Cultural Events", "Weddings"],
      website: ["http://solapursocialclub.com/"],
      contact: ["+91 98765 12345"],
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEUfmwYFS2tUTFkBRqaG1xo7Lc9oTTRgK-A&s",
      address: "505, Jodbhavi Peth, Solapur, Maharashtra 413002"
    },
    {
      name: "Sai Leela Banquet Hall",
      ratings: "4.4/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
      website: ["http://saileelabanquethall.com/"],
      contact: ["+91 98654 32109"],
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzb9IyO7TJhH_Ckri_IVd36qGVKw8v6FGwQ&s",
      address: "606, Boramani Naka, Solapur, Maharashtra 413002"
    },
    {
      name: "Hotel Mantralaya Banquet Hall",
      ratings: "4.5/5",
      votes: "",
      TypesofEvents: ["Conferences", "Weddings", "Exhibitions"],
      website: ["http://hotelmantralaya.com/"],
      contact: ["+91 99876 54321"],
      poster: "https://lh3.googleusercontent.com/PinE-4lVE4Z1DlnkGYwFSzOF-0vH9XNtTks7fCCtGV6Bi-hjsECBHlnHytoUq2vZ5NBQFND7FGJM1osMnugj-u2gXA=w961-h641-l80-e31",
      address: "707, Solapur-Pune Highway, Solapur, Maharashtra 413004"
    },
    {
      name: "Hotel Vaishnavi Banquet Hall",
      ratings: "4.3/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
      website: ["http://hotelvaishnavi.com/"],
      contact: ["+91 98765 65432"],
      poster: "https://content.jdmagicbox.com/comp/pune/d8/020pxx20.xx20.211029134512.y8d8/catalogue/rhythm-banquet-pimple-saudagar-pune-banquet-halls-1m19lg80g5.jpg",
      address: "808, Navi Peth, Solapur, Maharashtra 413007"
    },
    {
      name: "Pandit Dindayal Upadhyay Hall",
      ratings: "4.2/5",
      votes: "",
      TypesofEvents: ["Weddings", "Birthday Parties", "Corporate Events"],
      website: ["http://pdushall.com/"],
      contact: ["+91 97654 32109"],
      poster: "https://image.wedmegood.com/resized/800X/uploads/member/411069/1532583557_she1832mf.225377_xx.jpg",
      address: "909, Ashok Chowk, Solapur, Maharashtra 413006"
    },
    {
      name: "Shivtej Banquet Hall",
      ratings: "4.4/5",
      votes: "",
      TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
      website: ["http://shivtejhall.com/"],
      contact: ["+91 98567 43210"],
      poster: "https://image.wedmegood.com/resized/540X/uploads/member/750629/1655450007_PHM_Banquet_Hall_with_LED_Screen1.jpeg?crop=38,214,1751,985",
      address: "110, Bhagwat Peth, Solapur, Maharashtra 413007"
    },
    {
      name: "Shree Krishna Hall",
      ratings: "4.3/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
      website: ["http://shreekrishnahall.com/"],
      contact: ["+91 97654 12345"],
      poster: "https://image.wedmegood.com/resized/540X/uploads/member/587524/1721300979_2024_01_28.jpg?crop=6,93,1009,567",
      address: "121, Dufferin Chowk, Solapur, Maharashtra 413001"
    },
    {
      name: "Siddhivinayak Banquet Hall",
      ratings: "4.4/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
      website: ["http://siddhivinayakhall.com/"],
      contact: ["+91 98567 65432"],
      poster: "https://i.pinimg.com/736x/5d/5f/6a/5d5f6a2c5454c52c23605823d3e68869.jpg",
      address: "232, South Kasba, Solapur, Maharashtra 413001"
    },
    {
      name: "Grand Celebration Hall",
      ratings: "4.2/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Birthday Parties"],
      website: ["http://grandcelebration.com/"],
      contact: ["+91 97654 98765"],
      poster: "https://cdn0.weddingwire.in/vendor/2617/3_2/640/jpeg/whatsapp-image-2024-05-20-at-11-28-15-am_15_352617-171618583086432.jpeg",
      address: "343, Kumtha Naka, Solapur, Maharashtra 413003"
    },
    {
      name: "Suraj Mangal Karyalay",
      ratings: "4.3/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
      website: ["http://surajkaryalay.com/"],
      contact: ["+91 96543 21098"],
      poster: "https://images.venuebookingz.com/20149-1582375984-wm-The-President-6.jpg",
      address: "454, Soregaon, Solapur, Maharashtra 413005"
    },
    {
      name: "Pratik Banquet Hall",
      ratings: "4.4/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
      website: ["http://pratikbanquethall.com/"],
      contact: ["+91 98765 43219"],
      poster: "https://image.wedmegood.com/resized/540X/uploads/member/496376/1715432677_Capture_22.PNG",
      address: "565, Pandharpur Road, Solapur, Maharashtra 413004"
    },
    {
      name: "Sneh Sagar Banquet Hall",
      ratings: "4.3/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
      website: ["http://snehsagarhall.com/"],
      contact: ["+91 97654 12309"],
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZTXFl4FqHPeuDRKpGjLG-DFR4ymueLHJNQ&s",
      address: "676, Jule Solapur, Solapur, Maharashtra 413004"
    },
    {
      name: "Meghdoot Hall",
      ratings: "4.2/5",
      votes: "",
      TypesofEvents: ["Weddings", "Birthday Parties", "Corporate Events"],
      website: ["http://meghdoothall.com/"],
      contact: ["+91 96543 21087"],
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQlLgMhirqBD_kME90hJMainspvF9Nmyl2_Q&s",
      address: "787, Bhavani Peth, Solapur, Maharashtra 413002"
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

