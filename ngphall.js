document.addEventListener('DOMContentLoaded', () => {
    const events = [
      {
        name: "Le Meridien Nagpur",
        ratings: "4.6/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Conferences"],
        website: ["https://www.marriott.com/hotels/travel/ngpmc-le-meridien-nagpur/"],
        contact: ["+91 712 666 6888"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGulgp7mSszoVLr64aiaYSl8HOHVH6T04C-w&s",
        address: "Wardha Road, Nagpur, Maharashtra 441108"
      },
      {
        name: "Hotel Centre Point",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["http://hotelcentrepoint.com/"],
        contact: ["+91 712 242 5000"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpeXFzKZJq3ZJK7gyYQfWD6ncfTYEsMwq_Xg&s",
        address: "24, Central Bazaar Road, Ramdaspeth, Nagpur, Maharashtra 440010"
      },
      {
        name: "Tuli Imperial",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Anniversaries"],
        website: ["http://tuliimperial.com/"],
        contact: ["+91 712 665 3666"],
        poster: "https://cdn0.weddingwire.in/vendor/4725/3_2/960/jpg/grand-banquets-chembur-chembur-mumbai-banquet-halls-1u3vnbr_15_234725-160551981937089.jpeg",
        address: "Residency Road, Sadar, Nagpur, Maharashtra 440001"
      },
      {
        name: "Radisson Blu Hotel Nagpur",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Weddings", "Conferences", "Corporate Events"],
        website: ["https://www.radissonhotels.com/en-us/hotels/radisson-blu-nagpur"],
        contact: ["+91 712 666 5888"],
        poster: "https://image.wedmegood.com/resized/540X/uploads/member/2888/1595414195_IMG_3774.JPG?crop=32,133,788,443",
        address: "7, Wardha Road, Nagpur, Maharashtra 440015"
      },
      {
        name: "Hotel Heritage 2001",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Birthday Parties"],
        website: ["http://heritagehotel2001.com/"],
        contact: ["+91 712 252 3001"],
        poster: "https://weddingbels.com/wp-content/uploads/2021/01/Screenshot-2020-12-09-055709.jpg",
        address: "Dr. Munje Marg, Sitabuldi, Nagpur, Maharashtra 440012"
      },
      {
        name: "Hotel Hardeo",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
        website: ["http://hotelhardeo.com/"],
        contact: ["+91 712 666 9666"],
        poster: "https://blog.peppynite.com/wp-content/uploads/2022/12/image001-529x400.jpg",
        address: "Dr. Munje Marg, Sitabuldi, Nagpur, Maharashtra 440012"
      },
      {
        name: "Hotel LB",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Anniversaries"],
        website: ["http://hotellb.in/"],
        contact: ["+91 712 666 0777"],
        poster: "https://asset1.zankyou.com/images/mag-post/4dd/77c7/685//-/in/wp-content/uploads/2016/11/039_R-Garden-Social-Day_5772.jpg",
        address: "Mount Road Extension, Sadar, Nagpur, Maharashtra 440001"
      },
      {
        name: "Hotel Rahul Deluxe",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
        website: ["http://hotelrahuldeluxe.com/"],
        contact: ["+91 712 272 7070"],
        poster: "https://5.imimg.com/data5/SELLER/Default/2022/2/KQ/WO/WJ/8770976/whatsapp-image-2022-02-11-at-2-37-18-pm-500x500.jpeg",
        address: "Ganeshpeth, Nagpur, Maharashtra 440018"
      },
      {
        name: "Mohan Banquet Hall",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
        website: ["http://mohanbanquethall.com/"],
        contact: ["+91 712 276 4500"],
        poster: "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_2549/x_434,y_0,w_4531,h_2549,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/ira-by-orchid-mumbai-t-2-international-airport/Sapphire_Hall_IRA_Hotel_Mumbai",
        address: "Gandhi Sagar, Nagpur, Maharashtra 440018"
      },
      {
        name: "VCA Jamtha Clubhouse",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Weddings", "Social Gatherings"],
        website: ["http://vcajamthaclubhouse.com/"],
        contact: ["+91 712 228 0070"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQErkP-a3slp_9czKsvn-3FWXzN0BDzjL5f8A&s",
        address: "VCA Stadium, Wardha Road, Nagpur, Maharashtra 441108"
      },
      {
        name: "Suraburdi Meadows",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Conferences"],
        website: ["http://suraburdimeadows.com/"],
        contact: ["+91 712 252 1001"],
        poster: "https://images.venuebookingz.com/18646-1558702489-wm-ashraya-banquet-hall-mumbai-2.jpg",
        address: "Amravati Road, Nagpur, Maharashtra 440023"
      },
      {
        name: "Hotel Empress Palace",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["http://hotelepresspalace.com/"],
        contact: ["+91 712 666 2444"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3HpFHmsqUEzqb9N-zZyaVGPziDj4ANXzzgA&s",
        address: "Wardha Road, Nagpur, Maharashtra 440015"
      },
      {
        name: "Hotel Orient Grand",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
        website: ["http://hotelorientgrand.com/"],
        contact: ["+91 712 666 2222"],
        poster: "https://image.wedmegood.com/resized/540X/uploads/member/16253/1698743465_2023_04_18__13_.jpg?crop=8,42,1345,756",
        address: "Central Avenue Road, Nagpur, Maharashtra 440018"
      },
      {
        name: "Karan's Celebration Lawn",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
        website: ["http://karanscelebrationlawn.com/"],
        contact: ["+91 712 666 3333"],
        poster: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_53,w_1024,h_576,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/hotel-suba-galaxy-mumbai/WhatsApp_Image_2021-03-26_at_12.13.53_PM_m4dbr3",
        address: "Hingna Road, Nagpur, Maharashtra 440016"
      },
      {
        name: "Hotel Airport Centre Point",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["http://airportcentrepoint.com/"],
        contact: ["+91 712 666 0555"],
        poster: "https://www.myeventz.co.in/public/uploads/venue/JW%20Sahar%20Banquet%20Hall.jpg",
        address: "Wardha Road, Nagpur, Maharashtra 440015"
      },
      {
        name: "Hotel Tuli International",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
        website: ["http://tuliinternational.com/"],
        contact: ["+91 712 665 5000"],
        poster: "https://media.weddingz.in/images/20200505151251/prasad-food-divine-mulund-mumbai.jpg",
        address: "Residency Road, Sadar, Nagpur, Maharashtra 440001"
      },
      {
        name: "Jalsa Banquets",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["http://jalsabanquets.com/"],
        contact: ["+91 712 666 7777"],
        poster: "https://ik.imagekit.io/pu0hxo64d/uploads/gallery/tr:w-450,h-250/interior-of-abhinehas-ceremonial-malad-west-559.jpeg",
        address: "Wardha Road, Nagpur, Maharashtra 440015"
      },
      {
        name: "Hotel Hardeo Residency",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Anniversaries"],
        website: ["http://hardeoresidency.com/"],
        contact: ["+91 712 666 8888"],
        poster: "https://cdn0.weddingwire.in/vendor/2615/3_2/960/jpg/banquet-halls-the-classic-banquet-hall-event-space-1_15_302615-159975161782159.jpeg",
        address: "Central Avenue Road, Nagpur, Maharashtra 440018"
      },
      {
        name: "Hotel Heritage Embassy",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
        website: ["http://heritageembassy.com/"],
        contact: ["+91 712 666 9999"],
        poster: "https://blog.peppynite.com/wp-content/uploads/2022/12/Banquet-Halls-in-Mumbai.jpeg",
        address: "Wardha Road, Nagpur, Maharashtra 440015"
      },
      {
        name: "Shree Leela International",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
        website: ["http://shreeleelainternational.com/"],
        contact: ["+91 712 666 6666"],
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRrvBAc-dYqxJ0H_qdvzfyiSu54oeKXPdxcQ&s",
        address: "Ganeshpeth, Nagpur, Maharashtra 440018"
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