document.addEventListener('DOMContentLoaded', () => {
    const events = [
        {
            name: "Hotel Parc Estique",
            ratings: "3.9/5",
            votes: "",
            TypesofEvents: ["Weddings", "Cocktail Parties", "Corporate Events"],
            website: ["Hotel Parc Estique"],
            contact: ["+91-8048046065"],
            poster: "https://plus.unsplash.com/premium_photo-1680807988328-7ba28ad24d9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnQlMjBoYWxsc3xlbnwwfHwwfHx8MA%3D%3D",
            address: "Viman Nagar, Pune-Ahmednagar Road, Pune, Maharashtra 411014"
        },
        {
            name: "Noorya Business and Banquet Hotel",
            ratings: "4.2/5",
            votes: "",
            TypesofEvents: ["Weddings", "Corporate Events", "Parties"],
            website: ["Noorya Hotel"],
            contact: ["+91-2249419834"],
            poster: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnQlMjBoYWxsc3xlbnwwfHwwfHx8MA%3D%3D",
            address: "Opposite Aditya Birla Hospital, Thergaon, Pimpri-Chinchwad, Maharashtra 411033"
        },
        {
            name: "Govind Garden",
            ratings: "2/5",
            votes: "",
            TypesofEvents: ["Weddings", "Birthdays", "Corporate Events"],
            website: ["Govind Garden"],
            contact: ["+91-8048047591"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXHGz3eRJr_96o6l4ed5w2k8s5khiDvoVNg&s",
            address: "Vibgyor School Road, Sai Nagar Park, Pimple Saudagar, Pimpri-Chinchwad, Maharashtra 411027"
        },
        {
            name: "Rangoli Banquets",
            ratings: "4.5/5",
            votes: "",
            TypesofEvents: ["Weddings", "Parties", "Corporate Events"],
            website: ["Rangoli Banquets"],
            contact: ["+91-8048058323"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEixTqfRxuOw93txEd9079bJd-eSCngx9uw&s",
            address: "Shewale Complex, Near Hotel Annapoorna, Opposite Elpro Company, Chinchwad, Pune 411033"
        },
        {
            name: "Spree Shivai Hotel",
            ratings: "4/5",
            votes: "",
            TypesofEvents: ["Weddings", "Parties", "Corporate Events"],
            website: ["Spree Shivai Hotel"],
            contact: ["+91-2249668489"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBsIF0-VeNff6a9SlVAxSjLpgehajPyj9tTQ&s",
            address: "Morwadi Court Road, MIDC, Pimpri Colony, Pune, Maharashtra 411018"
        },
        {
            name: "Royal Hall",
            ratings: "4/5",
            votes: "",
            TypesofEvents: ["Weddings", "Birthdays", "Corporate Events"],
            website: ["Royal Hall"],
            contact: ["[Available on request]"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjJ8JfxcMJ_fuZ24ATtjIclN0w8-keX62Sw&s",
            address: "[Available on request]"
        },
        {
            name: "CV Hall",
            ratings: "3.5/5",
            votes: "",
            TypesofEvents: ["Weddings", "Birthdays", "Corporate Events"],
            website: ["CV Hall"],
            contact: ["[Available on request]"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Jfm8L_mEQC-U732ZGDaW_aLqst53zVF7XA&s",
            address: "[Available on request]"
        },
        {
            name: "Shree Kohinoor Mangal Karyalaya",
            ratings: "4/5",
            votes: "",
            TypesofEvents: ["Weddings", "Engagements", "Corporate Events"],
            website: ["Shree Kohinoor Mangal Karyalaya"],
            contact: ["[Available on request]"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujhLcmb9oTUXS62sgl32OQBRTK802prsGmA&s",
            address: "34/12 Erandwana, Prabhat Road, Lane no-8, Karve Road, Pune"
        },
        {
            name: "Aquarius Resort",
            ratings: "4.5/5",
            votes: "",
            TypesofEvents: ["Weddings", "Corporate Events", "Parties"],
            website: ["Aquarius Resort"],
            contact: ["[Available on request]"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYnxyrmA1sICvLkppl8e6BeQa-lGbLz87H0A&s",
            address: "Sinhagad Road, Gorhe Budruk, Girinagar, Pune"
        },
        {
            name: "Fiesta Banquet Hall",
            ratings: "4/5",
            votes: "",
            TypesofEvents: ["Weddings", "Corporate Events", "Parties"],
            website: ["Fiesta Banquet Hall"],
            contact: ["[Available on request]"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYOtPSR53vt3Vayl_DsiX8jD_m_EKC_dJ7AQ&s",
            address: "Fergusson College Road, In Front Of Cello Platina, Pune"
        },
        {
            name: "Mastiff Hotel",
            ratings: "4.2/5",
            votes: "",
            TypesofEvents: ["Weddings", "Parties", "Corporate Events"],
            website: ["Mastiff Hotel"],
            contact: ["[Available on request]"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGafO_7QQ4nhK_uW4lJtP0dtVEC0RVT1_BZA&s",
            address: "Survey Number 80/1, Phase II Road, Marunji Road, Wakad, Pune"
        },
        {
            name: "Arthur's Theme",
            ratings: "4.3/5",
            votes: "",
            TypesofEvents: ["Weddings", "Parties", "Corporate Events"],
            website: ["Arthur's Theme"],
            contact: ["[Available on request]"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSilUHVaTOrFUZDIk9uEHKvr7oRiHgW3X0hnw&s",
            address: "Vrindavan Apartment, Lane 6, Koregaon Park, Pune"
        },
        {
            name: "Asodit Banquets",
            ratings: "4.1/5",
            votes: "",
            TypesofEvents: ["Weddings", "Parties", "Corporate Events"],
            website: ["Asodit Banquets"],
            contact: ["[Available on request]"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMq09-g3YQ0CCY0eiZcXAi-Ol_5b187GC5IA&s",
            address: "Magarpatta Road, Kirtane Baugh, Magarpatta, Hadapsar, Pune"
        },
        {
            name: "Marigold Banquet and Conventions",
            ratings: "4.5/5",
            votes: "",
            TypesofEvents: ["Weddings", "Corporate Events", "Family Functions"],
            website: ["Marigold Banquet"],
            contact: ["[Available on request]"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlgJapUJfHc9-Rw62SUUp1iIROoy8msdXnCw&s",
            address: "[Available on request]"
        },
        {
            name: "Yash Lawns",
            ratings: "4.9/5",
            votes: "",
            TypesofEvents: ["Weddings", "Corporate Events", "Cultural Festivals"],
            website: ["Yash Lawns"],
            contact: ["+91-80427-83924"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7ctB5LSfhLeYdLRPKZEsUKXJs8SbPz9PEg&s",
            address: "Sr.no.573, Hilltop, Behind Mahavir Furniture & Electronics, Bibvewadi Road, Pune, MH 411037"
        },
        {
            name: "Siddhi Banquets",
            ratings: "4.8/5",
            votes: "",
            TypesofEvents: ["Weddings", "Product Launches", "Receptions"],
            website: ["Siddhi Banquets"],
            contact: ["+91-20-2970-1114"],
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24t0eANMAmKAs-h3PG9vIuK2fI7xbx2Yzug&s",
            address: "Raja Mantri Road, Vakil Nagar, Erandwane, Pune, MH 411004"
        },
        {
            name: "The Central Park Hotel",
            ratings: "4.1/5",
            votes: "",
            TypesofEvents: ["Weddings", "Corporate Events", "Parties"],
            website: ["Central Park Hotel"],
            contact: ["+91-20-4010-4000"],
            poster: "https://media.istockphoto.com/id/2151968413/photo/conference-hall-with-row-upon-row-of-chairs.webp?b=1&s=170667a&w=0&k=20&c=_0ju1PW5m1Rn82uAJyz8KAXtvQcCcgjsPgmo53Q-zXk=",
            address: "Bund Garden Road, Pune, Maharashtra 411001"
        },
        {
            name: "Deccan Rendezvous Hotel",
            ratings: "4.3/5",
            votes: "",
            TypesofEvents: ["Weddings", "Corporate Events", "Parties"],
            website: ["Deccan Rendezvous"],
            contact: ["+91-20-2561-2345"],
            poster: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGV2ZW50JTIwaGFsbHMlMjA0a3xlbnwwfHwwfHx8MA%3D%3D",
            address: "Apte Road, Shivajinagar, Pune, Maharashtra 411004"
        },
        {
            name: "JW Marriott Hotel Pune",
            ratings: "4.7/5",
            votes: "",
            TypesofEvents: ["Weddings", "Corporate Events", "Parties"],
            website: ["JW Marriott Pune"],
            contact: ["+91-20-6683-3333"],
            poster: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGV2ZW50JTIwaGFsbHMlMjA0a3xlbnwwfHwwfHx8MA%3D%3D",
            address: "Senapati Bapat Road, Pune, Maharashtra 411053"
        },
        {
            name: "The O Hotel",
            ratings: "4.2/5",
            votes: "",
            TypesofEvents: ["Weddings", "Corporate Events", "Parties"],
            website: ["The O Hotel"],
            contact: ["+91-20-4001-1000"],
            poster: "https://media.istockphoto.com/id/907633960/photo/lobby-entrance-with-reception-desk-and-lounge-area.webp?b=1&s=170667a&w=0&k=20&c=GTrPwLjO7GPlZmPnWrlySzucUNyHFmqKPFmEj4cidc0=",
            address: "North Main Road, Koregaon Park, Pune, Maharashtra 411001"
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