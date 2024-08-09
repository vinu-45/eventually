document.addEventListener('DOMContentLoaded', () => {
    const events = [
      {
        name: "The Event Factory",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Weddings", "Parties"],
        website: ["http://theeventfactory.in"],
        contact: ["+91 22 2538 1234"],
        poster: "https://content.jdmagicbox.com/comp/mumbai/d8/022pxx22.xx22.120511170359.d8d8/catalogue/d-light-and-mandap-decorators-sanpada-navi-mumbai-decorators-htueomb29p.jpg",
        address: "Office No. 6, Shivdarshan Complex, Opp. McDonald's, Thane West - 400601"
      },
      {
        name: "Encore Eventz",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Events"],
        website: ["http://encoreeventz.com"],
        contact: ["+91 22 2540 5678"],
        poster: "https://assets.cntraveller.in/photos/6518248def2f1357c63e279e/4:3/w_1440,h_1080,c_limit/Lead.jpg",
        address: "102, Harshvardhan Complex, Naupada, Thane West - 400602"
      },
      {
        name: "Elite Events",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Private Parties", "Product Launches"],
        website: ["http://eliteevents.in"],
        contact: ["+91 22 2173 4545"],
        poster: "https://asset1.zankyou.com/images/mag-post/65b/4688/685//-/in/wp-content/uploads/2016/11/The-Wedding-Designers.jpg",
        address: "203, Siddhi Tower, Vasant Vihar, Thane West - 400610"
      },
      {
        name: "Eventesia",
        ratings: "4.6/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Exhibitions"],
        website: ["http://eventesia.com"],
        contact: ["+91 22 2172 6578"],
        poster: "https://shaandaarevents.com/wp-content/uploads/2023/06/Wedding-planner-in-jaisalmer.webp",
        address: "501, Shreeji Complex, Kapurbawdi, Thane West - 400607"
      },
      {
        name: "Dreamz Unlimited",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Weddings", "Birthdays", "Corporate Events"],
        website: ["http://dreamzunlimited.in"],
        contact: ["+91 22 2585 4567"],
        poster: "https://asset1.zankyou.com/images/mag-post/10b/3b74/685//-/in/wp-content/uploads/2016/11/Parinaya-Wedding-Management1.jpg",
        address: "Shop No. 10, Ashar Residency, Pokhran Road No. 2, Thane West - 400610"
      },
      {
        name: "Inspira Events",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Weddings", "Social Events"],
        website: ["http://inspiraevents.in"],
        contact: ["+91 22 2595 6789"],
        poster: "https://asset1.zankyou.com/images/mag-post/798/5b22/685//-/in/wp-content/uploads/2016/11/VarVadhu4.jpeg",
        address: "B-402, Rutu Enclave, Anand Nagar, Thane West - 400615"
      },
      {
        name: "Celebrations Event Management",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Birthdays"],
        website: ["http://celebrationseventmanagement.com"],
        contact: ["+91 22 2537 1234"],
        poster: "https://www.showtimeevent.com/images/branches/wedding-planner-in-mumbai.jpeg",
        address: "Office No. 2, Ground Floor, Sulochana Apartments, Majiwada, Thane West - 400601"
      },
      {
        name: "Shree Events",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Social Gatherings", "Weddings"],
        website: ["http://shreeevents.in"],
        contact: ["+91 22 2580 4567"],
        poster: "https://content.jdmagicbox.com/v2/comp/mumbai/u2/022pxx22.xx22.130713171431.q5u2/catalogue/ozone-events-andheri-west-mumbai-event-organisers-g3ysc0okbf.jpg",
        address: "C-501, Vedant Complex, Vartak Nagar, Thane West - 400606"
      },
      {
        name: "Colors Event Management",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
        website: ["http://colorseventmanagement.com"],
        contact: ["+91 22 2589 3456"],
        poster: "https://content.jdmagicbox.com/comp/def_content_category/event-organisers-for-wedding/event-organisers-for-wedding5-event-organisers-for-wedding-5-xfluy-event-organisers-for-wedding-3-1b57a.jpg",
        address: "304, Sai Siddhi Towers, Manpada, Thane West - 400610"
      },
      {
        name: "Mosaic Events",
        ratings: "4.6/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Weddings", "Concerts"],
        website: ["http://mosaicevents.in"],
        contact: ["+91 22 2597 1234"],
        poster: "https://cdn0.weddingwire.in/vendor/9895/3_2/960/jpg/bandhan-the-wedding-event-management-company-15_15_219895-1558950330.jpeg",
        address: "6th Floor, Shree Sharanam Complex, Hiranandani Estate, Thane West - 400607"
      },
      {
        name: "Glitz Events",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Birthday Parties"],
        website: ["http://glitzevents.in"],
        contact: ["+91 22 2540 9876"],
        poster: "https://lh3.googleusercontent.com/proxy/r7DdBoavxZgdTAs_u9HgWoCU6KECbQ2xXIvTt3Pc9cCIwcTm6XPMQ_XRiKy5z6vCrGiVFHD_lGbRUnQd-HmSjjD_dbRJX2Y0apv_vSS48AEqPaE",
        address: "502, Highland Gardens, Dhokali, Thane West - 400608"
      },
      {
        name: "Majestic Events",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Weddings", "Exhibitions"],
        website: ["http://majestic-events.in"],
        contact: ["+91 22 2538 7654"],
        poster: "https://www.visionvivaah.com/blog/wp-content/uploads/2019/11/Top-10-wedding-planners-In-India-300x200.jpeg",
        address: "A-702, Eternity Mall, Teen Hath Naka, Thane West - 400604"
      },
      {
        name: "Celebrino Events",
        ratings: "4.3/5",
        votes: "https://lodestar.guru/blog/wp-content/uploads/2023/04/Untitled-4.png",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Events"],
        website: ["http://celebrinoevents.com"],
        contact: ["+91 22 2595 4321"],
        poster: "https://cdn0.weddingwire.in/vendor/2167/3_2/960/jpg/daytime-wedding-decoration-ideas_15_272167-157761069755915.jpeg",
        address: "207, Harmony Mall, LBS Road, Thane West - 400607"
      },
      {
        name: "Event Dynamics",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Private Parties", "Product Launches"],
        website: ["http://eventdynamics.in"],
        contact: ["+91 22 2537 0987"],
        poster: "https://image.wedmegood.com/resized/540X/uploads/member/1108655/1633334507_153531335_1357766617891882_4350099949741661454_n.jpg?crop=4,393,1071,602",
        address: "Shop No. 3, Om Sai Plaza, Panchpakhadi, Thane West - 400602"
      },
      {
        name: "Vibrant Events",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["http://vibrantevents.in"],
        contact: ["+91 22 2580 4567"],
        poster: "https://www.visionvivaah.com/blog/wp-content/uploads/2019/10/Best-Event-Management-Company-In-Chandigarh.jpg",
        address: "101, Lakeview Apartments, Vartak Nagar, Thane West - 400606"
      },
      {
        name: "Elite Event Planners",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Weddings", "Cultural Events"],
        website: ["http://eliteeventplanners.in"],
        contact: ["+91 22 2597 1234"],
        poster: "https://content.jdmagicbox.com/comp/delhi/v1/011pxx11.xx11.240210114007.t6v1/catalogue/perfection-creators-gurgaon-gurgaon-event-organisers-0sfsxo2g67.jpg",
        address: "403, Regency Towers, Hiranandani Meadows, Thane West - 400607"
      },
      {
        name: "Celebrationz Events",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Weddings", "Social Events"],
        website: ["http://celebrationzevents.in"],
        contact: ["+91 22 2589 1234"],
        poster: "https://asset1.zankyou.com/images/mag-post/718/eafb/685//-/in/wp-content/uploads/2016/11/The-Wedding-Designers3.jpg",
        address: "C-201, Devdarshan Complex, Manpada, Thane West - 400610"
      },
      {
        name: "Event Bliss",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Weddings", "Exhibitions"],
        website: ["http://eventbliss.in"],
        contact: ["+91 22 2580 9876"],
        poster: "https://cdn0.weddingwire.in/vendor/9895/3_2/1280/jpg/bandhan-the-wedding-event-management-company-23_15_219895-1558950354.jpeg",
        address: "702, Sneh Bandhan, Pokhran Road No. 2, Thane West - 400610"
      },
      {
        name: "Apex Events",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Cultural Events"],
        website: ["http://apexevents.in"],
        contact: ["+91 22 2538 4321"],
        poster: "https://5.imimg.com/data5/SELLER/Default/2022/3/QA/MO/AY/13316212/wedding-event-planner-service-500x500.jpg",
        address: "504, Gaurav Residency, Wagle Estate, Thane West - 400604"
      },
      {
        name: "Memorable Moments",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Private Parties"],
        website: ["http://memorablemoments.in"],
        contact: ["+91 22 2597 7654"],
        poster: "https://www.visionvivaah.com/blog/wp-content/uploads/2019/10/Best-Event-Management-In-Punjab.jpg",
        address: "10th Floor, Shivdham Complex, Ghodbunder Road, Thane West - 400607"
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