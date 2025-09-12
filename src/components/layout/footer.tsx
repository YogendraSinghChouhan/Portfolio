export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-muted-foreground">
      © {currentYear} Abhishek Devanda. All rights reserved.
    </footer>
  );
}
