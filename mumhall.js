    const events = document.addEventListener('DOMContentLoaded', () => {
        const events = [
            {
              name: "Taj Mahal Palace",
              ratings: "4.8/5",
              votes: "",
              TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Social Gatherings"],
              website: ["www.tajmahalpalace.com"],
              contact: ["+91-22-6665-3366"],
              poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGulgp7mSszoVLr64aiaYSl8HOHVH6T04C-w&s",
              address: "Apollo Bandar, Colaba, Mumbai, Maharashtra 400001"
            },
            {
              name: "The St. Regis Mumbai",
              ratings: "4.7/5",
              votes: "",
              TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Social Gatherings"],
              website: ["www.stregismumbai.com"],
              contact: ["+91-22-6162-8000"],
              poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpeXFzKZJq3ZJK7gyYQfWD6ncfTYEsMwq_Xg&s",
              address: "462, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013"
            },
            {
              name: "JW Marriott Mumbai Sahar",
              ratings: "4.6/5",
              votes: "",
              TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Social Gatherings"],
              website: ["www.jwmarriottmumbaisahar.com"],
              contact: ["+91-22-6882-8888"],
              poster: "https://cdn0.weddingwire.in/vendor/4725/3_2/960/jpg/grand-banquets-chembur-chembur-mumbai-banquet-halls-1u3vnbr_15_234725-160551981937089.jpeg",
              address: "IA Project Road, Chhatrapati Shivaji International Airport, Andheri, Mumbai, Maharashtra 400099"
            },
            {
              name: "Grand Hyatt Mumbai",
              ratings: "4.5/5",
              votes: "",
              TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Social Gatherings"],
              website: ["www.grandhyattmumbai.com"],
              contact: ["+91-22-6676-1234"],
              poster: "https://image.wedmegood.com/resized/540X/uploads/member/2888/1595414195_IMG_3774.JPG?crop=32,133,788,443",
              address: "Off Western Express Highway, Santacruz East, Mumbai, Maharashtra 400055"
            },
            {
              name: "Four Seasons Hotel Mumbai",
              ratings: "4.6/5",
              votes: "",
              TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Social Gatherings"],
              website: ["www.fourseasons.com/mumbai"],
              contact: ["+91-22-2481-8000"],
              poster: "https://weddingbels.com/wp-content/uploads/2021/01/Screenshot-2020-12-09-055709.jpg",
              address: "114, Dr. E. Moses Rd, Worli, Mumbai, Maharashtra 400018"
            },
            {
              name: "ITC Maratha, a Luxury Collection Hotel",
              ratings: "4.5/5",
              votes: "",
              TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Social Gatherings"],
              website: ["www.itcmaratha.com"],
              contact: ["+91-22-2830-3030"],
              poster: "https://blog.peppynite.com/wp-content/uploads/2022/12/image001-529x400.jpg",
              address: "Sahar Airport Road, Andheri East, Mumbai, Maharashtra 400099"
            },
            {
              name: "The Oberoi, Mumbai",
              ratings: "4.7/5",
              votes: "",
              TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Social Gatherings"],
              website: ["www.oberoihotels.com/hotels-in-mumbai"],
              contact: ["+91-22-6632-5757"],
              poster: "https://asset1.zankyou.com/images/mag-post/4dd/77c7/685//-/in/wp-content/uploads/2016/11/039_R-Garden-Social-Day_5772.jpg",
              address: "Nariman Point, Mumbai, Maharashtra 400021"
            },
            {
              name: "Sofitel Mumbai BKC",
              ratings: "4.5/5",
              votes: "",
              TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Social Gatherings"],
              website: ["www.sofitel-mumbai-bkc.com"],
              contact: ["+91-22-6117-5000"],
              poster: "https://5.imimg.com/data5/SELLER/Default/2022/2/KQ/WO/WJ/8770976/whatsapp-image-2022-02-11-at-2-37-18-pm-500x500.jpeg",
              address: "C-57, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051"
            },
            {
              name: "Renaissance Mumbai Convention Centre Hotel",
              ratings: "4.5/5",
              votes: "",
              TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Social Gatherings"],
              website: ["www.marriott.com/hotels/travel/bombr-renaissance-mumbai-convention-centre-hotel"],
              contact: ["+91-22-6692-7777"],
              poster: "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_2549/x_434,y_0,w_4531,h_2549,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/ira-by-orchid-mumbai-t-2-international-airport/Sapphire_Hall_IRA_Hotel_Mumbai",
              address: "2 & 3B, Near Chinmayanand Ashram, Powai, Mumbai, Maharashtra 400087"
            },
            {
              name: "Trident, Nariman Point",
              ratings: "4.6/5",
              votes: "",
              TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Social Gatherings"],
              website: ["www.tridenthotels.com/hotels-in-mumbai-nariman-point"],
              contact: ["+91-22-6632-4343"],
              poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQErkP-a3slp_9czKsvn-3FWXzN0BDzjL5f8A&s",
              address: "Nariman Point, Mumbai, Maharashtra 400021"
            },
            {
              name: "The Lalit Mumbai",
              ratings: "4.4/5",
              votes: "",
              TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Social Gatherings"],
              website: ["www.thelalit.com/the-lalit-mumbai"],
              contact: ["+91-22-6104-0300"],
              poster: "https://images.venuebookingz.com/18646-1558702489-wm-ashraya-banquet-hall-mumbai-2.jpg",
              address: "Sahar Airport Road, Andheri East, Mumbai, Maharashtra 400059"
            },
            {
              name: "Novotel Mumbai Juhu Beach",
              ratings: "4.3/5",
              votes: "",
              TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Social Gatherings"],
              website: ["www.novotelmumbai.com"],
              contact: ["+91-22-6693-4444"],
              poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3HpFHmsqUEzqb9N-zZyaVGPziDj4ANXzzgA&s",
              address: "Balraj Sahani Marg, Juhu Beach, Mumbai, Maharashtra 400049"
            },
            {
              name: "The Leela Mumbai",
              ratings: "4.6/5",
              votes: "",
              TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Social Gatherings"],
              website: ["www.theleela.com/leela-mumbai"],
              contact: ["+91-22-6691-1234"],
              poster: "https://image.wedmegood.com/resized/540X/uploads/member/16253/1698743465_2023_04_18__13_.jpg?crop=8,42,1345,756",
              address: "Sahar, Andheri East, Mumbai, Maharashtra 400059"
            },
            {
              name: "Holiday Inn Mumbai International Airport",
              ratings: "4.3/5",
              votes: "",
              TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Social Gatherings"],
              website: ["www.ihg.com/holidayinn/hotels/us/en/mumbai/bombr/hoteldetail"],
              contact: ["+91-22-4085-1800"],
              poster: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_53,w_1024,h_576,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/hotel-suba-galaxy-mumbai/WhatsApp_Image_2021-03-26_at_12.13.53_PM_m4dbr3",
              address: "Sakinaka Junction, Andheri - Kurla Rd, Andheri East, Mumbai, Maharashtra 400072"
            },
            {
              name: "Courtyard by Marriott Mumbai International Airport",
              ratings: "4.4/5",
              votes: "",
              TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Social Gatherings"],
              website: ["www.marriott.com/hotels/travel/bomcy-courtyard-mumbai-international-airport"],
              contact: ["+91-22-6136-9999"],
              poster: "https://www.myeventz.co.in/public/uploads/venue/JW%20Sahar%20Banquet%20Hall.jpg",
              address: "Andheri - Kurla Rd, Andheri East, Mumbai, Maharashtra 400059"
            },
            {
              name: "InterContinental Marine Drive-Mumbai",
              ratings: "4.5/5",
              votes: "",
              TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Social Gatherings"],
              website: ["www.ihg.com/intercontinental/hotels/gb/en/mumbai/bomma/hoteldetail"],
              contact: ["+91-22-3987-9999"],
              poster: "https://media.weddingz.in/images/20200505151251/prasad-food-divine-mulund-mumbai.jpg",
              address: "135, Marine Drive, Mumbai, Maharashtra 400020"
            },
            {
              name: "Meluha The Fern",
              ratings: "4.4/5",
              votes: "",
              TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Social Gatherings"],
              website: ["www.fernhotels.com/meluha-the-fern-mumbai"],
              contact: ["+91-22-2575-5555"],
              poster: "https://ik.imagekit.io/pu0hxo64d/uploads/gallery/tr:w-450,h-250/interior-of-abhinehas-ceremonial-malad-west-559.jpeg",
              address: "Central Avenue, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076"
            },
            {
              name: "Sun-n-Sand Mumbai",
              ratings: "4.2/5",
              votes: "",
              TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Social Gatherings"],
              website: ["www.sunnsandhotel.com"],
              contact: ["+91-22-2620-1818"],
              poster: "https://cdn0.weddingwire.in/vendor/2615/3_2/960/jpg/banquet-halls-the-classic-banquet-hall-event-space-1_15_302615-159975161782159.jpeg",
              address: "39, Juhu Beach, Mumbai, Maharashtra 400049"
            },
            {
                name: "The Westin Mumbai Garden City",
                ratings: "4.5/5",
                votes: "",
                TypesofEvents: ["Weddings", "Corporate Events", "Conferences", "Social Gatherings"],
                website: ["www.marriott.com/hotels/travel/bomwi-the-westin-mumbai-garden-city"],
                contact: ["+91-22-6147-0000"],
                poster:"https://blog.peppynite.com/wp-content/uploads/2022/12/Banquet-Halls-in-Mumbai.jpeg",
                address: "Central Avenue, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076",
            },
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

