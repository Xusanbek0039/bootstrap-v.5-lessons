import React from "react";

/**
 * SEO Meta keywords:
 * Suyunov Husan, IT Creative, Bootstrap darslari, Bootstrap Course
 */

const BootstrapCourse: React.FC = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Bootstrap Course
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#versions">
                  Versiyalar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#install">
                  O‘rnatish
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#breakpoints">
                  Breakpoints
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#grid">
                  Grid
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-primary text-white text-center" style={{ padding: "80px 0" }}>
        <div className="container">
          <h1 className="display-4 fw-bold">Bootstrap asoslari</h1>
          <p className="lead">
            Frontend ishlab chiqish uchun eng mashhur framework
          </p>
        </div>
      </section>

      {/* VERSIONS */}
      <section id="versions" style={{ padding: "80px 0" }}>
        <div className="container">
          <h2 className="mb-4">Bootstrap va uning versiyalari</h2>

          <div className="row g-4">
            <Card title="Bootstrap nima?" text="Bootstrap — responsive web saytlar yaratish uchun CSS va JS framework." badge="Nazariya" badgeClass="bg-primary" />

            <Card title="Versiyalari haqida video" text="Bootstrap 3, 4, 5 farqlari va yangiliklari." badge="Video" badgeClass="bg-success" />

            <Card title="Test" text="Bootstrap versiyalari bo‘yicha test savollari." badge="Test" badgeClass="bg-danger" />
          </div>
        </div>
      </section>

      {/* INSTALL */}
      <section id="install" className="bg-light" style={{ padding: "80px 0" }}>
        <div className="container">
          <h2 className="mb-4">Bootstrap’ni o‘rnatib olish</h2>

          <div className="row g-4">
            <div className="col-md-6">
              <SimpleCard title="CDN orqali" text="Internet orqali tez va oson ulash." badge="Dars" />
            </div>

            <div className="col-md-6">
              <SimpleCard title="Test" text="Bootstrap o‘rnatish bo‘yicha test." badge="Test" badgeColor="bg-danger" />
            </div>
          </div>
        </div>
      </section>

      {/* BREAKPOINTS */}
      <section id="breakpoints" style={{ padding: "80px 0" }}>
        <div className="container">
          <h2 className="mb-4">Breakpoints va Containers</h2>

          <div className="row g-4">
            <SimpleCard title="Breakpoints" text="sm, md, lg, xl, xxl tushunchalari." />
            <SimpleCard title="Containers" text="container va container-fluid farqi." />
            <SimpleCard title="Test" text="Container va breakpoint test." badge="Test" badgeColor="bg-danger" />
          </div>
        </div>
      </section>

      {/* GRID */}
      <section id="grid" className="bg-light" style={{ padding: "80px 0" }}>
        <div className="container">
          <h2 className="mb-4">Grid tizimi</h2>

          <div className="row g-4">
            <div className="col-md-6">
              <SimpleCard title="Grid – 1-qism" text="Row va Col tushunchasi." />
            </div>

            <div className="col-md-6">
              <SimpleCard title="Grid Test" text="Grid tizimi bo‘yicha test savollar." badge="Test" badgeColor="bg-danger" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">
          © 2026 Bootstrap Course | IT Creative Academy
        </p>
      </footer>
    </>
  );
};

export default BootstrapCourse;

/* ====== KOMPONENTLAR ====== */

interface CardProps {
  title: string;
  text: string;
  badge?: string;
  badgeClass?: string;
}

const Card: React.FC<CardProps> = ({ title, text, badge, badgeClass }) => (
  <div className="col-md-4">
    <div className="card h-100">
      <div className="card-body">
        <h5>{title}</h5>
        <p>{text}</p>
        {badge && <span className={`badge ${badgeClass}`}>{badge}</span>}
      </div>
    </div>
  </div>
);

interface SimpleCardProps {
  title: string;
  text: string;
  badge?: string;
  badgeColor?: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({
  title,
  text,
  badge,
  badgeColor = "bg-primary",
}) => (
  <div className="col-md-4 col-lg-4">
    <div className="card h-100">
      <div className="card-body">
        <h5>{title}</h5>
        <p>{text}</p>
        {badge && <span className={`badge ${badgeColor}`}>{badge}</span>}
      </div>
    </div>
  </div>
);
