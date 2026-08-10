// Mame Adama Hotel — Language Switcher (English / Amharic / Afaan Oromo)
const translations = {
    en: {
        nav_home: "Home", nav_about: "About", nav_services: "Services", nav_rooms: "Rooms",
        nav_contact: "Contact", nav_pages: "Pages", nav_booking: "Booking", nav_team: "Our Team",
        nav_testimonial: "Testimonial",
        hero_eyebrow: "Mame Adama Hotel",
        hero_headline: "Comfort &amp; Hospitality in Adama",
        btn_our_rooms: "Our Rooms", btn_book_room: "Book A Room", btn_explore_more: "Explore More",
        about_eyebrow: "About Us", about_welcome: "Welcome to",
        about_paragraph: "Mame Adama Hotel sits on Peacock Road in Adama, right in front of St. Gebriel Church and close to the post office. We offer comfortable rooms and genuine hospitality for business travellers and families alike — comfort and taste, side by side.",
        stat_rooms: "Rooms", stat_staff: "Staffs", stat_clients: "Clients",
        footer_contact: "Contact", footer_company: "Company", footer_services: "Services",
        btn_view_detail: "View Detail", btn_book_now: "Book Now",
        footer_about_us: "About Us", footer_contact_us: "Contact Us",
        footer_privacy: "Privacy Policy", footer_terms: "Terms &amp; Condition", footer_support: "Support",
        room_standard: "Standard Room", room_delux: "Delux Room", room_semi_suite: "Semi Suite",
        rooms_eyebrow: "Our Rooms", rooms_explore: "Explore Our"
    },
    am: {
        nav_home: "መነሻ", nav_about: "ስለ እኛ", nav_services: "አገልግሎቶች", nav_rooms: "ክፍሎች",
        nav_contact: "አግኙን", nav_pages: "ገጾች", nav_booking: "ማስያዝ", nav_team: "ቡድናችን",
        nav_testimonial: "አስተያየቶች",
        hero_eyebrow: "ማሜ አዳማ ሆቴል",
        hero_headline: "ምቾት እና እንግዳ ተቀባይነት በአዳማ",
        btn_our_rooms: "ክፍሎቻችን", btn_book_room: "ክፍል ያስይዙ", btn_explore_more: "ተጨማሪ ይመልከቱ",
        about_eyebrow: "ስለ እኛ", about_welcome: "እንኳን ደህና መጡ ወደ",
        about_paragraph: "ማሜ አዳማ ሆቴል በአዳማ፣ በፒኮክ መንገድ፣ በቅዱስ ገብርኤል ቤተክርስቲያን ፊት ለፊት እና ከፖስታ ቤት አጠገብ ይገኛል። ምቹ ክፍሎችን እና እውነተኛ እንግዳ ተቀባይነትን ለንግድ ተጓዦችም ሆነ ለቤተሰቦች እናቀርባለን — ምቾት እና ጣዕም አብረው።",
        stat_rooms: "ክፍሎች", stat_staff: "ሰራተኞች", stat_clients: "ደንበኞች",
        footer_contact: "አግኙን", footer_company: "ኩባንያ", footer_services: "አገልግሎቶች",
        btn_view_detail: "ዝርዝር ይመልከቱ", btn_book_now: "አሁን ያስይዙ",
        footer_about_us: "ስለ እኛ", footer_contact_us: "አግኙን",
        footer_privacy: "የግላዊነት ፖሊሲ", footer_terms: "ደንብና ሁኔታ", footer_support: "ድጋፍ",
        room_standard: "መደበኛ ክፍል", room_delux: "ደሉክስ ክፍል", room_semi_suite: "ሴሚ ስዊት",
        rooms_eyebrow: "ክፍሎቻችን", rooms_explore: "ክፍሎቻችንን ይመልከቱ"
    },
    om: {
        nav_home: "Mana", nav_about: "Waa'ee Keenya", nav_services: "Tajaajila", nav_rooms: "Kutaalee",
        nav_contact: "Nu Quunnamaa", nav_pages: "Fuula", nav_booking: "Iyyaafannaa", nav_team: "Garee Keenya",
        nav_testimonial: "Ragaa Maamiltootaa",
        hero_eyebrow: "Hoteela Mame Adaamaa",
        hero_headline: "Mijataa fi Simannaa Adaamaa Keessatti",
        btn_our_rooms: "Kutaalee Keenya", btn_book_room: "Kutaa Qabsiisi", btn_explore_more: "Dabalata Ilaali",
        about_eyebrow: "Waa'ee Keenya", about_welcome: "Baga Nagaan Dhuftan gara",
        about_paragraph: "Hoteelli Mame Adaamaa Adaamaa, Daandii Peacock irratti, Waldaa Kiristaanaa St. Gebriel dura, biroo poostaa cinatti argama. Kutaalee mijataa fi simannaa dhugaa imaltoota daldalaa fi maatiiwwaniif ni dhiyeessina — mijataa fi mi'aawaa walitti.",
        stat_rooms: "Kutaalee", stat_staff: "Hojjattoota", stat_clients: "Maamiltoota",
        footer_contact: "Nu Quunnamaa", footer_company: "Dhaabbata", footer_services: "Tajaajila",
        btn_view_detail: "Bal'inaan Ilaali", btn_book_now: "Amma Qabsiisi",
        footer_about_us: "Waa'ee Keenya", footer_contact_us: "Nu Quunnamaa",
        footer_privacy: "Imaammata Dhuunfaa", footer_terms: "Haala fi Dambii", footer_support: "Deeggarsa",
        room_standard: "Kutaa Idilee", room_delux: "Kutaa Deeluksi", room_semi_suite: "Suyitii Giddu-galeessaa",
        rooms_eyebrow: "Kutaalee Keenya", rooms_explore: "Kutaalee Keenya Ilaali"
    }
};

function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.innerHTML = dict[key];
    });
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem('mameAdamaLang', lang); } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => {
    let saved = 'en';
    try { saved = localStorage.getItem('mameAdamaLang') || 'en'; } catch (e) {}
    applyLanguage(saved);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
    });
});
