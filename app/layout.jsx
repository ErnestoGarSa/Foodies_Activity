import MainHeader from "./components/main-header/MainHeader";
import MainHeaderBackGround from "./components/main-header/MainHeaderBackGround";
import "./globals.css";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBackGround />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
