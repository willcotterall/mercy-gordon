const SONGS = [
  {
    title: "Beautiful Insanity",
    year: "2021",
    cover: "/cover-beautiful-insanity.jpg",
    href: "https://open.spotify.com/track/5ZY2nMbFBaivR82aVZFCm8"
  },
  {
    title: "Have Mercy On Me",
    year: "2023",
    cover: "/cover-have-mercy-on-me.jpg",
    href: "https://open.spotify.com/artist/5Z5rOvYETVfca2rqXq4aa4"
  },
  {
    title: "Come Yeshua",
    year: "2023",
    feature: "with Joshua Aaron",
    cover: "/cover-come-yeshua.jpg",
    href: "https://open.spotify.com/artist/5Z5rOvYETVfca2rqXq4aa4"
  }
];

export default function Page() {
  return (
    <main>
      {/* ───────── Hero ───────── */}
      <section className="hero grain">
        <div className="hero-photo" />
        <div className="hero-vignette" />
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="rule" />
            <span className="mono-eyebrow">Worship · Bay Area</span>
          </div>
          <h1 className="hero-name">
            Mercy<br />
            <em>Gordon</em>
          </h1>
          <p className="hero-tagline">
            Songs written quietly, then released for whoever finds them.
          </p>
        </div>
        <div className="hero-scroll">
          <span>Listen</span>
          <span className="tick" />
        </div>
      </section>

      {/* ───────── The Catalog ───────── */}
      <section className="songs grain">
        <div className="songs-bg" aria-hidden />
        <div className="container">
          <div className="section-head">
            <div className="mono-eyebrow">The Catalog</div>
            <h2 className="section-title">
              Three songs.<br />Sung slow.
            </h2>
            <p className="section-lede">
              A small body of work written as worship. Each piece kept whatever stillness
              it was made in.
            </p>
          </div>
          <div className="songs-grid">
            {SONGS.map((s) => (
              <a key={s.title} className="song-card" href={s.href} target="_blank" rel="noreferrer">
                <div className="song-cover">
                  <img src={s.cover} alt={`${s.title} cover art`} />
                </div>
                <div className="song-meta">
                  <div>
                    <div className="song-title">
                      <em>{s.title}</em>
                    </div>
                    {s.feature ? <div className="song-feature">{s.feature}</div> : null}
                  </div>
                  <div className="song-year">{s.year}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="spotify-embed">
            <iframe
              title="Mercy Gordon on Spotify"
              src="https://open.spotify.com/embed/artist/5Z5rOvYETVfca2rqXq4aa4?utm_source=generator&theme=0"
              width="100%"
              height="380"
              frameBorder={0}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ───────── Lyric Video 1 — Beautiful Insanity ───────── */}
      <section className="lyric lyric-a grain">
        <div className="lyric-bg lyric-bg-a" aria-hidden />
        <div className="container">
          <div className="lyric-layout">
            <div className="lyric-text">
              <div className="lyric-eyebrow">
                <span className="rule" />
                <span>Official Lyric Video</span>
              </div>
              <h3 className="lyric-title">
                Beautiful<br /><em>Insanity</em>
              </h3>
              <p className="lyric-pull">
                Every time I think of who You are and all You&rsquo;ve done,<br />
                I&rsquo;m captivated by the thought that You desire us.
              </p>
              <div className="lyric-meta">
                <a
                  href="https://open.spotify.com/track/5ZY2nMbFBaivR82aVZFCm8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Spotify
                </a>
                <a
                  href="https://music.apple.com/us/album/beautiful-insanity-single/1565853874"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apple Music
                </a>
                <a
                  href="https://www.youtube.com/watch?v=xw6_eTe-FWo"
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube
                </a>
              </div>
            </div>
            <div>
              <div className="video-frame">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/xw6_eTe-FWo?rel=0&modestbranding=1"
                  title="Beautiful Insanity by Mercy Gordon (Official Lyric Video)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="video-caption">2021 · Single</div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Lyric Video 2 — Come Yeshua ───────── */}
      <section className="lyric lyric-b grain">
        <div className="lyric-bg lyric-bg-b" aria-hidden />
        <div className="container">
          <div className="lyric-layout lyric-flip">
            <div>
              <div className="video-frame">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/tSxyVsz4TJw?rel=0&modestbranding=1"
                  title="Come Yeshua by Mercy Gordon ft. Joshua Aaron (Official Lyric Video)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="video-caption">2023 · with Joshua Aaron</div>
            </div>
            <div className="lyric-text">
              <div className="lyric-eyebrow">
                <span className="rule" />
                <span>Official Lyric Video</span>
              </div>
              <h3 className="lyric-title">
                Come<br /><em>Yeshua</em>
              </h3>
              <p className="lyric-pull">
                A bilingual worship song sung as a prayer for Christ&rsquo;s
                return, with Israeli singer Joshua Aaron.
              </p>
              <div className="lyric-meta">
                <a
                  href="https://open.spotify.com/artist/5Z5rOvYETVfca2rqXq4aa4"
                  target="_blank"
                  rel="noreferrer"
                >
                  Spotify
                </a>
                <a
                  href="https://music.apple.com/us/artist/mercy-gordon/1565847831"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apple Music
                </a>
                <a
                  href="https://www.youtube.com/watch?v=tSxyVsz4TJw"
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── About ───────── */}
      <section className="about grain">
        <div className="about-bg" aria-hidden />
        <div className="container">
          <div className="about-layout">
            <div className="about-text">
              <div className="mono-eyebrow">A Note</div>
              <p className="about-quote">
                Every time I think of who You are and all You&rsquo;ve done,
                I&rsquo;m captivated by the thought that You desire us.
              </p>
              <div className="about-attrib">from Beautiful Insanity</div>
              <p className="section-lede" style={{ marginTop: 8 }}>
                A worship leader in the California Bay Area writing music as a
                personal spiritual practice.
              </p>
            </div>
            <div className="about-photo">
              <img
                src="/mercy-portrait.jpg"
                alt="Mercy Gordon"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Listen everywhere ───────── */}
      <section className="listen grain">
        <div className="listen-bg" aria-hidden />
        <div className="container">
          <div className="listen-head">
            <div className="mono-eyebrow">Stream</div>
            <h2 className="section-title">
              Listen anywhere.
            </h2>
            <p className="section-lede">
              The full catalog lives on every major platform. Follow on Spotify to hear what comes next.
            </p>
          </div>
          <div className="platforms">
            <a
              className="platform"
              href="https://open.spotify.com/artist/5Z5rOvYETVfca2rqXq4aa4"
              target="_blank"
              rel="noreferrer"
            >
              <span className="platform-label">Primary</span>
              <span className="platform-name">Spotify</span>
              <span className="platform-arrow">Open profile →</span>
            </a>
            <a
              className="platform"
              href="https://music.apple.com/us/artist/mercy-gordon/1565847831"
              target="_blank"
              rel="noreferrer"
            >
              <span className="platform-label">High fidelity</span>
              <span className="platform-name">Apple Music</span>
              <span className="platform-arrow">Open profile →</span>
            </a>
            <a
              className="platform"
              href="https://www.youtube.com/channel/UCK7PkM2NhsAgRwwIcUpG1eQ"
              target="_blank"
              rel="noreferrer"
            >
              <span className="platform-label">Video</span>
              <span className="platform-name">YouTube</span>
              <span className="platform-arrow">Open channel →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ───────── Outro / contact ───────── */}
      <section className="outro grain">
        <div className="outro-photo" />
        <div className="outro-vignette" />
        <div className="outro-inner">
          <div className="outro-eyebrow">For booking &amp; inquiries</div>
          <h2 className="outro-title">
            Say <em>hello.</em>
          </h2>
          <a className="outro-mail" href="mailto:mercy@crazylove.org">
            mercy@crazylove.org
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>© {new Date().getFullYear()} Mercy Gordon</div>
          <div className="footer-marks">
            <a href="https://open.spotify.com/artist/5Z5rOvYETVfca2rqXq4aa4" target="_blank" rel="noreferrer">Spotify</a>
            <a href="https://music.apple.com/us/artist/mercy-gordon/1565847831" target="_blank" rel="noreferrer">Apple</a>
            <a href="https://www.youtube.com/channel/UCK7PkM2NhsAgRwwIcUpG1eQ" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
