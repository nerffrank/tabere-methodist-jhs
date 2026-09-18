const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

export const dynamic = "force-static";

const coreSubjects = [
  "Mathematics",
  "Integrated Science",
  "Social Studies",
  "English Language",
  "Religious and Moral Education",
  "Creative Arts",
  "Ghanaian Language",
];

const announcements = [
  "Enrollment enquiries are welcome at the administrative block.",
  "Parents and alumni are invited to support literacy and ICT initiatives.",
  "School office hours: Monday to Friday, 7:30 AM to 3:30 PM.",
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Tabere Methodist JHS home">
          <span className="brand-mark">
            <img src={assetPath("/tabere-crest.png")} alt="" />
          </span>
          <span>
            <strong>Tabere Methodist JHS</strong>
            <small>Atwima Nwabiagya North</small>
          </span>
        </a>
        <nav className="top-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Public basic education in Ashanti Region</p>
          <h1>Tabere Methodist Junior High School</h1>
          <p className="hero-subtitle">
            Nurturing excellence, faith, and service while empowering the youth
            of the Atwima Nwabiagya North District with quality education and
            sound moral values.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#admissions">
              Admissions
            </a>
            <a className="button secondary" href="#contact">
              Contact Office
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src={assetPath("/tabere-graduates.png")}
            alt="Tabere Methodist Junior High School graduates and staff"
          />
          <div className="photo-caption">
            <span>Celebrating achievement</span>
            <strong>Students, staff, and community leaders</strong>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="School announcements">
        <strong>Notices</strong>
        <div className="ticker-window">
          <div className="ticker-track">
            {[0, 1].map((group) => (
              <div
                className="ticker-group"
                key={group}
                aria-hidden={group === 1}
              >
                {announcements.map((item) => (
                  <span key={`${group}-${item}`}>{item}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="welcome section-band">
        <div className="section-heading">
          <p className="eyebrow">Principal&apos;s welcome</p>
          <h2>A safe, challenging, and supportive learning environment</h2>
        </div>
        <p>
          Welcome to Tabere Methodist JHS. As the premier public basic
          institution in our community, we are dedicated to providing a safe,
          challenging, and supportive learning environment. We invite parents,
          alumni, and local stakeholders to partner with us as we equip our
          students with the skills required to navigate a digital and rapidly
          changing world.
        </p>
        <div className="leader-card">
          <img
            src={assetPath("/tabere-crest.png")}
            alt="Tabere Methodist Junior High School crest"
          />
          <div>
            <span>Headmaster</span>
            <strong>Prince Owusu Asante</strong>
            <a href="tel:+233549131522">+233 54 913 1522</a>
          </div>
        </div>
      </section>

      <section className="content-grid" id="about">
        <div className="section-heading">
          <p className="eyebrow">About us</p>
          <h2>Built on discipline, hard work, and academic excellence</h2>
          <p>
            Established to provide critical secondary-track basic education
            northwest of Kumasi near the high-elevation areas of Barekese and
            Tabere, the school continues to grow through church, community, and
            local education partnerships.
          </p>
        </div>
        <div className="pillars">
          <article>
            <span>Motto</span>
            <h3>Discipline, Hard Work, and Academic Excellence</h3>
          </article>
          <article>
            <span>Vision</span>
            <h3>
              To be a leading light in the Ashanti Region by molding
              academically sound and socially responsible future leaders.
            </h3>
          </article>
          <article>
            <span>Affiliation</span>
            <h3>
              A Methodist Church Ghana and local government education
              partnership serving families in Tabere.
            </h3>
          </article>
        </div>
      </section>

      <section className="academics section-band" id="academics">
        <div className="section-heading">
          <p className="eyebrow">Academics</p>
          <h2>GES-aligned teaching for BECE readiness</h2>
          <p>
            The curriculum prepares learners for the Basic Education Certificate
            Examination while developing confidence in literacy, numeracy,
            science, citizenship, faith, creativity, and technology.
          </p>
        </div>
        <div className="subject-grid">
          {coreSubjects.map((subject) => (
            <span key={subject}>{subject}</span>
          ))}
        </div>
        <figure className="study-highlight">
          <img
            src={assetPath("/tabere-study-group.png")}
            alt="Tabere Methodist Junior High School students reading from a notebook"
          />
          <figcaption>
            <span>Learning in action</span>
            <strong>Reading, discussion, and peer support</strong>
            <p>
              Everyday classroom life is strengthened through guided study,
              shared notes, and learners helping one another build confidence.
            </p>
          </figcaption>
        </figure>
        <div className="feature-row">
          <article>
            <h3>ICT & Learning Tools</h3>
            <p>
              Foundational technology equipment and donated literacy resources
              support student research, reading culture, and practical digital
              awareness.
            </p>
          </article>
          <article>
            <h3>Student Resources</h3>
            <p>
              Learners benefit from teacher-guided study, community reading
              materials, assessment preparation, and school-led moral formation.
            </p>
          </article>
        </div>
        <figure className="student-life">
          <img
            src={assetPath("/tabere-students.png")}
            alt="Tabere Methodist Junior High School students celebrating together"
          />
          <figcaption>
            Student life at Tabere Methodist JHS is shaped by confidence,
            teamwork, and pride in the school community.
          </figcaption>
        </figure>
      </section>

      <section className="admissions" id="admissions">
        <div className="section-heading">
          <p className="eyebrow">Admissions</p>
          <h2>Enrollment for pupils completing Primary School</h2>
          <p>
            Admission is open to students who have successfully completed public
            or private Primary School, Class 1 through Class 6.
          </p>
        </div>
        <div className="admissions-grid">
          <article>
            <span>01</span>
            <h3>Check Eligibility</h3>
            <p>
              Pupils should have completed primary education and be ready for
              Junior High School placement and continuous assessment.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Prepare Documents</h3>
            <p>
              Bring a completed enrollment form, transfer certificate or
              assessment records, and a birth or baptismal certificate copy.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Visit the Office</h3>
            <p>
              Open enrollment begins before the first academic term, typically
              aligned with the Ghana Education Service calendar.
            </p>
          </article>
        </div>
      </section>

      <section className="contact section-band" id="contact">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Visit the administrative block during school hours</h2>
          <p>
            For registrations, transcripts, partnerships, or general enquiries,
            visit Monday to Friday from 7:30 AM to 3:30 PM.
          </p>
        </div>
        <div className="contact-layout">
          <div className="contact-card">
            <img
              className="contact-crest"
              src={assetPath("/tabere-crest.png")}
              alt="Tabere Methodist Junior High School crest"
            />
            <h3>School Location</h3>
            <p>
              AK544 Abrafo Kokobeng Newsite Road, Akropon, Ghana.
            </p>
            <p>
              Headmaster: Prince Owusu Asante
              <br />
              Phone: <a href="tel:+233549131522">+233 54 913 1522</a>
            </p>
            <p className="location-note">
              Located northwest of the regional capital, Kumasi, near the
              high-elevation areas of Barekese and Tabere.
            </p>
            <div className="map-panel">
              <iframe
                title="Map showing Akropon near Tabere, Ghana"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-1.8%2C6.6%2C-1.5%2C6.9&layer=mapnik"
                loading="lazy"
              />
            </div>
            <a
              className="map-link"
              href="https://www.openstreetmap.org/search?query=AK544%20Abrafo%20Kokobeng%20Newsite%20Road%2C%20Akropon%2C%20Ghana"
              target="_blank"
              rel="noreferrer"
            >
              View larger map
            </a>
          </div>
          <form className="inquiry-form">
            <label>
              Full name
              <input name="name" type="text" placeholder="Parent or guardian name" />
            </label>
            <label>
              Phone or email
              <input name="contact" type="text" placeholder="Contact details" />
            </label>
            <label>
              Enquiry type
              <select name="type" defaultValue="Admissions">
                <option>Admissions</option>
                <option>Academic records</option>
                <option>Partnership</option>
                <option>General enquiry</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" placeholder="How can the school help?" />
            </label>
            <button type="submit">Send Enquiry</button>
          </form>
        </div>
      </section>

      <footer>
        <strong>Tabere Methodist Junior High School</strong>
        <span>Discipline and hard work. Call +233 54 913 1522.</span>
      </footer>
    </main>
  );
}
