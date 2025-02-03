import { getLocale } from "next-intl/server";
import { Poppins, Tajawal } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });
const tajawal = Tajawal({ subsets: ["arabic"], weight: "400" });

const Layout: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
    const locale = await getLocale()
    const direction = await locale === "ar" ? "rtl" : "ltr";
    return (
        <html dir={direction} lang={locale}>
            <body className={locale === "ar" ? tajawal.className : poppins.className}>
                {children}
            </body>
        </html>
    );
};

export default Layout;