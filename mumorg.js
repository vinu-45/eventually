    const events = document.addEventListener('DOMContentLoaded', () => {
        const events = [
          {
            name: "Cineyug Celebrations Pvt. Ltd.",
            ratings: "4.5/5",
            votes: "",
            TypesofEvents: ["Weddings", "Corporate Events", "Concerts"],
            website: ["cineyug.com"],
            contact: ["+91 22 2605 3961"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9JlSru_ghLlCi2MOZIzGkVEf4nKxEt5kfYw&s",
            address: "15th Road, Khar (W), Mumbai - 400052"
          },
          {
            name: "360 Degrees",
            ratings: "4.3/5",
            votes: "https://lodestar.guru/blog/wp-content/uploads/2023/04/Untitled-4.png",
            TypesofEvents: ["Corporate Events", "Weddings", "Product Launches"],
            website: ["360degreesevents.in"],
            contact: ["+91 22 6688 6688"],
            poster: "https://assets.cntraveller.in/photos/6518248def2f1357c63e279e/4:3/w_1440,h_1080,c_limit/Lead.jpg",
            address: "Marol, Andheri East, Mumbai - 400059"
          },
          {
            name: "Showtime Events (India) Pvt. Ltd.",
            ratings: "4.6/5",
            votes: "",
            TypesofEvents: ["Conferences", "Seminars", "Product Launches"],
            website: ["showtimegroup.in"],
            contact: ["+91 22 4244 5500"],
            poster: "https://www.visionvivaah.com/blog/wp-content/uploads/2019/11/Wizcraft-.jpg",
            address: "401, Shalimar Morya Park, Andheri (W), Mumbai - 400053"
          },
          {
            name: "Percept Limited",
            ratings: "4.4/5",
            votes: "",
            TypesofEvents: ["Live Concerts", "Corporate Events", "Sports Events"],
            website: ["perceptindia.in"],
            contact: ["+91 22 3044 5555"],
            poster: "https://www.visionvivaah.com/blog/wp-content/uploads/2019/10/Best-Event-Management-Company-In-Chandigarh.jpg",
            address: "P2, Raghuvanshi Estate, Senapati Bapat Marg, Lower Parel, Mumbai - 400013"
          },
          {
            name: "Wizcraft International Entertainment Pvt. Ltd.",
            ratings: "4.7/5",
            votes: "",
            TypesofEvents: ["Award Shows", "Concerts", "Corporate Events"],
            website: ["wizcraftworld.com"],
            contact: ["+91 22 2605 5060"],
            poster: "https://www.visionvivaah.com/blog/wp-content/uploads/2019/10/Best-Event-Management-In-Punjab.jpg",
            address: "4th Floor, Krystal, 206, Waterfield Road, Bandra (W), Mumbai - 400050"
          },
          {
            name: "Seventy Event Media Group",
            ratings: "4.5/5",
            votes: "",
            TypesofEvents: ["Corporate Events", "Weddings", "Special Events"],
            website: ["seventyemg.com"],
            contact: ["+91 22 2422 0000"],
            poster: "https://5.imimg.com/data5/SELLER/Default/2022/3/QA/MO/AY/13316212/wedding-event-planner-service-500x500.jpg",
            address: "2nd Floor, Vastu, 316, Gokhale Road, Dadar (W), Mumbai - 400028"
          },
          {
            name: "Tamarind Global",
            ratings: "4.4/5",
            votes: "",
            TypesofEvents: ["Destination Weddings", "Corporate Events", "MICE"],
            website: ["tamarindglobal.com"],
            contact: ["+91 22 2895 2555"],
            poster: "https://cdn0.weddingwire.in/vendor/9895/3_2/1280/jpg/bandhan-the-wedding-event-management-company-23_15_219895-1558950354.jpeg",
            address: "Tamarind House, Next to Bhagwati Hospital, Borivali (W), Mumbai - 400092"
          },
          {
            name: "Craftworld Events Pvt. Ltd.",
            ratings: "4.3/5",
            votes: "",
            TypesofEvents: ["Corporate Events", "Exhibitions", "Weddings"],
            website: ["craftworldevents.com"],
            contact: ["+91 22 2881 4422"],
            poster: "https://asset1.zankyou.com/images/mag-post/65b/4688/685//-/in/wp-content/uploads/2016/11/The-Wedding-Designers.jpg",
            address: "2nd Floor, Daulat Sagar Building, Malad (W), Mumbai - 400064"
          },
          {
            name: "C S Direkt Events & Exhibitions Pvt. Ltd.",
            ratings: "4.5/5",
            votes: "",
            TypesofEvents: ["Corporate Events", "Exhibitions", "Road Shows"],
            website: ["csdirekt.com"],
            contact: ["+91 22 2661 4444"],
            poster: "https://shaandaarevents.com/wp-content/uploads/2023/06/Wedding-planner-in-jaisalmer.webp",
            address: "408, Dheeraj Heritage, Santacruz (W), Mumbai - 400054"
          },
          {
            name: "Event Management Company",
            ratings: "4.3/5",
            votes: "",
            TypesofEvents: ["Weddings", "Birthday Parties", "Corporate Events"],
            website: ["eventmanagementcompany.in"],
            contact: ["+91 98812 34567"],
            poster: "https://asset1.zankyou.com/images/mag-post/10b/3b74/685//-/in/wp-content/uploads/2016/11/Parinaya-Wedding-Management1.jpg",
            address: "Shop No. 2, Heera Panna Mall, Oshiwara, Mumbai - 400104"
          },
          {
            name: "DNA Entertainment Networks Pvt. Ltd.",
            ratings: "4.6/5",
            votes: "",
            TypesofEvents: ["Concerts", "Sports Events", "Corporate Events"],
            website: ["dnanetworks.com"],
            contact: ["+91 22 2685 1943"],
            poster: "https://content.jdmagicbox.com/v2/comp/mumbai/u2/022pxx22.xx22.130713171431.q5u2/catalogue/ozone-events-andheri-west-mumbai-event-organisers-g3ysc0okbf.jpg",
            address: "107, Udyog Bhavan, Sonawala Road, Goregaon (E), Mumbai - 400063"
          },
          {
            name: "E Factor Entertainment Pvt. Ltd.",
            ratings: "4.5/5",
            votes: "",
            TypesofEvents: ["Weddings", "Corporate Events", "Private Parties"],
            website: ["efactor4u.com"],
            contact: ["+91 22 2851 1212"],
            poster: "https://content.jdmagicbox.com/comp/def_content_category/event-organisers-for-wedding/event-organisers-for-wedding5-event-organisers-for-wedding-5-xfluy-event-organisers-for-wedding-3-1b57a.jpg",
            address: "301, Sumer Plaza, Marol Maroshi Road, Andheri (E), Mumbai - 400059"
          },
          {
            name: "Midas Events",
            ratings: "4.4/5",
            votes: "",
            TypesofEvents: ["Corporate Events", "Weddings", "Product Launches"],
            website: ["midasevents.in"],
            contact: ["+91 98803 45678"],
            poster: "https://www.showtimeevent.com/images/branches/wedding-planner-in-mumbai.jpeg",
            address: "10th Road, JVPD Scheme, Vile Parle (W), Mumbai - 400049"
          },
          {
            name: "Sapphire Events",
            ratings: "4.3/5",
            votes: "",
            TypesofEvents: ["Weddings", "Corporate Events", "Social Gatherings"],
            website: ["sapphireevents.in"],
            contact: ["+91 22 2351 1234"],
            poster: "https://cdn0.weddingwire.in/vendor/9895/3_2/960/jpg/bandhan-the-wedding-event-management-company-15_15_219895-1558950330.jpeg",
            address: "5th Floor, Arun Chambers, Tardeo, Mumbai - 400034"
          },
          {
            name: "DreamzKrraft",
            ratings: "4.5/5",
            votes: "",
            TypesofEvents: ["Weddings", "Private Parties", "Corporate Events"],
            website: ["dreamzkrraft.com"],
            contact: ["+91 22 2825 2825"],
            poster: "https://content.jdmagicbox.com/comp/mumbai/d8/022pxx22.xx22.120511170359.d8d8/catalogue/d-light-and-mandap-decorators-sanpada-navi-mumbai-decorators-htueomb29p.jpg",
            address: "7th Floor, Windfall, Sahar Plaza, Andheri-Kurla Road, Mumbai - 400059"
          },
          {
            name: "Party Cruisers India Ltd.",
            ratings: "4.4/5",
            votes: "",
            TypesofEvents: ["Weddings", "Corporate Events", "Theme Parties"],
            website: ["partycruisersindia.com"],
            contact: ["+91 22 4090 2000"],
            poster: "https://www.visionvivaah.com/blog/wp-content/uploads/2019/11/Top-10-wedding-planners-In-India-2.jpg",
            address: "404, Town Center, Andheri-Kurla Road, Andheri (E), Mumbai - 400059"
          },
          {
            name: "Moksh Events",
            ratings: "4.5/5",
            votes: "",
            TypesofEvents: ["Corporate Events", "Weddings", "Concerts"],
            website: ["mokshevents.com"],
            contact: ["+91 22 2513 2513"],
            poster: "https://asset1.zankyou.com/images/mag-post/718/eafb/685//-/in/wp-content/uploads/2016/11/The-Wedding-Designers3.jpg",
            address: "5th Floor, Bhansali House, Tilak Road, Ghatkopar (E), Mumbai - 400077"
          },
          {
            name: "Rachnoutsav Events Pvt. Ltd.",
            ratings: "4.3/5",
            votes: "",
            TypesofEvents: ["Corporate Events", "Weddings", "Exhibitions"],
            website: ["rachnoutsav.com"],
            contact: ["+91 22 2888 1111"],
            poster: "https://lh3.googleusercontent.com/proxy/r7DdBoavxZgdTAs_u9HgWoCU6KECbQ2xXIvTt3Pc9cCIwcTm6XPMQ_XRiKy5z6vCrGiVFHD_lGbRUnQd-HmSjjD_dbRJX2Y0apv_vSS48AEqPaE",
            address: "502, Gemstar Commercial Complex, Kanchpada, Malad (W), Mumbai - 400064"
          },
          {
            name: "Krish Events",
            ratings: "4.2/5",
            votes: "",
            TypesofEvents: ["Weddings", "Corporate Events", "Social Events"],
            website: ["krishevents.in"],
            contact: ["+91 22 2801 1221"],
            poster: "https://www.visionvivaah.com/blog/wp-content/uploads/2019/11/Top-10-wedding-planners-In-India-300x200.jpeg",
            address: "403, Shree Naman Plaza, SV Road, Kandivali (W), Mumbai - 400067"
          },
          {
            name: "Pegasus Events Pvt. Ltd.",
            ratings: "4.5/5",
            votes: "",
            TypesofEvents: ["Corporate Events", "Weddings", "Concerts"],
            website: ["pegasusevents.in"],
            contact: ["+91 22 2520 2520"],
            poster: "https://cdn0.weddingwire.in/vendor/2167/3_2/960/jpg/daytime-wedding-decoration-ideas_15_272167-157761069755915.jpeg",
            address: "206, Siddharth Towers, Sion-Trombay Road, Chembur, Mumbai - 400071"
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

