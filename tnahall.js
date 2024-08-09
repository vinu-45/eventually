document.addEventListener('DOMContentLoaded', () => {
  const event = [
    {
      name: "Dome@NSCI SVP Stadium",
      ratings: "4.5/5",
      votes: "",
      TypesofEvents: ["Concerts", "Weddings", "Corporate Events", "Sports Events"],
      website: ["http://domeindia.com/"],
      contact: ["+91 22 2493 8811"],
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVwVLNdLRe3PlkOcCPj-1_kymVIxIn2wA_mA&s",
      address: "Lala Lajpatrai Marg, Lotus Colony, Worli, Mumbai, Maharashtra 400018"
    },
    {
      name: "Blue Sea Banquets",
      ratings: "4.3/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
      website: ["http://bluesea.in/"],
      contact: ["+91 22 2491 0131"],
      poster: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_79,w_1500,h_843,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/the-orchid-hotel-pune/DSC09299_ebmmfs_yyzivn",
      address: "Worli Sea Face, Dr. Annie Besant Road, Worli, Mumbai, Maharashtra 400018"
    },
    {
      name: "The Leela Mumbai",
      ratings: "4.6/5",
      votes: "",
      TypesofEvents: ["Conferences", "Weddings", "Social Events"],
      website: ["http://theleela.com/"],
      contact: ["+91 22 6691 1234"],
      poster: "https://d24l7ypac8dw56.cloudfront.net/MenuImages/pr1-52881-25299.jpg",
      address: "Sahar, Andheri East, Mumbai, Maharashtra 400059"
    },
    {
      name: "Renaissance Mumbai Convention Centre Hotel",
      ratings: "4.5/5",
      votes: "",
      TypesofEvents: ["Conferences", "Weddings", "Corporate Events"],
      website: ["http://marriott.com/"],
      contact: ["+91 22 6692 7777"],
      poster: "https://cdn0.weddingwire.in/vendor/9752/3_2/640/jpg/wedding-venue-aisshwarya-banquet-hall-event-space-1_15_299752-159621548151460.jpeg",
      address: "2 & 3B, Near Chinmayanand Ashram, Powai, Mumbai, Maharashtra 400087"
    },
    {
      name: "Vivette Banquets",
      ratings: "4.4/5",
      votes: "",
      TypesofEvents: ["Weddings", "Birthday Parties", "Corporate Events"],
      website: ["http://vivettebanquets.com/"],
      contact: ["+91 22 2592 5555"],
      poster: "https://media.weddingz.in/images/af4f127279cd2987f3da8273766fa38d/why-we-love-these-banquet-halls-and-lawns-in-bibwewadi-and-swargate-pune-and-you-should-too.jpg",
      address: "LBS Marg, Mulund West, Mumbai, Maharashtra 400080"
    },
    {
      name: "The Grand Banquet Hall",
      ratings: "4.5/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
      website: ["http://thegrandbanquet.com/"],
      contact: ["+91 22 2547 9393"],
      poster: "https://lh3.googleusercontent.com/Z2a1JojTNjRUt_XCe-x4h7bi49h4LaMnWCslBj9cD6oKxhSClWf7P13mBynl1NAyFMxxaFBNis82HOGHwtDrW3n3=w837-h641-l80-e31",
      address: "Nitin Company Junction, Almeda Road, Panch Pakhdi, Thane West, Thane, Maharashtra 400602"
    },
    {
      name: "Fortune Park Lake City",
      ratings: "4.4/5",
      votes: "",
      TypesofEvents: ["Conferences", "Weddings", "Social Events"],
      website: ["http://fortunehotels.in/"],
      contact: ["+91 22 3988 4444"],
      poster: "https://im.whatshot.in/img/2019/Nov/ragaa-in-cropped-1575028329.jpg?wp=1",
      address: "Jupiter Hospital Campus, Eastern Express Hwy, Laxmi Nagar, Thane West, Thane, Maharashtra 400601"
    },
    {
      name: "Golden Swan Country Club",
      ratings: "4.3/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
      website: ["http://goldenswan.com/"],
      contact: ["+91 22 2597 4567"],
      poster: "https://image.wedmegood.com/resized/540X/uploads/member/496376/1715433505_sasshi_edit_1__1_of_2_.JPG?crop=11,259,2024,1138",
      address: "Off Ghodbunder Road, Yeoor Hills, Thane West, Thane, Maharashtra 400607"
    },
    {
      name: "De Grandeur Hotel and Banquets",
      ratings: "4.2/5",
      votes: "",
      TypesofEvents: ["Weddings", "Conferences", "Social Gatherings"],
      website: ["http://degrandeurhotels.com/"],
      contact: ["+91 22 2597 1234"],
      poster: "https://images.venuebookingz.com/30122-1713524574-wm-review2.jpg",
      address: "GB Road, Opp. Suraj Water Park, Thane West, Thane, Maharashtra 400615"
    },
    {
      name: "Vihang's Inn",
      ratings: "4.1/5",
      votes: "",
      TypesofEvents: ["Weddings", "Conferences", "Social Gatherings"],
      website: ["http://vihangsinn.com/"],
      contact: ["+91 22 2597 7222"],
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcbx39OpscwUMW20zphx1sNYRQnQOIE9fvg&s",
      address: "Ghodbunder Road, Opp. Cine Wonder Mall, Thane West, Thane, Maharashtra 400607"
    },
    {
      name: "Palms Water Resort",
      ratings: "4.2/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
      website: ["http://palmswaterresort.com/"],
      contact: ["+91 22 2597 1234"],
      poster: "https://cdn0.weddingwire.in/vendor/2978/3_2/640/png/weddingvenue-urban-gateway-banquets-banquethsll-6_15_462978-170679205557657.jpeg",
      address: "Near Water Park, Ghodbunder Road, Thane West, Thane, Maharashtra 400607"
    },
    {
      name: "United 21 Thane",
      ratings: "4.1/5",
      votes: "",
      TypesofEvents: ["Conferences", "Weddings", "Social Gatherings"],
      website: ["http://united21thane.com/"],
      contact: ["+91 22 4157 7777"],
      poster: "https://imagewedz.oyoroomscdn.com/medium/photologue/images/noorya-hometel-noorya-hometel-imperial-grand-3.jpg",
      address: "29, LBS Marg, Near Vikas Complex, Thane West, Thane, Maharashtra 400601"
    },
    {
      name: "Satkar Residency",
      ratings: "4.2/5",
      votes: "",
      TypesofEvents: ["Conferences", "Weddings", "Social Gatherings"],
      website: ["http://satkarresidency.com/"],
      contact: ["+91 22 2598 8555"],
      poster: "https://lh3.googleusercontent.com/DIuM6yPgyrzHXeJL5S93DnCCiTmS5MrEx-XQs98_y1JY9XZgJ3QWKU59uWI60rqhcxGaeQL-qWAb75Lra7iChy-s=w1082-h641-l80-e31",
      address: "Pokhran Road No.1, Thane West, Thane, Maharashtra 400606"
    },
    {
      name: "Dadar Club",
      ratings: "4.0/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
      website: ["http://dadarclub.com/"],
      contact: ["+91 22 2446 3040"],
      poster: "https://5.imimg.com/data5/SELLER/Default/2022/1/TS/CE/NT/2413411/business-conference-hall-500x500.jpg",
      address: "Swatantrya Veer Savarkar Marg, Shivaji Park, Dadar West, Mumbai, Maharashtra 400028"
    },
    {
      name: "Kohinoor Continental",
      ratings: "4.3/5",
      votes: "",
      TypesofEvents: ["Conferences", "Weddings", "Social Gatherings"],
      website: ["http://kohinoorcontinental.com/"],
      contact: ["+91 22 6691 9000"],
      poster: "https://images.venuebookingz.com/18188-1512039327-wm-yaksh-samskruthi-hall-1.jpg",
      address: "Andheri-Kurla Road, Andheri East, Mumbai, Maharashtra 400059"
    },
    {
      name: "Golden Palace Banquet Hall",
      ratings: "4.2/5",
      votes: "",
      TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
      website: ["http://goldenpalace.com/"],
      contact: ["+91 22 2543 1772"],
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReD_NI-Zb5CgA3PWzP9f1wnJplNN3K1RnvKg&s",
      address: "Mahatma Phule Road, Opposite Apna Bazar, Naupada, Thane West, Thane, Maharashtra 400602"
    },
    {
      name: "Majestic Hall",
      ratings: "4.1/5",
      votes: "",
      TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
      website: ["http://majesticbanquet.com/"],
      contact: ["+91 22 2563 1234"],
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6zM2yFWh8IEyRXssFljnF_kDHcyKfODOSkw&s",
      address: "4th Floor, R Mall, LBS Marg, Mulund West, Mumbai, Maharashtra 400080"
    },
    {
      name: "Asian Banquets",
      ratings: "4.0/5",
      votes: "",
      TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
      website: ["http://asianbanquets.com/"],
      contact: ["+91 22 2594 1234"],
      poster: "https://media.weddingz.in/images/9c83ab5c89c7cfaa8dc3bcbfd5a3b809/the-10-most-popular-banquet-halls-in-mumbai-3.jpg",
      address: "LBS Marg, Bhandup West, Mumbai, Maharashtra 400078"
    },
    {
      name: "The Thane Club",
      ratings: "4.1/5",
      votes: "",
      TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
      website: ["http://thethaneclub.com/"],
      contact: ["+91 22 2538 6900"],
      poster: "https://www.ajivasanhall.com/images/s2.jpeg",
      address: "Dr. Moose Road, Talaopali, Thane West, Thane, Maharashtra 400602"
    },
    {
      name: "Thane Grand Central Banquet",
      ratings: "4.0/5",
      votes: "",
      TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
      website: ["http://thanegrandcentral.com/"],
      contact: ["+91 22 2594 5678"],
      poster: "https://miro.medium.com/v2/resize:fit:1200/1*Iqk925b5tfzxiVUCdgU4bQ.jpeg",
      address: "Next to New Horizon School, Kavesar, Ghodbunder Road, Thane West, Thane, Maharashtra 400607"
    }
  ];
  
  
    
  
  

  const eventList = document.getElementById('eventhehe');

  event.forEach(event => {
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

