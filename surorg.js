document.addEventListener('DOMContentLoaded', () => {
  const events = [
    {
      name: "Celebrations Events",
      ratings: "4.5/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Birthday Parties"],
      website: ["http://celebrationsevents.com/"],
      contact: ["+91 98812 34567"],
      poster: "https://www.visionvivaah.com/blog/wp-content/uploads/2019/10/Best-Event-Management-In-Punjab.jpg",
      address: "123, Shaniwar Peth, Solapur, Maharashtra 413007"
    },
    {
      name: "Elegant Events & Wedding Planners",
      ratings: "4.4/5",
      votes: "",
      TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
      website: ["http://elegantevents.com/"],
      contact: ["+91 98823 45678"],
      poster: "https://5.imimg.com/data5/SELLER/Default/2022/3/QA/MO/AY/13316212/wedding-event-planner-service-500x500.jpg",
      address: "456, Bhavani Peth, Solapur, Maharashtra 413002"
    },
    {
      name: "Dream Wedding Planners",
      ratings: "4.3/5",
      votes: "",
      TypesofEvents: ["Weddings", "Anniversaries", "Birthday Parties"],
      website: ["http://dreamweddingplanners.com/"],
      contact: ["+91 99012 34567"],
      poster: "https://cdn0.weddingwire.in/vendor/9895/3_2/1280/jpg/bandhan-the-wedding-event-management-company-23_15_219895-1558950354.jpeg",
      address: "789, Ashok Chowk, Solapur, Maharashtra 413006"
    },
    {
      name: "Shubham Events",
      ratings: "4.5/5",
      votes: "",
      TypesofEvents: ["Corporate Events", "Weddings", "Social Gatherings"],
      website: ["http://shubhamevents.com/"],
      contact: ["+91 98765 43210"],
      poster: "https://cdn0.weddingwire.in/vendor/2167/3_2/960/jpg/daytime-wedding-decoration-ideas_15_272167-157761069755915.jpeg",
      address: "101, South Kasba, Solapur, Maharashtra 413001"
    },
    {
      name: "Perfect Planners",
      ratings: "4.4/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Product Launches"],
      website: ["http://perfectplanners.com/"],
      contact: ["+91 98876 54321"],
      poster: "https://www.visionvivaah.com/blog/wp-content/uploads/2019/11/Top-10-wedding-planners-In-India-300x200.jpeg",
      address: "202, Sakhar Peth, Solapur, Maharashtra 413005"
    },
    {
      name: "A1 Event Organizers",
      ratings: "4.3/5",
      votes: "",
      TypesofEvents: ["Corporate Events", "Exhibitions", "Weddings"],
      website: ["http://a1eventorganizers.com/"],
      contact: ["+91 98456 78901"],
      poster: "https://lh3.googleusercontent.com/proxy/r7DdBoavxZgdTAs_u9HgWoCU6KECbQ2xXIvTt3Pc9cCIwcTm6XPMQ_XRiKy5z6vCrGiVFHD_lGbRUnQd-HmSjjD_dbRJX2Y0apv_vSS48AEqPaE",
      address: "303, Murarji Peth, Solapur, Maharashtra 413001"
    },
    {
      name: "Solapur Event Management",
      ratings: "4.2/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
      website: ["http://solapureventmanagement.com/"],
      contact: ["+91 99887 65432"],
      poster: "https://assets.cntraveller.in/photos/6518248def2f1357c63e279e/4:3/w_1440,h_1080,c_limit/Lead.jpg",
      address: "404, Sidheshwar Peth, Solapur, Maharashtra 413003"
    },
    {
      name: "Vijay Event Planners",
      ratings: "4.3/5",
      votes: "",
      TypesofEvents: ["Corporate Events", "Weddings", "Social Gatherings"],
      website: ["http://vijayeventplanners.com/"],
      contact: ["+91 98765 12345"],
      poster: "https://asset1.zankyou.com/images/mag-post/798/5b22/685//-/in/wp-content/uploads/2016/11/VarVadhu4.jpeg",
      address: "505, Hotgi Road, Solapur, Maharashtra 413003"
    },
    {
      name: "Royal Event Planners",
      ratings: "4.4/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
      website: ["http://royaleventplanners.com/"],
      contact: ["+91 98654 32109"],
      poster: "https://asset1.zankyou.com/images/mag-post/10b/3b74/685//-/in/wp-content/uploads/2016/11/Parinaya-Wedding-Management1.jpg",
      address: "606, Jodbhavi Peth, Solapur, Maharashtra 413002"
    },
    {
      name: "Eventastic Solutions",
      ratings: "4.5/5",
      votes: "",
      TypesofEvents: ["Conferences", "Weddings", "Exhibitions"],
      website: ["http://eventasticsolutions.com/"],
      contact: ["+91 99876 54321"],
      poster: "https://shaandaarevents.com/wp-content/uploads/2023/06/Wedding-planner-in-jaisalmer.webp",
      address: "707, Vijapur Road, Solapur, Maharashtra 413004"
    },
    {
      name: "Maheshwari Events",
      ratings: "4.3/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
      website: ["http://maheshwarievents.com/"],
      contact: ["+91 98765 65432"],
      poster: "https://asset1.zankyou.com/images/mag-post/65b/4688/685//-/in/wp-content/uploads/2016/11/The-Wedding-Designers.jpg",
      address: "808, Navi Peth, Solapur, Maharashtra 413007"
    },
    {
      name: "Radiant Event Planners",
      ratings: "4.2/5",
      votes: "",
      TypesofEvents: ["Weddings", "Birthday Parties", "Corporate Events"],
      website: ["http://radianeventplanners.com/"],
      contact: ["+91 97654 32109"],
      poster: "https://cdn0.weddingwire.in/vendor/9895/3_2/960/jpg/bandhan-the-wedding-event-management-company-15_15_219895-1558950330.jpeg",
      address: "909, Boramani Naka, Solapur, Maharashtra 413002"
    },
    {
      name: "Sankalp Event Management",
      ratings: "4.4/5",
      votes: "",
      TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
      website: ["http://sankalpeventmanagement.com/"],
      contact: ["+91 98567 43210"],
      poster: "https://content.jdmagicbox.com/comp/mumbai/d8/022pxx22.xx22.120511170359.d8d8/catalogue/d-light-and-mandap-decorators-sanpada-navi-mumbai-decorators-htueomb29p.jpg",
      address: "110, Old Employment Chowk, Solapur, Maharashtra 413003"
    },
    {
      name: "Golden Events",
      ratings: "4.3/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
      website: ["http://goldenevents.com/"],
      contact: ["+91 97654 12345"],
      poster: "https://www.visionvivaah.com/blog/wp-content/uploads/2019/11/Top-10-wedding-planners-In-India-2.jpg",
      address: "121, Dufferin Chowk, Solapur, Maharashtra 413001"
    },
    {
      name: "Classic Events",
      ratings: "4.4/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
      website: ["http://classicevents.com/"],
      contact: ["+91 98567 65432"],
      poster: "https://asset1.zankyou.com/images/mag-post/718/eafb/685//-/in/wp-content/uploads/2016/11/The-Wedding-Designers3.jpg",
      address: "232, Railway Lines, Solapur, Maharashtra 413001"
    },
    {
      name: "Blissful Events",
      ratings: "4.2/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Birthday Parties"],
      website: ["http://blissfulevents.com/"],
      contact: ["+91 97654 98765"],
      poster: "https://www.visionvivaah.com/blog/wp-content/uploads/2019/10/Best-Event-Management-Company-In-Chandigarh.jpg",
      address: "343, Budhwar Peth, Solapur, Maharashtra 413002"
    },
    {
      name: "Creative Event Planners",
      ratings: "4.3/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
      website: ["http://creativeeventplanners.com/"],
      contact: ["+91 96543 21098"],
      poster: "https://image.wedmegood.com/resized/540X/uploads/member/1108655/1633334507_153531335_1357766617891882_4350099949741661454_n.jpg?crop=4,393,1071,602",
      address: "454, Kumtha Naka, Solapur, Maharashtra 413003"
    },
    {
      name: "Royal Orchid Events",
      ratings: "4.4/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
      website: ["http://royalorchidevents.com/"],
      contact: ["+91 98765 43219"],
      poster: "https://www.visionvivaah.com/blog/wp-content/uploads/2019/11/Wizcraft-.jpg",
      address: "565, Pandharpur Road, Solapur, Maharashtra 413004"
    },
    {
      name: "Elegant Celebrations",
      ratings: "4.3/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
      website: ["http://elegantcelebrations.com/"],
      contact: ["+91 97654 12309"],
      poster: "https://lodestar.guru/blog/wp-content/uploads/2023/04/Untitled-4.png",
      address: "676, Soregaon, Solapur, Maharashtra 413005"
    },
    {
      name: "Joyful Events",
      ratings: "4.2/5",
      votes: "",
      TypesofEvents: ["Weddings", "Birthday Parties", "Corporate Events"],
      website: ["http://joyfulevents.com/"],
      contact: ["+91 96543 21087"],
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9JlSru_ghLlCi2MOZIzGkVEf4nKxEt5kfYw&s",
      address: "787, Bhagwat Peth, Solapur, Maharashtra 413007"
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

