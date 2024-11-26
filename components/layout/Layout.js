import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>TahaDev CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a
          href="https://github.com/tahadev123"
          target="_blank"
          rel="noreferrer"
        >
          TahaDev
        </a>{" "}
        Next.js course | CRM Project &copy;
      </footer>
    </>
  );
}

export default Layout;
