document.addEventListener('DOMContentLoaded', () => {
    const events = [
      {
        name: "Nashik Event Planners",
        ratings: "4.5/5",
        votes: "",
        TypesofEvents: ["Corporate Events", "Weddings", "Social Gatherings"],
        website: ["https://www.nashikeventplanners.com"],
        contact: ["+91 98222 34567"],
        poster: "https://content.jdmagicbox.com/comp/mumbai/d8/022pxx22.xx22.120511170359.d8d8/catalogue/d-light-and-mandap-decorators-sanpada-navi-mumbai-decorators-htueomb29p.jpg",
      
        address: "Near Nashik Road Railway Station, Nashik, Maharashtra 422101"
      },
      {
        name: "Elite Events",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Birthday Parties"],
        website: ["https://www.eliteeventsnashik.com"],
        contact: ["+91 90044 22334"],
        poster: "https://assets.cntraveller.in/photos/6518248def2f1357c63e279e/4:3/w_1440,h_1080,c_limit/Lead.jpg",
        address: "Opposite Nashik Municipal Corporation, Nashik, Maharashtra 422002"
      },
      {
        name: "Glamour Events",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Gatherings", "Social Events"],
        website: ["https://www.glamourevents.com"],
        contact: ["+91 94220 87654"],
        poster: "https://asset1.zankyou.com/images/mag-post/65b/4688/685//-/in/wp-content/uploads/2016/11/The-Wedding-Designers.jpg",
        address: "Shree Venkatesh Complex, Near Nashik Central Mall, Nashik, Maharashtra 422005"
      },
      {
        name: "Blissful Events",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Anniversaries", "Corporate Events"],
        website: ["https://www.blissfulevents.com"],
        contact: ["+91 98231 45678"],
        poster: "https://shaandaarevents.com/wp-content/uploads/2023/06/Wedding-planner-in-jaisalmer.webp",
        address: "Sanghvi Plaza, Opposite Nashik Engineering College, Nashik, Maharashtra 422010"
      },
      {
        name: "Divine Events",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Cultural Programs", "Social Gatherings"],
        website: ["https://www.divineevents.com"],
        contact: ["+91 91234 56789"],
        poster: "https://asset1.zankyou.com/images/mag-post/10b/3b74/685//-/in/wp-content/uploads/2016/11/Parinaya-Wedding-Management1.jpg",
        address: "Kushal Complex, Near Nashik Road, Nashik, Maharashtra 422101"
      },
      {
        name: "Royal Events",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Festivals"],
        website: ["https://www.royalevents.com"],
        contact: ["+91 97670 12345"],
        poster: "https://asset1.zankyou.com/images/mag-post/798/5b22/685//-/in/wp-content/uploads/2016/11/VarVadhu4.jpeg",
        address: "Chetna Complex, Near Sula Vineyard, Nashik, Maharashtra 422002"
      },
      {
        name: "Star Events",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Gatherings", "Birthday Parties"],
        website: ["https://www.starevents.com"],
        contact: ["+91 93670 12345"],
        poster: "https://www.showtimeevent.com/images/branches/wedding-planner-in-mumbai.jpeg",
        address: "Anand Plaza, Opp. Nashik Medical College, Nashik, Maharashtra 422001"
      },
      {
        name: "Celebration Events",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Social Gatherings", "Corporate Events"],
        website: ["https://www.celebrationevents.com"],
        contact: ["+91 90000 67890"],
        poster: "https://content.jdmagicbox.com/v2/comp/mumbai/u2/022pxx22.xx22.130713171431.q5u2/catalogue/ozone-events-andheri-west-mumbai-event-organisers-g3ysc0okbf.jpg",
        address: "Guruprasad Complex, Near Nashik Road Railway Station, Nashik, Maharashtra 422101"
      },
      {
        name: "Epic Events",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
        website: ["https://www.epicevents.com"],
        contact: ["+91 92012 34567"],
        poster: "https://content.jdmagicbox.com/comp/def_content_category/event-organisers-for-wedding/event-organisers-for-wedding5-event-organisers-for-wedding-5-xfluy-event-organisers-for-wedding-3-1b57a.jpg",
        address: "Sahyadri Tower, Near Trimbakeshwar Temple, Nashik, Maharashtra 422212"
      },
      {
        name: "Majestic Events",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Parties"],
        website: ["https://www.majestic.com"],
        contact: ["+91 97000 12345"],
        poster: "https://cdn0.weddingwire.in/vendor/9895/3_2/960/jpg/bandhan-the-wedding-event-management-company-15_15_219895-1558950330.jpeg",
        address: "Prithvi Complex, Near Nashik College, Nashik, Maharashtra 422005"
      },
      {
        name: "Vibrant Events",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Anniversaries", "Corporate Gatherings"],
        website: ["https://www.vibrantevents.com"],
        contact: ["+91 97670 67890"],
        poster: "https://lh3.googleusercontent.com/proxy/r7DdBoavxZgdTAs_u9HgWoCU6KECbQ2xXIvTt3Pc9cCIwcTm6XPMQ_XRiKy5z6vCrGiVFHD_lGbRUnQd-HmSjjD_dbRJX2Y0apv_vSS48AEqPaE",
        address: "Siddhivinayak Building, Near Bombay Sweets, Nashik, Maharashtra 422002"
      },
      {
        name: "Shree Events",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Social Gatherings", "Cultural Programs"],
        website: ["https://www.shreeevents.com"],
        contact: ["+91 96000 12345"],
        poster: "https://www.visionvivaah.com/blog/wp-content/uploads/2019/11/Top-10-wedding-planners-In-India-300x200.jpeg",
        address: "Aishwarya Plaza, Near Patel Chowk, Nashik, Maharashtra 422010"
      },
      {
        name: "Gala Events",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Gatherings", "Social Gatherings"],
        website: ["https://www.galaevents.com"],
        contact: ["+91 95274 23456"],
        poster: "https://cdn0.weddingwire.in/vendor/2167/3_2/960/jpg/daytime-wedding-decoration-ideas_15_272167-157761069755915.jpeg",
        address: "Kothari Heights, Near Nashik Railway Station, Nashik, Maharashtra 422101"
      },
      {
        name: "Wonder Events",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Festivals", "Corporate Events"],
        website: ["https://www.wonderevents.com"],
        contact: ["+91 99450 89012"],
        poster: "https://image.wedmegood.com/resized/540X/uploads/member/1108655/1633334507_153531335_1357766617891882_4350099949741661454_n.jpg?crop=4,393,1071,602",
        address: "Sai Mandir Complex, Opposite Nashik Central, Nashik, Maharashtra 422003"
      },
      {
        name: "Dream Events",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Anniversaries", "Corporate Events"],
        website: ["https://www.dreamevents.com"],
        contact: ["+91 99700 23456"],
        poster: "https://www.visionvivaah.com/blog/wp-content/uploads/2019/10/Best-Event-Management-Company-In-Chandigarh.jpg",
        address: "Venus Plaza, Near Sakri Phata, Nashik, Maharashtra 422212"
      },
      {
        name: "Radiant Events",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Birthday Parties", "Social Gatherings"],
        website: ["https://www.radiant.com"],
        contact: ["+91 96000 56789"],
        poster: "https://content.jdmagicbox.com/comp/delhi/v1/011pxx11.xx11.240210114007.t6v1/catalogue/perfection-creators-gurgaon-gurgaon-event-organisers-0sfsxo2g67.jpg",
        address: "Shivaji Nagar, Near Nashik Food Market, Nashik, Maharashtra 422005"
      },
      {
        name: "Perfect Planners",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Parties"],
        website: ["https://www.perfectplanners.com"],
        contact: ["+91 97500 67890"],
        poster: "https://asset1.zankyou.com/images/mag-post/718/eafb/685//-/in/wp-content/uploads/2016/11/The-Wedding-Designers3.jpg",
        address: "Siddhi Heights, Near Ganesh Temple, Nashik, Maharashtra 422002"
      },
      {
        name: "Grand Celebrations",
        ratings: "4.4/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Birthday Parties"],
        website: ["https://www.grandcelebrations.com"],
        contact: ["+91 98765 43210"],
        poster: "https://cdn0.weddingwire.in/vendor/9895/3_2/1280/jpg/bandhan-the-wedding-event-management-company-23_15_219895-1558950354.jpeg",
        address: "Nashik Road, Opposite Nashik Institute, Nashik, Maharashtra 422101"
      },
      {
        name: "Elegant Affairs",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Gatherings", "Social Events"],
        website: ["https://www.elegantaffairs.com"],
        contact: ["+91 96370 67890"],
        poster: "https://5.imimg.com/data5/SELLER/Default/2022/3/QA/MO/AY/13316212/wedding-event-planner-service-500x500.jpg",
        address: "Krishna Plaza, Near Omkar Lawns, Nashik, Maharashtra 422010"
      },
      {
        name: "Festive Moments",
        ratings: "4.2/5",
        votes: "",
        TypesofEvents: ["Weddings", "Engagements", "Social Gatherings"],
        website: ["https://www.festivemoments.com"],
        contact: ["+91 96450 89012"],
        poster: "https://www.visionvivaah.com/blog/wp-content/uploads/2019/10/Best-Event-Management-In-Punjab.jpg",
        address: "Chandrakant Tower, Near Trimbakeshwar Temple, Nashik, Maharashtra 422212"
      },
      {
        name: "Joyous Events",
        ratings: "4.3/5",
        votes: "",
        TypesofEvents: ["Weddings", "Birthday Parties", "Corporate Events"],
        website: ["https://www.joyousevents.com"],
        contact: ["+91 95274 23456"],
        poster: "https://content.jdmagicbox.com/comp/mumbai/d8/022pxx22.xx22.120511170359.d8d8/catalogue/d-light-and-mandap-decorators-sanpada-navi-mumbai-decorators-htueomb29p.jpg",
        address: "Shubham Complex, Near Nashik Road, Nashik, Maharashtra 422101"
      },
      {
        name: "Signature Creations",
        ratings: "4.1/5",
        votes: "",
        TypesofEvents: ["Weddings", "Corporate Events", "Parties"],
        website: ["https://www.signaturecreations.com"],
        contact: ["+91 94500 67890"],
        poster: "https://assets.cntraveller.in/photos/6518248def2f1357c63e279e/4:3/w_1440,h_1080,c_limit/Lead.jpg",
        address: "Sanket Plaza, Near Nashik Engineering College, Nashik, Maharashtra 422005"
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