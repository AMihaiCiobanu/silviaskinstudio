/** @format */

import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../ui/SectionTitle";

const reviews = [
   {
    path: "Natalie F.",
    text: "Wonderful Therapist full of knowledge and a perfect touch. Silvia is a well educated professional, each treatment with her leaves you feeling invigorating and well relaxed. Easy to chat and get along with. Silvia gives you the tailored treatments you deserve and need. A true spa experience xx",
    rating: 5,
  },
  {
    path: "Elaine C.",
    text: "Silvia is in a class of her own with all her treatments. I am 64 and have never experienced a therapist like her.  I have always described her as having the hands of an 'angel' and her knowledge is off the richter scale.  I could go on and on but the above says it all.  All you need to do is book in for a treatment otherwise you will be missing out on an incredible experience.",
    rating: 5,
  },
  {
    path: "Ionela P.",
    text: "Absolutely loved the Veste massage and facial! So relaxing and professional, and my skin felt fresh, smooth, and glowing afterwards. Highly recommend! ✨",
    rating: 5,
  },
  {
    path: "Jemma F.",
    text: "I’ve struggled for years with back issues and have had many masseuses, Silvia comes very highly recommended!",
    rating: 5,
  },
  {
    path: "M. S.",
    text: "Silvia is simply amazing! Her facials are so relaxing and my skin has never looked better. Highly recommend!",
    rating: 5,
  },
  {
    path: "A. R.",
    text: "The best massage I've ever had. Silvia is professional, kind, and truly skilled. A wonderful experience.",
    rating: 5,
  },
  {
    path: "K. L.",
    text: "I love the new studio! It's so beautiful and calming. Silvia's treatments are top-notch.",
    rating: 5,
  },
];

// Wide screens show an open spread (two pages per leaf); phones show one page at a time.
const WIDE_QUERY = "(min-width: 760px)";
const TURN_MS = 900;

// Long reviews get a smaller face so they still fit on one page.
const quoteSize = (text) =>
  text.length > 300 ? "is-long" : text.length > 180 ? "is-medium" : "";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);
  return matches;
};

const CoverPage = () => (
  <div className="pg pg-cover">
    <p className="cover-kicker">Silvia Skin Studio</p>
    <p className="cover-title">Guest book</p>
    <p className="cover-sub">kind words from our clients</p>
    <p className="cover-hint">Tap to open</p>
  </div>
);

const IntroPage = () => (
  <div className="pg pg-intro pg-plain">
    <h3>Written by our clients</h3>
    <div className="rule-ornament">
      <span />
    </div>
    <p>A few words left after their treatments, one page each.</p>
  </div>
);

const ReviewPage = ({ review, folio }) => (
  <div className="pg pg-review">
    <span className="stars" aria-hidden="true">
      {"★".repeat(review.rating)}
    </span>
    <span className="dropq" aria-hidden="true">
      “
    </span>
    <blockquote className={quoteSize(review.text)}>{review.text}</blockquote>
    <p className="by">{review.path}</p>
    <span className="pg-folio">— {folio} —</span>
  </div>
);

const BackCover = () => (
  <div className="pg pg-cover pg-back">
    <p className="cover-title">Thank you</p>
    <p className="cover-sub">for being part of our story</p>
    <div className="rule-ornament">
      <span />
    </div>
    <p className="cover-kicker">Silvia Skin Studio</p>
  </div>
);

const BlankPage = () => <div className="pg pg-plain" />;

const pages = [
  <CoverPage key="cover" />,
  <IntroPage key="intro" />,
  ...reviews.map((review, i) => (
    <ReviewPage key={review.path} review={review} folio={i + 1} />
  )),
];

const Reviews = () => {
  const wide = useMediaQuery(WIDE_QUERY);
  const [turned, setTurned] = useState(0);
  const [moving, setMoving] = useState(null);
  const settle = useRef(null);
  const swipe = useRef({ startX: null, swiped: false });

  // Spread: the back cover is the outside of the last leaf, so it shows once the book is
  // turned all the way. Phone: it is the last page and cannot be turned past.
  const leaves = [];
  if (wide) {
    const inner = pages.length % 2 ? pages : [...pages, <BlankPage key="blank" />];
    for (let i = 0; i < inner.length; i += 2)
      leaves.push([inner[i], inner[i + 1] || <BackCover key="back" />]);
  } else {
    for (const p of [...pages, <BackCover key="back" />])
      leaves.push([p, <BlankPage key="blank" />]);
  }
  const n = leaves.length;
  const lastTurn = wide ? n : n - 1;

  // Switching between spread and single page rebuilds the book, so start from the cover.
  const [layoutWide, setLayoutWide] = useState(wide);
  if (layoutWide !== wide) {
    setLayoutWide(wide);
    setTurned(0);
  }
  useEffect(() => () => clearTimeout(settle.current), []);

  const go = (step) => {
    const next = Math.max(0, Math.min(lastTurn, turned + step));
    if (next === turned) return;
    // The leaf in motion stays on top until it lands.
    setMoving(step > 0 ? turned : next);
    setTurned(next);
    clearTimeout(settle.current);
    settle.current = setTimeout(() => setMoving(null), TURN_MS);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    }
  };

  // Swipe: a horizontal drag turns a page; the click that follows is swallowed.
  const onPointerDown = (e) => {
    swipe.current = { startX: e.clientX, swiped: false };
  };
  const onPointerUp = (e) => {
    const { startX } = swipe.current;
    if (startX == null) return;
    const dx = e.clientX - startX;
    swipe.current.startX = null;
    if (Math.abs(dx) > 40) {
      swipe.current.swiped = true;
      go(dx < 0 ? 1 : -1);
    }
  };
  const onClickCapture = (e) => {
    if (swipe.current.swiped) {
      e.stopPropagation();
      swipe.current.swiped = false;
    }
  };

  // Count in review numbers, so it matches the folio printed on each page. Page k of the
  // book (cover = 0, intro = 1) holds review k - 1.
  const folioAt = (k) => (k >= 2 && k < 2 + reviews.length ? k - 1 : null);
  const folios = (wide ? [turned * 2 - 1, turned * 2] : [turned])
    .map(folioAt)
    .filter(Boolean);
  const count =
    turned === 0
      ? "Cover"
      : turned === lastTurn
        ? "Back cover"
        : folios.length === 0
          ? "Introduction"
          : folios.length === 1
            ? `Page ${folios[0]} of ${reviews.length}`
            : `Pages ${folios[0]}–${folios[1]} of ${reviews.length}`;

  return (
    <section
      id="reviews"
      className="guestbook py-28 md:py-40 bg-butter border-t border-gold/15"
    >
      <div className="container mx-auto px-6 md:px-8">
        <SectionTitle title="The guest book" subtitle="Testimonials" />
        <p className="-mt-8 md:-mt-12 mb-12 text-center text-charcoal/55">
          Turn the pages: tap a page, swipe, or use the arrow keys.
        </p>

        <div className="book-stage">
          <div
            className={`book${turned === 0 ? " is-closed" : ""}${turned === lastTurn ? " is-done" : ""}`}
            tabIndex={0}
            role="group"
            aria-roledescription="book"
            aria-label="Guest book of client reviews"
            onKeyDown={onKeyDown}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onClickCapture={onClickCapture}
          >
            {leaves.map(([front, back], i) => {
              const isTurned = i < turned;
              const z = i === moving ? n + 1 : isTurned ? i + 1 : n - i;
              // Only the top leaf of each stack casts a shadow, or they add up into a halo.
              const onTop = i === turned || i === turned - 1 || i === moving;
              return (
                <div
                  key={`${wide ? "w" : "p"}-${i}`}
                  className={`leaf${isTurned ? " turned" : ""}${onTop ? " on-top" : ""}`}
                  // Safari sorts preserve-3d layers by depth, not z-index: lift each leaf a
                  // hair so leaves are never coplanar (coplanar leaves flicker as they turn).
                  // Stack order only, so a leaf's depth stops changing when its turn ends.
                  style={{ zIndex: z, "--z": `${(isTurned ? i + 1 : n - i) * 0.5}px` }}
                  aria-hidden="true"
                  onClick={(e) => {
                    if (e.target.closest("[data-no-turn]")) return;
                    go(isTurned ? -1 : 1);
                  }}
                >
                  <div className="face front">{front}</div>
                  <div className="face back">{back}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="book-controls">
          <button
            type="button"
            className="round"
            aria-label="Previous page"
            disabled={turned === 0}
            onClick={() => go(-1)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <p className="book-count" aria-live="polite">
            {count}
          </p>
          <button
            type="button"
            className="round"
            aria-label="Next page"
            disabled={turned === lastTurn}
            onClick={() => go(1)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Screen readers get every review as a plain list. */}
        <ol className="sr-only">
          {reviews.map((review) => (
            <li key={review.path}>
              {review.text} {review.path}, {review.rating} out of 5 stars.
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Reviews;
