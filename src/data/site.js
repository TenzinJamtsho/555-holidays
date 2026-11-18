/* =====================================================================
   555 Holidays — site data (imported by every Astro page at build time)
   This file plays the role of data/tours.ts, data/festivals.ts and
   data/guides.ts. Edit content here; every page reads from it.
   Anything in [SQUARE BRACKETS] is a placeholder the agency must fill in.
   The site highlights placeholders in yellow so they are easy to spot.
   ===================================================================== */
export const SITE = {

  company: {
    name: "555 Holidays",
    domain: "555holidays.com",
    email: "info@bhutantourinfo.com",
    phone: "+975 17300392",
    whatsapp: "97517300392",
    address: "Babena – Samteling, Thimphu BT 11001, Bhutan",
    hours: "Monday – Saturday, 9:00 AM – 6:00 PM (Bhutan time)",
    instagram: "https://www.instagram.com/bhutantourinfo/",
    googleReviewsUrl: "[GOOGLE REVIEWS URL]",
    tripadvisorUrl: "[TRIPADVISOR URL]",
    rating: "[4.9]",
    reviewCount: "[XXX]",
    licence: "6013293",
    offices: [
      { name: "Bhutan", role: "Head office", lines: ["Babena – Samteling", "Thimphu BT 11001, Bhutan"], phone: "+975 17300392",
        map: "Babena, Samteling, Thimphu, Bhutan" },
      { name: "United States", role: "US office", lines: ["1664 Columbia Rd NW", "Washington, DC 20009, USA"], phone: "+1 (857) 919-4609",
        map: "1664 Columbia Rd NW, Washington, DC 20009" },
      { name: "India", role: "India office", lines: ["Murkunde YTP (OPC) Private Limited", "Flat 102, Soham CHS, Brahmin Gaon, Palaspe", "Panvel, Raigad 410206, India"],
        note: "GSTIN 27AARCM9165G1ZT", map: "Palaspe, Panvel, Raigad 410206" }
    ]
  },

  /* ---------- "Moments to Live" experiences (homepage) ---------- */
  experiences: [
    { title: "Wear the gho and kira", time: "dawn", tag: "Culture", img: "exp-kira",
      line: "We dress you in Bhutan's national dress, and you'll feel the difference walking into a dzong." },
    { title: "Farmhouse home-kitchen cooking", time: "midday", tag: "Food", img: "homestays3",
      line: "Cook ema datshi, chillies and cheese, by the hearth with a village family." },
    { title: "Archery with locals", time: "midday", tag: "Culture", img: "gal-3",
      line: "Try the national sport, complete with the songs, dances and friendly teasing." },
    { title: "Butter-lamp offering with a monk", time: "evening", tag: "Spiritual", img: "exp-lamps",
      line: "Light a butter lamp beside a monk and learn what the prayer means." },
    { title: "Hot-stone bath (dotsho)", time: "evening", tag: "Wellness", img: "hotstone",
      line: "Soak in a wooden tub warmed with fire-heated river stones after a day on the trail." },
    { title: "Traditional craft workshop", time: "midday", tag: "Craft", img: "exp-craft",
      line: "Sit at a loom or a thangka easel with the artisans keeping these crafts alive." },
    { title: "Thimphu after dark", time: "night", tag: "Nightlife", img: "exp-night",
      line: "Live-music bars, a traditional drayang show and late-night momos in the capital. [CONFIRM VENUES YOU RECOMMEND]" },
    { title: "Stargazing in the high valleys", time: "night", tag: "Nature", img: "exp-stars",
      line: "Far from city lights, we find you a dark meadow, a warm blanket and a flask of butter tea." },
    { title: "Rafting below Punakha Dzong", time: "midday", tag: "Adventure", img: "exp-raft",
      line: "Paddle the Pho Chhu or Mo Chhu with a local rafting crew, the dzong rising above the river." },
    { title: "Morning at the farmers market", time: "dawn", tag: "Food", img: "exp-market",
      line: "Wander Thimphu's Centenary Farmers Market (Thu–Sun) for chillies, cheese, red rice and incense." },
    { title: "Gasa hot springs", time: "evening", tag: "Wellness", img: "pkg-adventure",
      line: "Soak in the Gasa Tshachu, hot springs long believed to heal, beneath Gasa Dzong in the far north." },
    { title: "Sunrise hike to Tiger's Nest", time: "dawn", tag: "Adventure", img: "rev-1",
      line: "Set off early with your guide and reach the cliffside monastery before the day-trippers do." }
  ],

  /* ---------- Impact stats (placeholders; must be real numbers) ---------- */
  impact: [
    { num: "[XX]", label: "local families we work with" },
    { num: "[XX]", label: "trees planted with our guests" },
    { num: "[XX]%", label: "of our team from Bhutanese villages" },
    { num: "3", label: "offices: Thimphu, Washington DC and India" }
  ],

  /* ---------- Tour categories ---------- */
  categories: [
    { key: "cultural", name: "Cultural", img: "pkg-cultural",
      text: "Dzongs, monasteries and valley villages at an unhurried pace, from the western Golden Triangle to the heartland of Bumthang." },
    { key: "festival", name: "Festivals", img: "pkg-festival",
      text: "Time your journey with a tshechu: masked dances, families in their finest silk, and blessings shared by the whole valley." },
    { key: "trek", name: "Trekking", img: "pkg-trek",
      text: "From an overnight ridge camp above Tiger's Nest to high passes beneath Jomolhari, with yaks and silence as company." }
  ],

  /* ---------- Signature Journeys ----------
     Our three flagship routes, designed "slow": short drives, 2–3 nights
     per place. Drive times follow the Department of Tourism guide and our
     road table. "valleys" and "moments" pre-fill the trip planner.          */
  signatures: [
    { slug: "the-slow-west", name: "The Slow West", cat: "signature", days: 7, nights: 6, img: "rev-1",
      for: "First-time visitors", pace: "Gentle", maxDrive: "3.5 hrs", perPlace: "2 nights in each valley",
      region: "Paro · Thimphu · Punakha",
      tagline: "Bhutan's western valleys, without the rush.",
      summary: "The classic western valleys, done the slow way: two nights in each place, never more than three and a half hours on the road, and time each day for the small moments: a farmhouse lunch, the weekend market, a hot-stone bath before the Tiger's Nest hike.",
      highlights: ["Tiger's Nest at sunrise, before the crowds", "Punakha Dzong and a farmhouse lunch", "Thimphu's weekend market and craft workshops", "A hot-stone bath in Paro"],
      valleys: ["thimphu", "punakha"],
      moments: ["Morning at the farmers market", "Traditional craft workshop", "Farmhouse home-kitchen cooking", "Hot-stone bath (dotsho)", "Sunrise hike to Tiger's Nest"],
      itinerary: [
        { t: "Arrive in Paro, on to Thimphu", d: "Your guide meets you at the airport. A gentle one-hour drive to Thimphu, and the rest of the day is yours.", o: "Thimphu", drive: "1 hr" },
        { t: "Thimphu, slowly", d: "The Centenary Farmers Market (Thu–Sun), Buddha Dordenma and a visit to a craft workshop. In the evening, Thimphu after dark.", o: "Thimphu" },
        { t: "Over Dochula to Punakha", d: "Cross Dochula Pass and its 108 chortens, then descend into the warm Punakha valley. Afternoon walk to Chimi Lhakhang.", o: "Punakha", drive: "3 hrs" },
        { t: "A day in Punakha", d: "Punakha Dzong in the morning light, then lunch at a farmhouse kitchen. Optional rafting on the Mo Chhu.", o: "Punakha" },
        { t: "Back west to Paro", d: "An unhurried drive to Paro, then a hot-stone bath to prepare for tomorrow's hike.", o: "Paro", drive: "3.5 hrs" },
        { t: "Tiger's Nest at sunrise", d: "Set off early and reach Taktsang before the day-trippers. Light a butter lamp on the way down.", o: "Paro" },
        { t: "Departure", d: "Transfer to Paro International Airport.", o: "" }
      ] },
    { slug: "heartland-and-highlands", name: "Heartland & Highlands", cat: "signature", days: 12, nights: 11, img: "dest-phobjikha",
      for: "Travellers who want depth", pace: "Balanced", maxDrive: "One long day; others 3 hrs or less", perPlace: "2–3 nights in each valley",
      region: "Paro · Thimphu · Punakha · Phobjikha · Bumthang",
      tagline: "From the western valleys to Bhutan's spiritual heartland.",
      summary: "Go beyond the west into the glacial Phobjikha valley and the four sacred valleys of Bumthang. We break the long road east with stays of two or three nights, and fly back from Bumthang instead of retracing two days of driving.",
      highlights: ["Phobjikha valley and the black-necked cranes (winter)", "Bumthang's oldest temples and the Burning Lake", "Trongsa Dzong on the road east", "A short flight back from Bumthang [CONFIRM FLIGHT SCHEDULE]"],
      valleys: ["thimphu", "punakha", "phobjikha", "bumthang"],
      moments: ["Morning at the farmers market", "Archery with locals", "Farmhouse home-kitchen cooking", "Butter-lamp offering with a monk", "Hot-stone bath (dotsho)", "Stargazing in the high valleys", "Sunrise hike to Tiger's Nest"],
      itinerary: [
        { t: "Arrive in Paro, on to Thimphu", d: "A gentle one-hour drive from the airport, then the afternoon is yours.", o: "Thimphu", drive: "1 hr" },
        { t: "Thimphu", d: "The weekend market, Buddha Dordenma, and archery with locals in the afternoon.", o: "Thimphu" },
        { t: "Over Dochula to Punakha", d: "108 chortens at Dochula Pass, then the warm Punakha valley.", o: "Punakha", drive: "3 hrs" },
        { t: "Punakha", d: "Punakha Dzong and a farmhouse lunch, with time to rest.", o: "Punakha" },
        { t: "Up to Phobjikha", d: "Climb to the wide glacial valley of Phobjikha and Gangtey Gompa.", o: "Phobjikha", drive: "3 hrs" },
        { t: "Phobjikha", d: "The Phobjikha Nature Trail, and in winter the black-necked cranes. Stars over the valley at night.", o: "Phobjikha" },
        { t: "The road east to Bumthang", d: "The one long day, broken with lunch and a visit to Trongsa Dzong.", o: "Bumthang", drive: "about 6 hrs, with stops" },
        { t: "Bumthang's sacred valleys", d: "Jambay Lhakhang, Kurjey Lhakhang and Tamshing, then a butter-lamp offering.", o: "Bumthang" },
        { t: "A slow day in Bumthang", d: "The Burning Lake, Ura village, and a hot-stone bath.", o: "Bumthang" },
        { t: "Fly back to Paro", d: "A short domestic flight saves two days on the road. [CONFIRM FLIGHT SCHEDULE] Afternoon at leisure in Paro.", o: "Paro" },
        { t: "Tiger's Nest at sunrise", d: "The cliffside monastery before the crowds.", o: "Paro" },
        { t: "Departure", d: "Transfer to Paro International Airport.", o: "" }
      ] },
    { slug: "walk-and-rest", name: "Walk & Rest", cat: "signature", days: 9, nights: 8, img: "why", grade: "Moderate",
      for: "Active travellers", pace: "Active", maxDrive: "3.5 hrs", perPlace: "2 nights either side of the trek",
      region: "Paro · Thimphu · Dagala · Punakha",
      tagline: "Three days on the high trails, with real rest either side.",
      summary: "Acclimatise in Paro, walk three days on the Dagala trail over Japhu La (4,185 m) with views of the Himalaya, then rest properly in the warm Punakha valley with a hot-stone bath and a farmhouse lunch. Camping gear, cooks and pack animals are all arranged.",
      highlights: ["The Dagala trek over Japhu La (4,185 m)", "Tiger's Nest hike to acclimatise", "Two rest days in the Punakha valley", "Hot-stone bath after the trail"],
      valleys: ["thimphu", "punakha"], trek: true,
      moments: ["Sunrise hike to Tiger's Nest", "Hot-stone bath (dotsho)", "Farmhouse home-kitchen cooking", "Rafting below Punakha Dzong"],
      itinerary: [
        { t: "Arrive in Paro", d: "Settle in, with a short walk in the valley to start adjusting to the altitude.", o: "Paro" },
        { t: "Tiger's Nest", d: "A good first hike to acclimatise, and the most famous view in Bhutan.", o: "Paro" },
        { t: "To Thimphu", d: "A short drive, a gear check with your trek crew and an easy afternoon.", o: "Thimphu", drive: "1 hr" },
        { t: "Trek: Genekha to Tueshi", d: "9 km, about 6 hours. An easy valley walk past Tshotshekha village.", o: "Camp, 3,250 m" },
        { t: "Trek: Tueshi to Shungkula", d: "10 km, about 5 hours, over Japhu La (4,185 m) with views of the northern range.", o: "Camp, 3,500 m" },
        { t: "Trek out, then down to Punakha", d: "6 km, about 3 hours, to Chamgang, then drive down to the warm Punakha valley and a hot-stone bath.", o: "Punakha", drive: "about 3 hrs" },
        { t: "Rest in Punakha", d: "Sleep in. Farmhouse lunch, optional rafting, or nothing at all.", o: "Punakha" },
        { t: "Back to Paro", d: "An unhurried drive west, with a last evening in Paro town.", o: "Paro", drive: "3.5 hrs" },
        { t: "Departure", d: "Transfer to Paro International Airport.", o: "" }
      ] }
  ],

  /* ---------- Trip planner: valleys ----------
     pos = approximate driving hours from Paro along the main road (from the
     road table); nights = suggested nights at a relaxed pace.
     detour = extra hours for a side trip off the main road (Haa: there and back from Paro).               */
  planner: {
    valleys: [
      { key: "thimphu", name: "Thimphu", note: "The capital: markets, crafts, nightlife", img: "dest-thimphu", pos: 1, nights: 2 },
      { key: "haa", name: "Haa", note: "Quiet valley over Chele La pass", img: "why", pos: 0.5, nights: 1, detour: 4 },
      { key: "punakha", name: "Punakha", note: "Warm valley, the great dzong, rafting", img: "dest-punakha", pos: 4, nights: 2 },
      { key: "phobjikha", name: "Phobjikha", note: "Glacial valley, cranes in winter", img: "dest-phobjikha", pos: 6.5, nights: 2 },
      { key: "bumthang", name: "Bumthang", note: "Spiritual heartland, oldest temples", img: "dest-bumthang", pos: 12, nights: 3 }
    ],
    paroNights: 2,
    trekNights: 3
  },

  /* ---------- Tours (data/tours.ts) ---------- */
  tours: [
    { slug: "glint-of-west-bhutan", name: "Glint of West Bhutan", cat: "cultural", days: 5, nights: 4, region: "Paro · Thimphu · Punakha", img: "about-1",
      summary: "The western Golden Triangle in five days: more than ten historic sites linked to Zhabdrung Ngawang Namgyel, Dochula Pass, and a choice of Tiger's Nest or Chele La.",
      highlights: ["Tashichho Dzong & Buddha Dordenma", "Dochula Pass (3,100 m) and its 108 chortens", "Punakha Dzong & Chimi Lhakhang", "Tiger's Nest hike or Chele La Pass (3,988 m)"],
      itinerary: [
        { t: "Paro → Thimphu", d: "Your guide meets you at Paro airport. Drive to Thimphu (1 hr) and, if time allows, visit Tashichho Dzong.", o: "Thimphu, 2,300 m" },
        { t: "Thimphu → Punakha", d: "Memorial Chorten, Buddha Dordenma, Changangkha Lhakhang and the Takin Preserve, then over Dochula Pass (3,100 m) down to Punakha.", o: "Punakha, 1,350 m" },
        { t: "Punakha → Paro", d: "Walk to Chimi Lhakhang, then drive to Paro (3.5 hrs) for the National Museum, Paro Dzong, the old wooden bridge and Kichu Lhakhang.", o: "Paro, 2,200 m" },
        { t: "Paro: your choice", d: "Either hike to Tiger's Nest and visit Drukgyal Dzong, or drive up to Chele La Pass (3,988 m) for views over the Paro and Haa valleys.", o: "Paro" },
        { t: "Departure", d: "Transfer to Paro International Airport.", o: "" }
      ] },
    { slug: "mystique-west-bhutan", name: "Mystique West Bhutan", cat: "cultural", days: 6, nights: 5, region: "Paro · Thimphu · Punakha", img: "dest-thimphu",
      summary: "A slower week in the west, with a full day in Thimphu for the nunnery, the weekend market, the paper mill and the School of Arts & Crafts.",
      highlights: ["A full day of Thimphu sightseeing", "Centenary Farmers Market (Thu–Sun)", "Punakha Dzong", "Tiger's Nest hike"],
      itinerary: [
        { t: "Paro → Thimphu", d: "Arrival, free time, and Tashichho Dzong if time allows.", o: "Thimphu, 2,300 m" },
        { t: "Thimphu", d: "Morning: Memorial Chorten, Buddha Dordenma, Changangkha Lhakhang, the Takin enclosure and Zilukha Nunnery. Afternoon: farmers market (Thu–Sun), paper mill and School of Arts & Crafts.", o: "Thimphu" },
        { t: "Thimphu → Punakha", d: "Over Dochula Pass to Punakha Dzong, with an optional walk to Chimi Lhakhang (2.5 hrs drive).", o: "Punakha, 1,350 m" },
        { t: "Punakha → Paro", d: "National Museum, Paro Dzong, the wooden bridge, Kichu Lhakhang (8th century) and an evening in Paro town.", o: "Paro, 2,200 m" },
        { t: "Tiger's Nest", d: "Hike to Taktsang and visit Drukgyal Dzong.", o: "Paro" },
        { t: "Departure", d: "Drop-off at Paro airport two hours before your flight.", o: "" }
      ] },
    { slug: "wonderful-west-bhutan", name: "Wonderful West Bhutan", cat: "cultural", days: 7, nights: 6, region: "Western Bhutan", img: "gal-2",
      summary: "[TOUR DESCRIPTION: the old site's page for this tour could not be read]",
      highlights: ["[HIGHLIGHT]", "[HIGHLIGHT]", "[HIGHLIGHT]"] },
    { slug: "central-bhutan-impression", name: "Central Bhutan Impression", cat: "cultural", days: 9, nights: 8, region: "Trongsa · Bumthang · Phobjikha", img: "dest-bumthang", featured: true,
      summary: "[TOUR DESCRIPTION: the old site's page for this tour could not be read]",
      highlights: ["[HIGHLIGHT]", "[HIGHLIGHT]", "[HIGHLIGHT]"] },

    { slug: "thimphu-festival-tour", name: "Thimphu Festival Tour", cat: "festival", days: 8, region: "Thimphu", img: "pkg-festival",
      summary: "Bhutan's largest and best-loved tshechu, usually in September or October (10–12 October in 2027). Locals wear their finest silk and share elaborate picnics, and you can join the Drupchen beforehand. Book about six months ahead.",
      highlights: ["Thimphu Tshechu masked dances", "Optional Drupchen beforehand", "Thimphu, Punakha & Paro sights"] },
    { slug: "paro-festival-tour", name: "Paro Festival Tour", cat: "festival", days: 10, region: "Paro", img: "rev-2",
      summary: "One of the largest festivals, held in March or April (18–22 March in 2027) when rhododendrons, magnolias and primulas bloom and the weather is mild and clear.",
      highlights: ["Paro Tshechu", "Spring flowers", "Tiger's Nest"] },
    { slug: "punakha-festival-tour", name: "Punakha Festival Tour", cat: "festival", days: 7, region: "Punakha", img: "dest-punakha",
      summary: "The Drubchen and Tshechu at Punakha Dzong, usually in February or March (13–18 February in 2027), with sights in Paro, Thimphu and Punakha.",
      highlights: ["Punakha Drubchen & Tshechu", "Tashichho Dzong", "Rinpung Dzong"] },
    { slug: "nimalung-festival-tour", name: "Nimalung Festival Tour", cat: "festival", days: 11, region: "Bumthang", img: "dest-bumthang",
      summary: "A rare three-day village tshechu in Bumthang's Chhume valley, with Buddhist tradition, distinctive architecture and rural life barely touched by the outside world.",
      highlights: ["Nimalung Tshechu", "Bumthang's four valleys", "Rural village life"] },

    { slug: "dagala-trek-cultural-tour", name: "Dagala Trek & Cultural Tour", cat: "trek", days: 15, nights: 14, region: "Across Bhutan", img: "gal-1", grade: "Moderate",
      summary: "One of Bhutan's oldest routes still in use, combined with a full cultural tour from Thimphu to Bumthang. The three-day trek crosses Japhu La (4,185 m) with views of the Eastern Himalaya.",
      highlights: ["Japhu La (4,185 m)", "Bumthang & the Burning Lake", "Phobjikha crane valley", "Haa valley & Chele La"],
      itinerary: [
        { t: "Paro → Thimphu", d: "Mountain flight in; free time in Thimphu.", o: "Thimphu, 2,300 m" },
        { t: "Thimphu", d: "Weekend market, paper mill, arts school, Memorial Chorten, Changangkha, the takin and the Zilukha viewpoint.", o: "Thimphu" },
        { t: "Thimphu → Punakha", d: "Dochula (3,010 m) and Punakha Dzong (2.5 hrs).", o: "Punakha, 1,350 m" },
        { t: "Punakha → Trongsa", d: "Chimi Lhakhang, Wangdue Dzong and Pele La (3,300 m), 4.5 hrs.", o: "Trongsa, 2,200 m" },
        { t: "Trongsa → Jakar", d: "Trongsa Dzong & museum, Yotong La (3,425 m) and a weaving centre (3 hrs).", o: "Jakar, 2,650 m" },
        { t: "Ura excursion", d: "Mebar Tsho, Shertang La (3,573 m), views of Gangkar Puensum (7,540 m) and Ura village.", o: "Jakar" },
        { t: "Bumthang", d: "Jambay Lhakhang, Kurjey, Tamshing and the Swiss farm.", o: "Jakar" },
        { t: "Jakar → Phobjikha", d: "The crane valley and Gangtey Gompa (6.5 hrs).", o: "Phobjikha, 2,900 m" },
        { t: "Phobjikha → Paro", d: "Nature trail hike (2 hrs), then the National Museum and Paro Dzong (5.5 hrs drive).", o: "Paro, 2,200 m" },
        { t: "Trek: Genekha → Tueshi", d: "9 km, about 6 hrs. An easy valley walk past Tshotshekha village.", o: "Camp, 3,250 m" },
        { t: "Trek: Tueshi → Shungkula", d: "10 km, about 5 hrs, over Japhu La (4,185 m) with views of the northern range.", o: "Camp, 3,500 m" },
        { t: "Trek: Shungkula → Paro", d: "6 km, about 3 hrs. Sunrise, then descend to Chamgang and drive to Paro.", o: "Paro" },
        { t: "Haa day trip", d: "The Dzongdrakha cliff temples, Chele La (3,899 m) and a picnic in Haa.", o: "Paro" },
        { t: "Tiger's Nest", d: "Taktsang (about 800 m above the valley), Kichu Lhakhang and Drukgyal Dzong.", o: "Paro" },
        { t: "Departure", d: "Transfer to Paro airport.", o: "" }
      ] },
    { slug: "jumolhari-base-camp-trek", name: "Jumolhari Base Camp Trek", cat: "trek", days: 10, region: "Paro", img: "bloom-hero", grade: "[GRADE]",
      summary: "[TOUR DESCRIPTION: the old site's page for this tour could not be read]", highlights: ["Jomolhari (7,326 m)", "[HIGHLIGHT]"] },
    { slug: "druk-path-trek", name: "Druk Path Trek", cat: "trek", days: 11, region: "Paro → Thimphu", img: "why", grade: "[GRADE]",
      summary: "[TOUR DESCRIPTION: the old site's page for this tour could not be read]", highlights: ["[HIGHLIGHT]", "[HIGHLIGHT]"] },
    { slug: "dagala-trek", name: "Dagala Trek", cat: "trek", days: 3, nights: 2, region: "Thimphu district", img: "about-2", grade: "Easy–Moderate",
      summary: "About 25 km from Genekha to Chamgang, crossing Japhu La (4,185 m) with views of the northern Himalayan range.",
      highlights: ["Japhu La (4,185 m)", "Tshotshekha village", "Two nights camping"],
      itinerary: [
        { t: "Genekha → Tueshi", d: "9 km, about 6 hrs. An easy valley walk.", o: "Camp, 3,250 m" },
        { t: "Tueshi → Shungkula", d: "10 km, about 5 hrs, over Japhu La (4,185 m).", o: "Camp, 3,500 m" },
        { t: "Shungkula → road head", d: "6 km, about 3 hrs, descending to Chamgang.", o: "" }
      ] },
    { slug: "bumthang-cultural-trek", name: "Bumthang Cultural Trek", cat: "trek", days: 3, nights: 2, region: "Bumthang", img: "pkg-adventure", grade: "[GRADE]",
      summary: "[TOUR DESCRIPTION: the old site's page for this tour could not be read]", highlights: ["[HIGHLIGHT]"] },
    { slug: "bumdra-trek", name: "Bumdra Trek", cat: "trek", days: 2, nights: 1, region: "Paro", img: "rev-1", grade: "[GRADE]",
      summary: "An overnight ridge-top camp above Tiger's Nest in Paro. [FULL DESCRIPTION]", highlights: ["Ridge-top camp", "Tiger's Nest from above"] }
  ],

  /* ---------- Upcoming festival departures (data/festivals.ts) ----------
     Festival dates follow the lunar calendar. Replace [DATES] with the
     official calendar for the year. "usual" is the usual season only.   */
  festivals: [
    { slug: "trongsa-tshechu", name: "Trongsa Tshechu", place: "Trongsa Dzong", usual: "December – January", dates: "[DEC 2026 / JAN 2027 DATES]", days: "Tailor-made", tour: null, img: "gal-4", group: "Private" },
    { slug: "punakha-drubchen-tshechu", name: "Punakha Drubchen & Tshechu", start: "2027-02-13", end: "2027-02-18", place: "Punakha Dzong", usual: "February – March", dates: "13 – 18 Feb 2027", days: "7 days", tour: "punakha-festival-tour", img: "dest-punakha", group: "Private" },
    { slug: "paro-tshechu", name: "Paro Tshechu", start: "2027-03-18", end: "2027-03-22", place: "Rinpung Dzong, Paro", usual: "March – April", dates: "18 – 22 Mar 2027", days: "10 days", tour: "paro-festival-tour", img: "rev-2", group: "Private" },
    { slug: "rhododendron-festival", name: "Rhododendron Festival", start: "2027-04-22", end: "2027-04-23", place: "Lamperi Botanical Park, near Dochula", usual: "April", dates: "22 – 23 Apr 2027", days: "Tailor-made", tour: null, img: "fest-rhodo", group: "Private" },
    { slug: "ura-yakchoe", name: "Ura Yakchoe", start: "2027-04-18", end: "2027-04-22", place: "Ura, Bumthang", usual: "April – May", dates: "18 – 22 Apr 2027", days: "Tailor-made", tour: null, img: "dest-bumthang", group: "Private" },
    { slug: "nimalung-tshechu", name: "Nimalung Tshechu", start: "2027-06-12", end: "2027-06-14", place: "Chhume, Bumthang", usual: "June – July", dates: "12 – 14 Jun 2027", days: "11 days", tour: "nimalung-festival-tour", img: "pkg-cultural", group: "Private" },
    { slug: "thimphu-tshechu", name: "Thimphu Tshechu", start: "2027-10-10", end: "2027-10-12", place: "Tashichho Dzong, Thimphu", usual: "September – October", dates: "10 – 12 Oct 2027", days: "8 days", tour: "thimphu-festival-tour", img: "pkg-festival", group: "[SMALL GROUP · MAX X] or Private" },
    { slug: "jomolhari-mountain-festival", name: "Jomolhari Mountain Festival", start: "2027-10-14", end: "2027-10-15", place: "Dangochong, Jigme Dorji National Park", usual: "Mid-October", dates: "14 – 15 Oct 2027", days: "Highland journey · tailor-made", tour: null, img: "gal-1", group: "Private" },
    { slug: "royal-highland-festival", name: "Royal Highland Festival", place: "Laya, Gasa", usual: "Late October", dates: "23 – 24 Oct [CONFIRM 2027]", days: "Highland journey · tailor-made", tour: null, img: "fest-laya", group: "Private" }
  ],

  /* ---------- Guides (data/guides.ts) ---------- */
  guides: [
    { slug: "guide-culture", name: "[GUIDE NAME]", photo: "[PHOTO]", speciality: "Dzongs, history & Buddhist art",
      line: "[ONE PERSONAL LINE, e.g. what they love sharing with guests]", languages: "[LANGUAGES]", years: "[XX]", from: "[HOME VALLEY]",
      bio: "[SHORT BIO: 2–3 sentences in the guide's own voice]", favourite: "[FAVOURITE PLACE IN BHUTAN]", cats: ["cultural"] },
    { slug: "guide-trekking", name: "[GUIDE NAME]", photo: "[PHOTO]", speciality: "High-altitude trekking",
      line: "[ONE PERSONAL LINE]", languages: "[LANGUAGES]", years: "[XX]", from: "[HOME VALLEY]",
      bio: "[SHORT BIO]", favourite: "[FAVOURITE PLACE IN BHUTAN]", cats: ["trek"] },
    { slug: "guide-festivals", name: "[GUIDE NAME]", photo: "[PHOTO]", speciality: "Festivals & ritual",
      line: "[ONE PERSONAL LINE]", languages: "[LANGUAGES]", years: "[XX]", from: "[HOME VALLEY]",
      bio: "[SHORT BIO]", favourite: "[FAVOURITE PLACE IN BHUTAN]", cats: ["festival"] },
    { slug: "guide-nature", name: "[GUIDE NAME]", photo: "[PHOTO]", speciality: "Birds, cranes & nature walks",
      line: "[ONE PERSONAL LINE]", languages: "[LANGUAGES]", years: "[XX]", from: "[HOME VALLEY]",
      bio: "[SHORT BIO]", favourite: "[FAVOURITE PLACE IN BHUTAN]", cats: ["cultural", "trek"] }
  ],

  /* ---------- Guest reviews ----------
     These names come from the old website and are unverified. Replace them
     with real Google / TripAdvisor reviews (full text, month, rating).   */
  reviews: [
    { name: "John Peterson", country: "USA", when: "[MONTH YEAR]", rating: "[RATING]", trip: "[TRIP NAME]",
      text: "The team was attentive and well organised, and the Tiger's Nest hike was the highlight. [VERIFY & PASTE FULL REVIEW TEXT]" },
    { name: "Aisha Khan", country: "UAE", when: "[MONTH YEAR]", rating: "[RATING]", trip: "[TRIP NAME]",
      text: "The itinerary was tailored to my family, and the hospitality was warm throughout. [VERIFY & PASTE FULL REVIEW TEXT]" },
    { name: "Martin Fischer", country: "Germany", when: "[MONTH YEAR]", rating: "[RATING]", trip: "[TRIP NAME]",
      text: "A seamless tour, knowledgeable guides and great customer service. [VERIFY & PASTE FULL REVIEW TEXT]" }
  ],

  /* ---------- Trust strip ---------- */
  trust: [
    { name: "Licensed tour operator", sub: "Licence No. 6013293 · valid to Jan 2027", url: "https://www.bhutan.travel" },
    { name: "ABTO member", sub: "[VERIFY MEMBERSHIP]", url: "https://www.abto.org.bt" },
    { name: "Guide Association of Bhutan", sub: "[VERIFY]", url: "https://www.gab.org.bt" },
    { name: "TripAdvisor", sub: "[RATING / AWARD]", url: "[TRIPADVISOR URL]" }
  ],

  /* ---------- FAQ (home shows the ones marked home:true) ---------- */
  faq: [
    { group: "Planning & cost", home: true, q: "How much does a trip cost?",
      a: "Most trips run about [USD ___–___] per person per day. That includes the USD 100/night Sustainable Development Fee, hotels, all meals, your licensed guide, and a private vehicle with driver. Not included: international flights, the USD 40 visa fee, drinks, entry fees, tips and travel insurance. We'll send you an exact, itemised quote." },
    { group: "Planning & cost", home: true, q: "What if I need to cancel?",
      a: "Eligible trips can be cancelled free of charge up to 56 days before departure, and deposits can be moved to a new date. [LINK TO FULL TERMS & CONDITIONS]" },
    { group: "Planning & cost", q: "How do I pay?",
      a: "The visa fee and Sustainable Development Fee are paid when the visa application is submitted, and they are refunded (less bank charges) if your trip is cancelled or shortened. For the rest of your trip we'll explain our payment terms with your quote. [CONFIRM YOUR DEPOSIT & PAYMENT TERMS] If you pay by international card, tell your bank first: some banks block payments to Bhutan." },
    { group: "Planning & cost", q: "Can I change the itinerary?",
      a: "Yes. Every trip is private and planned around you, and itineraries stay flexible on the road, especially for small groups." },
    { group: "Planning & cost", q: "Can I travel in Bhutan independently?",
      a: "Since Bhutan reopened in September 2022 you no longer have to book through a tour operator. However, a licensed guide must accompany you throughout your stay and is required to enter dzongs and monuments, and all treks must be done with an accredited operator or guide. Most guests find it simpler to let us arrange the guide, transport, hotels, visa and SDF together." },

    { group: "Visa & entry", home: true, q: "Do I need a visa?",
      a: "Yes, for every nationality except Indian nationals, who receive an entry permit instead (with an Indian passport or Voter ID). Bangladeshi and Maldivian nationals can apply in advance or on arrival. Visas are applied for online at immi.gov.bt, and we can do this for you: send us a scan of your passport photo page. A correctly completed application takes up to five days, the one-off processing fee is USD 40, and a visa allows a stay of up to 90 days." },
    { group: "Visa & entry", q: "What is the Sustainable Development Fee (SDF)?",
      a: "A government fee paid for every night you stay: USD 100 per adult, USD 50 for children aged 6 to under 12, and nothing for children under 6. Indian nationals pay Nu. 1,200 per night (Nu. 600 for children aged 6 to under 12). It funds conservation, infrastructure and sustainable opportunities for Bhutanese people, it's refundable (less bank charges) for unused nights, and it's already included in our quotes." },
    { group: "Visa & entry", q: "How do I get to Bhutan?",
      a: "Most guests fly into Paro International Airport with Drukair or Bhutan Airlines (routes include Bangkok, Delhi, Kolkata and Kathmandu). You can also enter by road at one of four land border crossings, such as Phuentsholing or Gelephu. Mountain weather can delay flights, so allow at least 24 hours for onward connections." },

    { group: "On the trip", home: true, q: "When is the best time to visit?",
      a: "Bhutan is a year-round destination. Autumn (late September to November) brings bright, sunny days and festival season; spring (March to mid-April) is when nature is in full bloom; winter (late November to March) is crisp and clear, with the black-necked cranes in Phobjikha; and the monsoon (late June to September) is green and quiet, though landslides can disrupt roads." },
    { group: "On the trip", home: true, q: "Is Bhutan safe for solo and women travellers?",
      a: "Bhutan is a very safe country to travel in, and you're never on your own: your licensed guide and driver are with you throughout the trip. Solo travellers and women travelling alone are very welcome, and we can arrange a female guide on request. [CONFIRM FEMALE GUIDE AVAILABILITY]" },
    { group: "On the trip", q: "What is the food like?",
      a: "Hotel menus are usually set by the chef and change daily. Expect Bhutanese dishes like ema datshi (chillies and cheese) alongside milder options. Tell us about any dietary needs and we'll pass them on." },
    { group: "On the trip", q: "Should I tip?",
      a: "Tipping is optional and depends on the service you receive." },
    { group: "On the trip", q: "Do I need vaccinations?",
      a: "No vaccinations are generally required, except yellow fever or cholera if you are arriving from an affected area. Travel insurance has not been mandatory since April 2024, but we strongly recommend a policy covering medical emergencies, evacuation and lost baggage." },

    { group: "Money & phones", q: "What currency is used?",
      a: "The Ngultrum (Nu.), pegged 1:1 to the Indian Rupee. Cash is preferred, and US dollars and Indian rupees are widely accepted. ATMs and banks take Visa and Mastercard and cards work well in towns, but they may not be reliable in rural areas. The digital wallet apps goBoB and MyPay can be linked to international cards. You can change money at Paro airport, banks and larger hotels, and bring up to USD 10,000 in cash." },
    { group: "Money & phones", q: "Can I use my phone?",
      a: "Yes. Visitor SIM cards from TashiCell and Bhutan Telecom give reliable mobile data across the country. Buy one at Paro airport or a phone shop in town, and top up as you go." },
    { group: "On the trip", q: "Is Bhutan welcoming to everyone?",
      a: "Yes. Bhutan decriminalised homosexuality in 2021, and organisations like Pride Bhutan and Queer Voices of Bhutan are active. If you have a disability, let us know early: the terrain is challenging, but with planning we can make the most of your time here." },
    { group: "On the trip", q: "Can I fly a drone or take photos at temples?",
      a: "Drones are generally not allowed without a permit arranged in advance. Photography is not permitted inside temples or of people practising their religion. Your guide will tell you where it's fine." },

    { group: "Sustainability", q: "How can I travel sustainably?",
      a: "Choose certified eco-friendly lodges, skip single-use plastic (bring a refillable bottle and bags), stay on marked trails, keep your distance from wildlife, and spend locally at restaurants, craft shops and with local guides." }
  ],

  /* ---------- Blog posts ---------- */
  posts: [
    { slug: "why-visit-bhutan", title: "Why Bhutan should be your next journey", cat: "Inspiration", img: "hero", mins: 5,
      excerpt: "Cliffside monasteries, living festivals, a nation that measures happiness, and mountains you'll have almost to yourself.",
      body: `<p>Bhutan stayed isolated for centuries while its neighbours developed. Today it is the last independent Mahayana Buddhist kingdom, a place where faith still shapes almost every part of daily life. Here's why travellers come home changed.</p>
<h2>1. Tiger's Nest and the great dzongs</h2><p>Taktsang Monastery clings to a cliff about 800 m above the Paro valley and can only be reached on foot. Across the country, fortress-monasteries (dzongs) such as Punakha, Paro's Rinpung and Trongsa still serve as both religious and government centres.</p>
<h2>2. Festivals that are lived, not staged</h2><p>Tshechu festivals fill dzong courtyards with sacred masked dances. Locals come in their finest clothes, with picnics and blessings, and you're welcome to join them.</p>
<h2>3. Gross National Happiness</h2><p>Since the 1970s Bhutan has measured progress by wellbeing as well as GDP. You'll feel it in the protected forests, the preserved traditions and the unhurried pace.</p>
<h2>4. Nature at its most intact</h2><p>Over 70% of the country is forest, and Bhutan absorbs more carbon than it emits. Black-necked cranes winter in the Phobjikha valley, and Jigme Dorji National Park stretches up to the snow line.</p>
<h2>5. Treks without crowds</h2><p>From an overnight camp above Tiger's Nest to high passes beneath Jomolhari, Bhutan's trails are quiet and wild, and because tourism is managed as "High Value, Low Impact", you'll often have them almost to yourself.</p>` },
    { slug: "gross-national-happiness", title: "Gross National Happiness, explained", cat: "Culture", img: "gal-2", mins: 4,
      excerpt: "What it means when a country decides that the purpose of development is happiness, and what it means for you as a traveller.",
      body: `<p>In the 1970s the Fourth King, Jigme Singye Wangchuck, put it simply: <em>the purpose of development is happiness.</em> Bhutan has judged its policies by that standard ever since, balancing material and spiritual needs (GDP still counts).</p>
<h2>The four pillars</h2><ul><li>Good governance</li><li>Sustainable socio-economic development</li><li>Cultural preservation</li><li>Environmental conservation</li></ul>
<h2>The nine domains</h2><p>Psychological wellbeing, health, education, time use, cultural diversity and resilience, good governance, community vitality, ecological diversity and resilience, and living standards.</p>
<h2>What it means for travellers</h2><p>It's why tourism is managed as "High Value, Low Impact", why forests cover over 70% of the land, and why your Sustainable Development Fee (USD 100 per adult per night) funds conservation, free education and healthcare. Travelling here, you become part of that balance.</p>` },
    { slug: "flying-into-paro", title: "Flying into Paro: the most scenic landing in the Himalaya", cat: "Practical", img: "bloom-hero", mins: 3,
      excerpt: "Eight of the world's ten highest peaks, daylight-only flights, and why you should keep your window seat.",
      body: `<p>Paro International Airport is where almost every guest arrives (Gelephu, in the south, is also listed as an international airport). Drukair, the national carrier, and Bhutan Airlines connect it with cities including Bangkok, Delhi, Kolkata and Kathmandu.</p>
<h2>Why the flight is special</h2><p>All flights use Visual Flight Rules: pilots must see the runway and the surrounding hills, so there are no night flights or flights in poor visibility. On a clear day the route passes 8 of the world's 10 highest peaks:</p>
<ul><li>Everest 8,848 m · Kanchenjunga 8,586 m</li><li>Lhotse 8,516 m · Makalu 8,463 m</li><li>Cho Oyu 8,201 m · Dhaulagiri 8,167 m</li><li>Manaslu 8,163 m · Annapurna 8,091 m</li></ul>
<h2>Practical tips</h2><p>Weather often delays flights, so book flexible tickets and leave at least 24 hours for onward connections. Schedule changes are published at least a week ahead in Kuensel, the national newspaper, and we'll keep an eye on them for you.</p>` },
    { slug: "best-time-to-visit-bhutan", title: "The best time to visit Bhutan, season by season", cat: "Practical", img: "contact", mins: 4,
      excerpt: "Clear autumn skies, spring rhododendrons, quiet winters and a green monsoon. Every season has its reasons.",
      body: `<h2>Spring (February – April)</h2><p>Peak season. Rhododendrons, magnolias and primulas bloom, the weather is mild and clear, and the Punakha and Paro festivals take place.</p>
<h2>Summer and monsoon (June – August)</h2><p>Green valleys, fewer travellers and some rain most days. It's a lovely time for the rare festivals in Bumthang, such as Nimalung and Kurjey.</p>
<h2>Autumn (September – November)</h2><p>The other peak season, with the clearest mountain views, the best trekking weather and the Thimphu Tshechu, Bhutan's largest festival.</p>
<h2>Winter (December – February)</h2><p>Cool, crisp and clear. The endangered black-necked cranes winter in the Phobjikha valley, and the lodges are quiet.</p>
<p><strong>Note:</strong> festival dates follow the lunar calendar and change every year, so ask us for the current dates.</p>` },
    { slug: "bumthang-spiritual-heartland", title: "Bumthang: Bhutan's spiritual heartland", cat: "Destinations", img: "dest-bumthang", mins: 4,
      excerpt: "Four sacred valleys, the Burning Lake and some of the oldest temples in the kingdom.",
      body: `<p>Bumthang is really four valleys: Chokhor, Tang, Ura and Chhume. It's a place of pilgrimage, apple orchards, green valleys and traditional villages.</p>
<h2>What to see</h2><ul><li><strong>Jakar Dzong</strong>, overlooking the main valley</li><li><strong>Kurjey Lhakhang</strong>, <strong>Tamshing Monastery</strong> and <strong>Jambay Lhakhang</strong>, among the most sacred temples in Bhutan</li><li><strong>Mebar Tsho</strong>, the Burning Lake</li><li>Ura village and the Swiss farm</li></ul>
<h2>Festivals</h2><p>Nimalung, Jakar, Ura Yakchoe, Jambay Lhakhang Drup and more: Bumthang's festivals are intimate and village-scale.</p>
<h2>Getting there</h2><p>Bumthang is about 68 km (2 hours) beyond Trongsa on the east–west highway. Most guests combine it with Trongsa and Phobjikha on our central Bhutan journeys.</p>` },
    { slug: "black-necked-cranes-phobjikha", title: "The black-necked cranes of Phobjikha", cat: "Nature", img: "pkg-wildlife", mins: 3,
      excerpt: "Each winter, endangered cranes fly over the Himalaya from Tibet to a protected glacial valley.",
      body: `<p>The Phobjikha (Gangtey) valley in central Bhutan is a glacial valley protected for conservation. Each winter it becomes home to the endangered black-necked cranes that migrate here from Tibet.</p>
<h2>Visiting</h2><p>Pine forests and small villages surround the valley, with Gangtey Monastery on a hilltop. The Phobjikha Nature Trail is an easy, roughly two-hour walk through the valley.</p>
<h2>The Black-Necked Crane Festival</h2><p>Held in the courtyard of Gangtey Gompa each November, it celebrates the cranes' return with dances by local schoolchildren. Ask us for this year's date.</p>` },
    { slug: "travel-sustainably-in-bhutan", title: "How to travel sustainably in Bhutan", cat: "Sustainability", img: "why", mins: 3,
      excerpt: "Simple ways to make sure your journey gives more than it takes.",
      body: `<p>Bhutan has managed visitor numbers since tourism opened in 1974, so that travel stays environmentally friendly, culturally respectful and economically fair. Here's how you can help.</p>
<ul><li><strong>Stay well:</strong> choose environmentally certified hotels and lodges.</li><li><strong>Go plastic-free:</strong> bring a refillable bottle, bags and containers.</li><li><strong>Tread lightly:</strong> stay on marked trails and keep your distance from wildlife.</li><li><strong>Spend locally:</strong> eat at local restaurants, buy local crafts, and travel with local guides.</li><li><strong>Respect the sacred:</strong> follow dress codes and photography rules at dzongs and temples.</li></ul>
<p>Low-impact favourites include the walk to Tiger's Nest (reachable only on foot), the Phobjikha valley, and treks in Jigme Dorji National Park.</p>` },
    { slug: "bhutan-festival-guide", title: "A first-timer's guide to Bhutan's tshechu festivals", cat: "Festivals", img: "pkg-festival", mins: 4,
      excerpt: "What happens, what to wear, and how to choose the right festival for your dates.",
      body: `<p>A tshechu is a religious festival honouring Guru Rinpoche, who brought Buddhism to Bhutan in the 8th century. For several days, monks and laypeople perform sacred masked dances in the dzong courtyard, and whole communities gather.</p>
<h2>What to expect</h2><p>Families arrive in their finest gho and kira, with picnics to share. The dances carry blessings, and watching them is considered meritorious.</p>
<h2>Popular festivals by season</h2><ul><li><strong>February – March:</strong> Punakha Drubchen & Tshechu</li><li><strong>Spring:</strong> Paro Tshechu, and the Rhododendron Festival at Lamperi near Dochula (April)</li><li><strong>April:</strong> Ura Yakchoe (Bumthang)</li><li><strong>June:</strong> Nimalung & Kurjey (Bumthang)</li><li><strong>Late Sep – Oct:</strong> Thimphu Tshechu</li><li><strong>October:</strong> Jomolhari Mountain Festival (Dangochong) and the Royal Highland Festival in Laya, both in the remote high north, so we plan the trek or drive in with you</li><li><strong>November:</strong> Black-Necked Crane Festival, Jambay Lhakhang Drup</li><li><strong>December:</strong> Druk Wangyel (Dochula), Trongsa Tshechu</li></ul>
<h2>Tips</h2><p>Dress modestly, with long sleeves and long trousers or skirts. Never walk across the dance ground, and ask before photographing people. The big festivals fill up, so book about six months ahead.</p>` }
  ],

  /* ---------- Photo credits (Wikimedia Commons) ---------- */
  credits: [
    ["Prayer flags panorama","simonsimages","CC BY 2.0","Bhutan_mountain_landscape.jpg"],
    ["Mount Jomolhari","Martyn Smith","CC BY 2.0","Mount_Jomolhari_2016.jpg"],
    ["Jomolhari","Christopher Fynn","CC BY-SA 3.0","Mount_Jomolhari_2009-10-06_a.jpg"],
    ["Boys in national dress","Keith Mason","CC BY-SA 3.0","Boys_in_Bhutan_national_dress.jpg"],
    ["Layap girl, Royal Highland Festival","Gabriel Cubbage","CC BY-SA 4.0","Layup_girl_at_the_Royal_Highlander_Festival.jpg"],
    ["Rhododendron at Dochula","Franzfoto","CC BY-SA 3.0","Rhododendron_in_Wildform_Dochulapass_3050_m.ü.NN.JPG"],
    ["Women in kira and tego","Cfynn","CC BY-SA 3.0","Bhutanese_women_at_festival_wearing_Kira_and_Tego.jpg"],
    ["Norzin Lam, Thimphu at night","Christopher J. Fynn","CC BY-SA 4.0","Norzin_Lam,_Thimphu_at_night_2014-11-09.jpg"],
    ["Himalayan night sky (Annapurna)","sushan116","CC BY-SA 4.0","Annapurna_at_Night.jpg"],
    ["Rafting in Punakha","Sonam Thombre","CC BY-SA 4.0","River_Rafting_in_Punakha_.jpg"],
    ["Centenary Farmers Market","Bernard Gagnon","CC BY-SA 4.0","Centenary_Farmers_Market,_Thimphu_01.jpg"],
    ["Farmhouse, Soe Yaksa","Christopher J. Fynn","CC BY-SA 3.0","Bhutanese_Farmhouse_Soe_Yaksa.jpg"],
    ["Butter lamps, Memorial Chorten","Chuck Moravec","CC BY 2.0","Thimphu_National_Memorial_Chorten_Butter_Lamps_(23130407174).jpg"],
    ["Weaving","Cfynn","CC BY-SA 3.0","Weaving-Bhutan-01.JPG"],
    ["Archery","Footlooseinme","CC BY-SA 4.0","Archery_in_Bhutan.jpg"],
    ["Tiger's Nest","Bernard Gagnon","CC BY-SA 4.0","Taktsang_Monastery,_Bhutan_01.jpg"],
    ["Tiger's Nest (edited)","Nina R","CC BY 2.0","Paro_Taktsang,_Bhutan_(edited).jpg"],
    ["Tiger's Nest trail","Bernard Gagnon","CC BY-SA 4.0","Paro_Taktsang_trail_08.jpg"],
    ["Punakha Dzong","Bernard Gagnon","CC BY-SA 4.0","Punakha_Dzong,_Bhutan_02.jpg"],
    ["Punakha Dzong (blossom)","Bernard Gagnon","CC BY-SA 4.0","Punakha_Dzong,_Bhutan_05.jpg"],
    ["Dochula chortens","Chirag85","CC BY-SA 4.0","Druk_Wangyal_Khang_Zhang_Chortens_at_Dochula_Pass.jpg"],
    ["Buddha Dordenma","Bernard Gagnon","CC BY-SA 4.0","Buddha_Dordenma_statue,_Thimphu_06.jpg"],
    ["Rinpung Dzong","Bernard Gagnon","CC BY-SA 4.0","Rinpung_Dzong,_Bhutan_03.jpg"],
    ["Tashichho Dzong","Bernard Gagnon","CC BY-SA 4.0","Tashichho_Dzong,_Bhutan_13.jpg"],
    ["Monks","Mussi Katz","CC0","Bhutan_Monks_2023.jpg"],
    ["Jakar Tshechu dancer","Arian Zwegers","CC BY 2.0","Jakar_tshechu,_Ging_Tsholing_Cham,_Ging_(15657676898).jpg"],
    ["Black-necked cranes","Yajuvendraupadhyaya","CC BY 4.0","Blacked_necked_Cranes_Bhutan_1.jpg"],
    ["Phobjikha Valley","Phuentsho","CC BY-SA 4.0","The_Phobjikha_Valley.jpg"],
    ["Jakar, Bumthang","Christopher J. Fynn","CC BY-SA 4.0","A_view_of_Jakar_2021-10-24.jpg"],
    ["Trongsa Dzong","Christopher J. Fynn","CC BY-SA 4.0","Trongsa_Dzong_2021-10-24a.jpg"],
    ["Gasa Dzong","Christopher J. Fynn","CC BY-SA 3.0","Gasa_Dzong.jpg"],
    ["Prayer flags","Bernard Gagnon","CC BY-SA 4.0","Prayer_flags,_Sopsokha,_Bhutan.jpg"],
    ["Himalayan ridges","2006nishan178713","CC BY-SA 4.0","Landscape_of_the_mountains_in_Bhutan.jpg"],
    ["Paro valley","Abhijit Kar Gupta","CC BY 2.0","The_view_of_Paro_Valley_(37783820352).jpg"]
  ]
};
