let leng = 'uz';
let set = document.querySelector("select");
let text1 = document.querySelector("#text1");
let text2 = document.querySelector("#text2");
let text3 = document.querySelector("#text3");
let text4 = document.querySelector("#text4");
let text5 = document.querySelector("#text5");
let text6 = document.querySelector("#text6");
let text7 = document.querySelector("#text7");
let text8 = document.querySelector("#text8");
let text9 = document.querySelector("#text9");
let text10 = document.querySelector("#text10");
let text11 = document.querySelector("#text11");
let text12 = document.querySelector("#text12");
let text13 = document.querySelector("#text13");
let text14 = document.querySelector("#text14");
let text15 = document.querySelector("#text15");
let text16 = document.querySelector("#text16");
let text17 = document.querySelector("#text17");
let text18 = document.querySelector("#text18");
let text19 = document.querySelector("#text19");
let text20 = document.querySelector("#text20");
let text21 = document.querySelector("#text21");
let text22 = document.querySelector("#text22");
let text23 = document.querySelector("#text23");
let text24 = document.querySelector("#text24");
let text25 = document.querySelector("#text25");
let text26 = document.querySelector("#text26");
let text27 = document.querySelector("#text27");
let text28 = document.querySelector("#text28");
let text29 = document.querySelector("#text29");

if (leng === 'uz') {
    text1.textContent = "Asosiy";
    text2.textContent = "Biz haqimizda";
    text3.textContent = "Mahsulotlar";
    text4.textContent = "Aloqa";
    text5.textContent = "Kompaniya haqida umumiy ma'lumot";
    text6.textContent = "Biz haqimizda";
    text7.textContent = `Burj Eyfel Int. Lubricants Ind. MChJ o'zining "Eyfel" brendi bilan 2004 yilda tashkil etilgan.
    Keng texnik tajriba va tinimsiz sa'y-harakatlar bilan kompaniya o'z nomini sinonimiga aylantirdi
    "Sifat". O'shandan beri u kuchayib, kuchayib bordi va o'zini o'zi mustahkamladi
    tashkilot sifat, innovatsiyalar va mijozlarga qaratilgan.`;
    text8.textContent = `Bizda moylash materiallari va moylarni aralashtirish va to'ldirish uchun ko'plab zamonaviy uskunalar mavjud. Zavod yillik aralashtirish va to'ldirish quvvatiga ega:`;
    text9.textContent = `40 000 MT moylash materiallari`;
    text10.textContent = `16 000 MT yog'lar`;
    text11.textContent = `6000 MT viskozite indeksini yaxshilovchilar`;
    text12.textContent = `Tajriba`;
    text13.textContent = `Mahsulotlar`;
    text14.textContent = `Mamlakatlar`;
    text15.textContent = `Yillik aralashtirish quvvati`;
    text16.textContent = `Bizning yuqori sifatli mahsulotlar assortimentimiz`;
    text17.textContent = `Mototsikl moylari`;
    text18.textContent = `Mototsiklingizni bizning 2T va 4T moylarimiz bilan himoya qiling.`;
    text19.textContent = `Benzinli dvigatel moylari`;
    text20.textContent = `Avtomobilingiz dvigatellari doimo himoyalangan bo'lishini ta'minlash uchun.`;
    text21.textContent = `Tijorat dvigatel moylari`;
    text22.textContent = `Uzoq safarlarda yuk mashinasining dvigateli himoyalanganligiga ishonch hosil qiling.`;
    text23.textContent = `Transmissiya suyuqliklari`;
    text24.textContent = `Avtomobilingiz transmissiyasidagi metall qismlar va podshipniklarni moylang.`;
    text25.textContent = `Eng yaxshi sotuvchilar`;
    text26.textContent = `Mahsulotlarimiz eng yuqori standartlarga mos kelishini va izchil sifat va sifatni ta'minlash uchun sinovdan o'tkazilishini ta'minlaymiz
    ishlash.`;
    text27.textContent = `Eng yaxshi brendlar tomonidan sertifikatlangan`;
    text28.textContent = `Distribyutorlar`;
    text29.textContent = `Dunyo bo'ylab mavjudligi`;
    
}

set.addEventListener("change", () => {
    leng = set.value;

    if (leng === 'uz') {
        text1.textContent = "Asosiy";
        text2.textContent = "Biz haqimizda";
        text3.textContent = "Mahsulotlar";
        text4.textContent = "Aloqa";
        text5.textContent = "Kompaniya haqida umumiy ma'lumot";
        text6.textContent = "Biz kimmiz";
        text7.textContent = `Burj Eyfel Int. Lubricants Ind. MChJ o'zining "Eyfel" brendi bilan 2004 yilda tashkil etilgan.
        Keng texnik tajriba va tinimsiz sa'y-harakatlar bilan kompaniya o'z nomini sinonimiga aylantirdi
        "Sifat". O'shandan beri u kuchayib, kuchayib bordi va o'zini o'zi mustahkamladi
        tashkilot sifat, innovatsiyalar va mijozlarga qaratilgan.`;
        text8.textContent = `Bizda moylash materiallari va moylarni aralashtirish va to'ldirish uchun ko'plab zamonaviy uskunalar mavjud. Zavod yillik aralashtirish va to'ldirish quvvatiga ega:`;
        text9.textContent = `40 000 MT moylash materiallari`;
        text10.textContent = `16 000 MT yog'lar`;
        text11.textContent = `6000 MT viskozite indeksini yaxshilovchilar`;
        text12.textContent = `Tajriba`;
        text13.textContent = `Mahsulotlar`;
        text14.textContent = `Mamlakatlar`;
        text15.textContent = `Yillik aralashtirish quvvati`;
        text16.textContent = `Bizning yuqori sifatli mahsulotlar assortimentimiz`;
        text17.textContent = `Mototsikl moylari`;
        text18.textContent = `Mototsiklingizni bizning 2T va 4T moylarimiz bilan himoya qiling.`;
        text19.textContent = `Benzinli dvigatel moylari`;
        text20.textContent = `Avtomobilingiz dvigatellari doimo himoyalangan bo'lishini ta'minlash uchun.`;
        text21.textContent = `Tijorat dvigatel moylari`;
        text22.textContent = `Uzoq safarlarda yuk mashinasining dvigateli himoyalanganligiga ishonch hosil qiling.`;
        text23.textContent = `Transmissiya suyuqliklari`;
        text24.textContent = `Avtomobilingiz transmissiyasidagi metall qismlar va podshipniklarni moylang.`;
        text25.textContent = `Eng yaxshi sotuvchilar`;
        text26.textContent = `Mahsulotlarimiz eng yuqori standartlarga mos kelishini va izchil sifat va sifatni ta'minlash uchun sinovdan o'tkazilishini ta'minlaymiz
        ishlash.`;
        text27.textContent = `Eng yaxshilar tomonidan sertifikatlangan`;
        text28.textContent = `Distribyutorlar`;
        text29.textContent = `Dunyo bo'ylab mavjudligi`;
        
    }
    if (leng === 'ru') {
        text1.textContent = "Основной";
        text2.textContent = "О нас";
        text3.textContent = "Продукты";
        text4.textContent = "Контакт";
        text5.textContent = "Обзор компании";
        text6.textContent = "Кто мы";
        text7.textContent = `Бурдж Эйфель Интернешнл. Lubricants Ind. LLC под торговой маркой Eiffel была основана в 2004 году.
        Благодаря обширному техническому опыту и неустанным усилиям компания сделала свое имя синонимом
        "Качество". С тех пор он рос от силы к силе и зарекомендовал себя как
        организация, ориентированная на качество, инновации и клиентоориентированность.`;
        text8.textContent = `У нас есть несколько современных установок для смешивания и розлива смазочных материалов и смазок. Годовая мощность завода по смешиванию и розливу составляет более:`;
        text9.textContent = `40 000 тонн смазочных материалов`;
        text10.textContent = `16 000 тонн пластичных смазок`;
        text11.textContent = `6000 тонн присадок для повышения индекса вязкости`;
        text12.textContent = `Опыт`;
        text13.textContent = `Продукты`;
        text14.textContent = `Страны`;
        text15.textContent = `Годовая мощность смешивания`;
        text16.textContent = `Наш ассортимент высококачественной продукции`;
        text17.textContent = `Масла для мотоциклов`;
        text18.textContent = `Защитите свой мотоцикл с помощью нашего ассортимента масел 2T и 4T.`;
        text19.textContent = `Масла для бензиновых двигателей`;
        text20.textContent = `Чтобы двигатели вашего автомобиля всегда были защищены.`;
        text21.textContent = `Коммерческие моторные масла`;
        text22.textContent = `Убедитесь, что двигатель вашего грузовика защищен во время длительных поездок.`;
        text23.textContent = `Трансмиссионные жидкости`;
        text24.textContent = `Смажьте металлические детали и подшипники трансмиссии вашего автомобиля.`;
        text25.textContent = `Бестселлеры`;
        text26.textContent = `Мы следим за тем, чтобы наша продукция соответствовала самым высоким стандартам и подвергалась испытаниям для обеспечения стабильного качества и
        производительность.`;
        text27.textContent = `Сертифицировано лучшим`;
        text28.textContent = `Дистрибьюторы`;
        text29.textContent = `Присутствие по всему миру`;
    }
    if (leng === 'en') {
        text1.textContent = "Home";
        text2.textContent = "About";
        text3.textContent = "Products";
        text4.textContent = "Contact";
        text5.textContent = "Company Overview";
        text6.textContent = "Who Are We";
        text7.textContent = `Burj Eiffel Int. Lubricants Ind. LLC with its brand name “Eiffel” was established in the year 2004.
        With extensive technical expertise and relentless efforts the company has made a name synonym to
        “Quality”. Since then it has grown from strength to strength and has established itself as an
        organisation focused on quality, innovation and customer centricity.`;
        text8.textContent = `We have multiple state of the art facilities for blending and filling of lubricants & greases. The plant has an annual blending and filling capacity of more than:`;
        text9.textContent = `40,000 MT of Lubricants`;
        text10.textContent = `16,000 MT of Greases`;
        text11.textContent = `6,000 MT of Viscosity Index Improvers`;
        text12.textContent = `Experience`;
        text13.textContent = `Products`;
        text14.textContent = `Countries`;
        text15.textContent = `Annual Blending capacity`;
        text16.textContent = `Our Range of High Quality Products`;
        text17.textContent = `Motorcucle Oils`;
        text18.textContent = `Protect your MotorBike with our range of 2T and 4T oils.`;
        text19.textContent = `Gasoline Engine Oils`;
        text20.textContent = `To ensure your vehicle's engines are always protected.`;
        text21.textContent = `Commercial Engine Oils`;
        text22.textContent = `Make sure your truck's engine is protected during long journeys.`;
        text23.textContent = `Transmission Fluids`;
        text24.textContent = `Lubricate the metal parts and bearings in your vehicle's transmission.`;
        text25.textContent = `Best Sellers`;
        text26.textContent = `We ensure our products follow the highest standards and are tested to ensure consistent quality and
        performance.`;
        text27.textContent = `Certified by the Best`;
        text28.textContent = `Distributors`;
        text29.textContent = `Worldwide Presence`;
    }
})

