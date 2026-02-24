
import "./globals.css";

export const metadata = {
  title: "Luxury CV",
  description: "Luxury motion CV"
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <div className="progress-bar" id="progressBar"></div>
        {children}
      </body>
    </html>
  );
}
