const questions = {
  tech: [
    {
      q: "What does 'URL' stand for?",
      options: ["Uniform Resource Locator", "Universal Resource Link", "User Reference Link", "Unified Routing Line"],
      answer: "Uniform Resource Locator"
    },
    {
      q: "Who is considered the father of the World Wide Web?",
      options: ["Steve Jobs", "Tim Berners-Lee", "Bill Gates", "Elon Musk"],
      answer: "Tim Berners-Lee"
    },
    {
      q: "What does 'IoT' stand for in technology?",
      options: ["Internet of Things", "Input of Technology", "Interface of Telecommunication", "Internet over Technology"],
      answer: "Internet of Things"
    },
    {
      q: "Which company created the Android operating system?",
      options: ["Microsoft", "Apple", "Samsung", "Google"],
      answer: "Google"
    },
    {
      q: "What does 'SSD' stand for in computer storage?",
      options: ["Secure Software Drive", "Solid State Drive", "Super Storage Disk", "Safe System Drive"],
      answer: "Solid State Drive"
    },
    {
      q: "Git is mainly used for what purpose?",
      options: ["Image Editing", "Video Compression", "Version Control", "Network Security"],
      answer: "Version Control"
    },
    {
      q: "Which of the following is an open-source operating system?",
      options: ["Windows", "macOS", "Linux", "iOS"],
      answer: "Linux"
    },
    {
      q: "What does 'IP' stand for in IP address?",
      options: ["Internet Protocol", "Internal Port", "Internet Port", "Internal Protocol"],
      answer: "Internet Protocol"
    }
  ],
  sports: [
    {
      q: "Which country hosted the 2024 Summer Olympics?",
      options: ["Japan", "France", "USA", "China"],
      answer: "France"
    },
    {
      q: "In which sport is the term 'love' used in scoring?",
      options: ["Cricket", "Badminton", "Tennis", "Table Tennis"],
      answer: "Tennis"
    },
    {
      q: "Who holds the record for the most Olympic gold medals?",
      options: ["Usain Bolt", "Simone Biles", "Michael Phelps", "Carl Lewis"],
      answer: "Michael Phelps"
    },
    {
      q: "Which country has won the most ICC Cricket World Cups (as of 2024)?",
      options: ["India", "Australia", "England", "Pakistan"],
      answer: "Australia"
    },
    {
      q: "How many players are there on a basketball team on the court at one time (per team)?",
      options: ["4", "5", "6", "7"],
      answer: "5"
    },
    {
      q: "Which Grand Slam tennis tournament is played on grass?",
      options: ["French Open", "Wimbledon", "US Open", "Australian Open"],
      answer: "Wimbledon"
    },
    {
      q: "What is the national sport of Japan?",
      options: ["Judo", "Karate", "Baseball", "Sumo wrestling"],
      answer: "Sumo wrestling"
    },
    {
      q: "Who is known as the 'King of Football'?",
      options: ["Lionel Messi", "Cristiano Ronaldo", "Diego Maradona", "Pelé"],
      answer: "Pelé"
    },
    {
      q: "In which country were the first modern Olympic Games held in 1896?",
      options: ["Italy", "France", "Greece", "USA"],
      answer: "Greece"
    },
    {
      q: "What sport uses a shuttlecock?",
      options: ["Volleyball", "Badminton", "Table Tennis", "Squash"],
      answer: "Badminton"
    }
  ],
  islamic: [
    {
      q: "What is the first month of the Islamic calendar?",
      options: ["Ramadan", "Muharram", "Shawwal", "Dhul-Hijjah"],
      answer: "Muharram"
    },
    {
      q: "How old was Prophet Muhammad (PBUH) when he received the first revelation?",
      options: ["25", "35", "40", "45"],
      answer: "40"
    },
    {
      q: "Which Sahabi is known as 'As-Siddiq'?",
      options: ["Umar ibn Al-Khattab", "Ali ibn Abi Talib", "Abu Bakr", "Uthman ibn Affan"],
      answer: "Abu Bakr"
    },
    {
      q: "Which battle is known as the “Day of the Criterion” (Yawm al-Furqan)?",
      options: ["Battle of Uhud", "Battle of Khaybar", "Battle of Hunayn", "Battle of Badr"],
      answer: "Battle of Badr"
    },
    {
      q: "Which Prophet is mentioned the most times in the Quran?",
      options: ["Prophet Muhammad (PBUH)", "Prophet Isa (A.S.)", "Prophet Musa (A.S.)", "Prophet Ibrahim (A.S.)"],
      answer: "Prophet Musa (A.S.)"
    },
    {
      q: "Who was the first martyr (Shaheed) in Islam?",
      options: ["Ammar ibn Yasir", "Sumayyah bint Khayyat", "Hamza ibn Abdul-Muttalib", "Bilal ibn Rabah"],
      answer: "Sumayyah bint Khayyat"
    },
    {
      q: "Which Surah contains Bismillah twice?",
      options: ["Surah Al-Tawbah", "Surah Al-Naml", "Surah Yaseen", "Surah Al-Fatiha"],
      answer: "Surah Al-Naml"
    },
    {
      q: "What was the name of the Prophet’s (PBUH) wet nurse who breastfed him?",
      options: ["Halima Saadia", "Amina bint Wahb", "Fatima bint Asad", "Sumayyah"],
      answer: "Halima Saadia"
    },
    {
      q: "What was the name of the treaty signed between the Muslims and the Quraysh in 6 AH?",
      options: ["Treaty of Madinah", "Treaty of Khaybar", "Treaty of Hudaibiyah", "Treaty of Hunayn"],
      answer: "Treaty of Hudaibiyah"
    },
    {
      q: "What is the total number of Makki Surahs in the Quran?",
      options: ["86", "114", "28", "30"],
      answer: "86"
    }
  ],
  science: [
    {
      q: "What is the chemical symbol for gold?",
      options: ["Gd", "Au", "Ag", "Go"],
      answer: "Au"
    },
    {
      q: "Which planet is known as the 'Red Planet'?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      q: "Which part of the brain controls balance and coordination?",
      options: ["Cerebrum", "Brainstem", "Cerebellum", "Hypothalamus"],
      answer: "Cerebellum"
    },
    {
      q: "What is the pH level of pure water at 25°C?",
      options: ["5", "7", "9", "11"],
      answer: "7"
    },
    {
      q: "What phenomenon causes rainbows to form?",
      options: ["Reflection only", "Refraction and dispersion", "Diffraction only", "Absorption"],
      answer: "Refraction and dispersion"
    },
    {
      q: "What’s the largest organ in the human body?",
      options: ["Liver", "Brain", "Skin", "Heart"],
      answer: "Skin"
    },
    {
      q: "What type of bond involves the sharing of electron pairs?",
      options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
      answer: "Covalent bond"
    },
    {
      q: "What is the primary gas found in Earth’s atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      answer: "Nitrogen"
    },
    {
      q: "Which planet has the strongest gravity?",
      options: ["Earth", "Jupiter", "Saturn", "Neptune"],
      answer: "Jupiter"
    }
  ],
  movies: [
    {
      q: "Which movie won the Oscar for Best Picture in 2023?",
      options: ["Everything Everywhere All At Once", "Top Gun: Maverick", "Avatar: The Way of Water", "The Banshees of Inisherin"],
      answer: "Everything Everywhere All At Once"
    },
    {
      q: "What is the name of the coffee shop the characters often visit in Friends?",
      options: ["Java House", "Brew Bros", "Central Perk", "Daily Grind"],
      answer: "Central Perk"
    },
    {
      q: "Which Marvel character famously says, “I am Iron Man”?",
      options: ["Thor", "Captain America", "Spider-Man", "Tony Stark"],
      answer: "Tony Stark"
    },
    {
      q: "In Stranger Things, what is the name of the parallel dimension?",
      options: ["The Void", "Shadow Realm", "The Other Side", "The Upside Down"],
      answer: "The Upside Down"
    },
    {
      q: "Who played the Joker in The Dark Knight (2008)?",
      options: ["Joaquin Phoenix", "Jared Leto", "Heath Ledger", "Christian Bale"],
      answer: "Heath Ledger"
    },
    {
      q: "Which movie features the quote, “May the Force be with you”?",
      options: ["Star Wars", "Star Trek", "Guardians of the Galaxy", "Interstellar"],
      answer: "Star Wars"
    },
    {
      q: "In Money Heist (La Casa de Papel), what mask do the robbers wear?",
      options: ["Joker mask", "Dali mask", "Phantom mask", "V for Vendetta mask"],
      answer: "Dali mask"
    },
    {
      q: "Which Bollywood movie features the dialogue “All is well”?",
      options: ["PK", "Taare Zameen Par", "3 Idiots", "Dangal"],
      answer: "3 Idiots"
    },
    {
      q: "Which Indian movie was nominated for Best Original Song and won at the Oscars in 2023?",
      options: ["RRR – Naatu Naatu", "Brahmastra – Kesariya", "Pathaan – Besharam Rang", "Kantara – Varaha Roopam"],
      answer: "RRR – Naatu Naatu"
    },
    {
      q: "Who directed the sci-fi thriller Interstellar?",
      options: ["James Cameron", "Ridley Scott", "Christopher Nolan", "Denis Villeneuve"],
      answer: "Christopher Nolan"
    }
  ]
};

export default questions;

