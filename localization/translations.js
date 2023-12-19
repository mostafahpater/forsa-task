import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
const i18n = new I18n({
  en: {
    home: "Home",
    mohammedAdel: "Mohammed Adel",
    profile: "Profile",
    offers: "Offers",
    retail: "Retail",
    shareTheApp: "Share the app",
    changeLanguage: "Change Language",
    getYourLimit: "Get your limit",
    completeYourInfo: "Complete your infoand get up to EGP 100,000",
    topBrandsInRetail: "Top brands in retail",
    viewAll: "View all",
    requestAdditionalLoan: "Request Additional Loan",
    seeLess: "See less",
    offersSelectForYou: "Offers Select for You",
    seeAll: "See All",
    checkOutLatestOffers: "Check out latest offers",
  },
  ar: {
    home: "الصفحة الرئيسية",
    mohammedAdel: "محمد عادل",
    profile: "الصفحة الشخصية",
    offers: "العروض",
    retail: "بيع بالتجزئة",
    shareTheApp: "مشاركة التطبيق",
    changeLanguage: "تغيير اللغة",
    getYourLimit: "احصل على الحد الأقصى",
    completeYourInfo: "أكمل معلوماتك واحصل على 100,000 جنيه مصري",
    topBrandsInRetail: "أفضل العلامات التجارية في قطاع التجزئة",
    viewAll: "عرض الكل",
    requestAdditionalLoan: "طلب قرض إضافي",
    seeLess: "شاهد أقل",
    offersSelectForYou: "عروض اختيرت لك",
    seeAll: "مشاهدة الكل",
    checkOutLatestOffers: "اطلع على أحدث العروض",
  },
});
i18n.locale = Localization.locale;
i18n.enableFallback = true;

export default i18n;
