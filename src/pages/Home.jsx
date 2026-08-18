import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const titanData = [
  {
    number: '01',
    title: 'ATTACK TITAN',
    jp: '進撃の巨人',
    image: '/images/attack-titan.jpg',
    text: 'ไททันจู่โจมเป็นหนึ่งในพลังไททันที่เอเลนครอบครอง มีจุดเด่นด้านการต่อสู้และมีความเชื่อมโยงกับความทรงจำของผู้ถือครอง'
  },
  {
    number: '02',
    title: 'FOUNDING TITAN',
    jp: '始祖の巨人',
    image: '/images/founding-titan.jpg',
    text: 'ไททันผู้ก่อตั้งเป็นพลังที่มีอำนาจมหาศาล สามารถส่งผลต่อชาวเอลเดียและเกี่ยวข้องกับเส้นทาง Paths'
  },
  {
    number: '03',
    title: 'WAR HAMMER TITAN',
    jp: '戦槌の巨人',
    image: '/images/war-hammer-titan.jpg',
    text: 'ไททันค้อนสงครามสามารถสร้างอาวุธและโครงสร้างจากเนื้อไททัน ทำให้เอเลนสามารถสร้างอาวุธเพื่อใช้ในการต่อสู้'
  }
]

const characters = [
  {
    name: 'MIKASA ACKERMAN',
    role: 'CHILDHOOD FRIEND',
    image: '/images/mikasa.jpg',
    text: 'มิคาสะเป็นเพื่อนวัยเด็กของเอเลนและมีความผูกพันกับเขาอย่างมาก ทั้งสองเติบโตมาด้วยกันหลังจากเหตุการณ์ในวัยเด็ก'
  },
  {
    name: 'ARMIN ARLERT',
    role: 'BEST FRIEND',
    image: '/images/armin.jpg',
    text: 'อาร์มินเป็นเพื่อนสนิทของเอเลน ทั้งสามคนมีความฝันเกี่ยวกับโลกภายนอกและเคยสัญญาว่าจะออกไปเห็นมันด้วยกัน'
  },
  {
    name: 'GRISHA YEAGER',
    role: 'FATHER',
    image: '/images/grisha.jpg',
    text: 'กริชา เยเกอร์ เป็นพ่อของเอเลนและเป็นบุคคลสำคัญที่เชื่อมโยงเอเลนกับพลังไททันและความลับของโลก'
  }
]

function Home() {

  const navigate = useNavigate()

  const [menuOpen, setMenuOpen] = useState(false)

  const logout = () => {
    sessionStorage.removeItem('isLogin')
    navigate('/')
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (

    <div className="site">

      {/* ================= NAVBAR ================= */}

      <nav className={`navbar ${menuOpen ? 'menu-open' : ''}`}>

        <a
          href="#top"
          className="nav-brand"
          onClick={closeMenu}
        >

          <div className="brand-symbol">
            進
          </div>

          <div>
            <strong>EREN</strong>
            <span>YEAGER</span>
          </div>

        </a>

        <div className="nav-center">

          <a
            href="#about"
            onClick={closeMenu}
          >
            <small>01</small>
            ABOUT
          </a>

          <a
            href="#story"
            onClick={closeMenu}
          >
            <small>02</small>
            STORY
          </a>

          <a
            href="#titans"
            onClick={closeMenu}
          >
            <small>03</small>
            TITANS
          </a>

          <a
            href="#characters"
            onClick={closeMenu}
          >
            <small>04</small>
            CHARACTERS
          </a>

          <a
            href="#rumbling"
            onClick={closeMenu}
          >
            <small>05</small>
            RUMBLING
          </a>

        </div>

        <button
          className="nav-logout"
          onClick={logout}
        >
          <span>LOGOUT</span>
          <b>↗</b>
        </button>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </nav>

      {/* ================= HERO ================= */}

      <header
        id="top"
        className="hero"
      >

        <div className="hero-image"></div>

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <div className="hero-line">
            <span></span>
            <p>ATTACK ON TITAN</p>
          </div>

          <h1>
            EREN
            <span>YEAGER</span>
          </h1>

          <div className="hero-bottom">

            <div>
              <p className="jp">
                進撃の巨人
              </p>

              <p>
                THE BOY WHO SOUGHT FREEDOM
              </p>
            </div>

            <a
              href="#about"
              className="hero-btn"
            >
              EXPLORE
              <span>↓</span>
            </a>

          </div>

        </div>

        <div className="hero-number">
          01
        </div>

        <div className="hero-vertical">
          FREEDOM
        </div>

      </header>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="section about-section"
      >

        <div className="section-index">
          01
        </div>

        <div className="section-body">

          <div className="section-label">
            CHARACTER PROFILE
          </div>

          <h2>
            THE BOY WHO
            <br />
            <span>WANTED FREEDOM</span>
          </h2>

          <div className="about-grid">

            <div className="about-image">

              <img
                src="/images/eren-child.jpg"
                alt="Eren childhood"
              />

              <div className="image-caption">
                EREN YEAGER / CHILDHOOD
              </div>

            </div>

            <div className="about-text">

              <p className="lead">
                เอเลน เยเกอร์ คือเด็กหนุ่มจากเขตชิงันชินะ
                ผู้มีความฝันที่จะออกไปเห็นโลกภายนอกกำแพง
              </p>

              <p>
                ตั้งแต่วัยเด็ก เอเลนรู้สึกว่าชีวิตภายในกำแพง
                ไม่ใช่ชีวิตที่มีอิสรภาพอย่างแท้จริง
                เขาต้องการเห็นโลกภายนอกที่อาร์มินเคยเล่าให้ฟัง
              </p>

              <p>
                เหตุการณ์ในปี 845 เปลี่ยนชีวิตของเขา
                เมื่อไททันมหึมาปรากฏตัวและกำแพงมาเรียถูกทำลาย
                ส่งผลให้ผู้คนจำนวนมากต้องสูญเสียบ้านและครอบครัว
              </p>

              <p>
                หลังจากสูญเสียแม่ เอเลนจึงสาบานว่าจะกำจัดไททัน
                และเข้าร่วมกองกำลังฝึกทหารในปี 847
              </p>

              <div className="stats">

                <div>
                  <strong>845</strong>
                  <span>WALL MARIA</span>
                </div>

                <div>
                  <strong>847</strong>
                  <span>TRAINING</span>
                </div>

                <div>
                  <strong>850</strong>
                  <span>ATTACK TITAN</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STORY ================= */}

      <section
        id="story"
        className="story-section"
      >

        <div className="story-bg">
          <img
            src="/images/eren-soldier.jpg"
            alt="Eren soldier"
          />
        </div>

        <div className="story-overlay"></div>

        <div className="story-content">

          <div className="section-label">
            HIS JOURNEY
          </div>

          <h2>
            FROM
            <br />
            <span>REVENGE</span>
            <br />
            TO FREEDOM
          </h2>

          <p>
            การเดินทางของเอเลนเริ่มต้นจากความแค้น
            แต่เมื่อเขาเรียนรู้ความจริงของโลก
            เป้าหมายของเขาก็ค่อย ๆ เปลี่ยนไป
          </p>

          <p>
            จากเด็กที่ต้องการฆ่าไททันทั้งหมด
            เขากลายเป็นบุคคลที่ต้องตัดสินใจ
            ระหว่างอนาคตของคนที่รักกับชะตากรรมของโลก
          </p>

        </div>

      </section>

      {/* ================= TIMELINE ================= */}

      <section className="section timeline-section">

        <div className="section-index">
          02
        </div>

        <div className="section-body">

          <div className="section-label">
            TIMELINE
          </div>

          <h2>
            THE ROAD OF
            <br />
            <span>EREN YEAGER</span>
          </h2>

          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-year">
                845
              </div>

              <div>
                <h3>
                  THE FALL OF WALL MARIA
                </h3>

                <p>
                  ไททันมหึมาและไททันเกราะปรากฏตัว
                  และกำแพงมาเรียถูกทำลาย
                  เอเลนสูญเสียแม่และตั้งเป้าหมาย
                  กำจัดไททันทั้งหมด
                </p>
              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-year">
                847
              </div>

              <div>
                <h3>
                  104TH TRAINING CORPS
                </h3>

                <p>
                  เอเลนเข้าร่วมกองกำลังฝึกทหารรุ่นที่ 104
                  พร้อมกับมิคาสะและอาร์มิน
                </p>
              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-year">
                850
              </div>

              <div>
                <h3>
                  BATTLE OF TROST
                </h3>

                <p>
                  ระหว่างการต่อสู้ที่ทรอสต์
                  ความสามารถในการแปลงร่างเป็นไททัน
                  ของเอเลนถูกเปิดเผย
                </p>
              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-year">
                850+
              </div>

              <div>
                <h3>
                  THE TRUTH OF THE WORLD
                </h3>

                <p>
                  เอเลนและพวกพ้องเริ่มเข้าใจความจริง
                  เกี่ยวกับโลกภายนอกกำแพง
                  รวมถึงประวัติศาสตร์ของเอลเดียและมาร์เลย์
                </p>
              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-year">
                FINAL
              </div>

              <div>
                <h3>
                  THE RUMBLING
                </h3>

                <p>
                  เอเลนใช้พลังของไททันผู้ก่อตั้ง
                  และเริ่มแผนการครั้งใหญ่
                  ซึ่งนำไปสู่บทสรุปของเรื่อง
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= TITANS ================= */}

      <section
        id="titans"
        className="dark-section"
      >

        <div className="section-index">
          03
        </div>

        <div className="section-body">

          <div className="section-label">
            TITAN POWERS
          </div>

          <h2>
            THE THREE
            <br />
            <span>TITAN POWERS</span>
          </h2>

          <div className="titan-grid">

            {titanData.map((titan) => (

              <article
                className="titan-card"
                key={titan.title}
              >

                <div className="titan-image">

                  <img
                    src={titan.image}
                    alt={titan.title}
                  />

                  <span>
                    {titan.number}
                  </span>

                </div>

                <div className="titan-info">

                  <div className="titan-jp">
                    {titan.jp}
                  </div>

                  <h3>
                    {titan.title}
                  </h3>

                  <p>
                    {titan.text}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* ================= ABILITIES ================= */}

      <section className="section abilities-section">

        <div className="section-index">
          04
        </div>

        <div className="section-body">

          <div className="section-label">
            ABILITIES
          </div>

          <h2>
            WHAT MAKES
            <br />
            <span>EREN POWERFUL?</span>
          </h2>

          <div className="ability-grid">

            <article>
              <span>01</span>
              <h3>TITAN TRANSFORMATION</h3>
              <p>
                สามารถแปลงร่างเป็นไททัน
                เพื่อเพิ่มพลังทางกายภาพ
                และใช้ในการต่อสู้
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>HARDENING</h3>
              <p>
                สามารถใช้พลังทำให้ส่วนต่าง ๆ
                ของร่างกายแข็งตัว
                เพื่อป้องกันและโจมตี
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>MEMORIES</h3>
              <p>
                พลังของไททันจู่โจมเกี่ยวข้องกับ
                ความทรงจำที่เชื่อมโยงระหว่าง
                ผู้ถือครองในช่วงเวลาต่าง ๆ
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>FOUNDING POWER</h3>
              <p>
                พลังไททันผู้ก่อตั้งมีความเกี่ยวข้อง
                กับชาวเอลเดียและ Paths
              </p>
            </article>

          </div>

        </div>

      </section>

      {/* ================= CHARACTERS ================= */}

      <section
        id="characters"
        className="characters-section"
      >

        <div className="section-inner">

          <div className="section-label">
            RELATIONSHIPS
          </div>

          <h2>
            PEOPLE WHO
            <br />
            <span>SHAPED EREN</span>
          </h2>

          <div className="character-grid">

            {characters.map((character) => (

              <article
                className="character-card"
                key={character.name}
              >

                <div className="character-image">

                  <img
                    src={character.image}
                    alt={character.name}
                  />

                </div>

                <div className="character-info">

                  <span>
                    {character.role}
                  </span>

                  <h3>
                    {character.name}
                  </h3>

                  <p>
                    {character.text}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* ================= RUMBLING ================= */}

      <section
        id="rumbling"
        className="rumbling-section"
      >

        <img
          className="rumbling-bg"
          src="/images/rumbling.jpg"
          alt="The Rumbling"
        />

        <div className="rumbling-overlay"></div>

        <div className="rumbling-content">

          <div className="section-label">
            THE FINAL CHAPTER
          </div>

          <h2>
            THE
            <br />
            <span>RUMBLING</span>
          </h2>

          <p>
            เมื่อเอเลนสามารถเข้าถึงพลังของไททันผู้ก่อตั้ง
            เขาเริ่มแผนการที่เรียกว่า The Rumbling
            ซึ่งเกี่ยวข้องกับไททันมหึมาจำนวนมหาศาล
            ที่อยู่ภายในกำแพง
          </p>

          <p>
            การตัดสินใจของเอเลนกลายเป็นจุดเปลี่ยนครั้งใหญ่
            และทำให้มิคาสะ อาร์มิน และพวกพ้อง
            ต้องพยายามหยุดเขา
          </p>

        </div>

      </section>

      {/* ================= FINAL QUOTE ================= */}

      <section className="final-section">

        <div className="final-mark">
          “
        </div>

        <h2>
          IF WE DON'T
          <br />
          <span>FIGHT,</span>
          <br />
          WE CAN'T WIN.
        </h2>

        <p>
          — EREN YEAGER
        </p>

      </section>

      {/* ================= FOOTER ================= */}

      <footer>

        <div>

          <strong>
            EREN YEAGER
          </strong>

          <p>
            Attack on Titan Character Website
          </p>

        </div>

        <div>

          <p>
            FAN-MADE WEBSITE
          </p>

          <p>
            BUILT WITH REACT
          </p>

        </div>

      </footer>

    </div>

  )
}

export default Home