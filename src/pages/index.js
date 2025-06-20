import Head from "next/head";
import Navbar from "@/components/navigation/navbar/navbar";
import Footer from "@/components/navigation/footer/footer";
import { getWSSchema, getWPSchema, getLBSchema } from "@/components/schema";
import { useState, useEffect, useRef } from "react";
import SearchBox from "@/components/search/search";
import Hero from "@/components/home/hero";
import Products from "@/components/products/products";
import Link from "next/link";

export default function HomePage() {
  const [showSearch, setShowSearch] = useState(false);
  const handleShowSearch = (state) => setShowSearch(state);
  
  // Refs for the carousels
  const topCarouselRef = useRef(null);
  const bottomCarouselRef = useRef(null);

  // State for tracking drag
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Function to handle mouse down event
  const handleMouseDown = (e, carouselRef) => {
    if (!carouselRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    
    // Pause animation while dragging
    carouselRef.current.style.animationPlayState = 'paused';
  };

  // Function to handle mouse leave event
  const handleMouseLeave = (carouselRef) => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Resume animation
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = 'running';
    }
  };

  // Function to handle mouse up event
  const handleMouseUp = (carouselRef) => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Resume animation
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = 'running';
    }
  };

  // Function to handle mouse move event
  const handleMouseMove = (e, carouselRef) => {
    if (!isDragging || !carouselRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Function to handle touch start event
  const handleTouchStart = (e, carouselRef) => {
    if (!carouselRef.current) return;
    
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    
    // Pause animation while dragging
    carouselRef.current.style.animationPlayState = 'paused';
  };

  // Function to handle touch end event
  const handleTouchEnd = (carouselRef) => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Resume animation
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = 'running';
    }
  };

  // Function to handle touch move event
  const handleTouchMove = (e, carouselRef) => {
    if (!isDragging || !carouselRef.current) return;
    
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Add event listeners when component mounts
  useEffect(() => {
    const topCarousel = topCarouselRef.current;
    const bottomCarousel = bottomCarouselRef.current;

    if (topCarousel) {
      topCarousel.addEventListener('mouseenter', () => {
        topCarousel.style.animationPlayState = 'paused';
      });
      topCarousel.addEventListener('mouseleave', () => {
        if (!isDragging) {
          topCarousel.style.animationPlayState = 'running';
        }
      });
    }

    if (bottomCarousel) {
      bottomCarousel.addEventListener('mouseenter', () => {
        bottomCarousel.style.animationPlayState = 'paused';
      });
      bottomCarousel.addEventListener('mouseleave', () => {
        if (!isDragging) {
          bottomCarousel.style.animationPlayState = 'running';
        }
      });
    }

    return () => {
      // Clean up event listeners
      if (topCarousel) {
        topCarousel.removeEventListener('mouseenter', () => {});
        topCarousel.removeEventListener('mouseleave', () => {});
      }
      if (bottomCarousel) {
        bottomCarousel.removeEventListener('mouseenter', () => {});
        bottomCarousel.removeEventListener('mouseleave', () => {});
      }
    };
  }, [isDragging]);

  // page default data
  const pageName = "Ephron Royal 'fits | Art & Fashion";
  const pageDesc =
    "Elevate your style with Ephron Royal 'fits, where art meets fashion in a harmonious blend of creativity and elegance. Explore our online store for a curated collection of unique art-inspired fashion pieces that allow you to express your individuality. Immerse yourself in a world where every garment tells a story, bringing together the realms of art and fashion seamlessly. Discover the perfect fusion of artistic expression and sartorial sophistication at Ephron Royal 'fits.";
  const pageKeywords =
    "Art-inspired fashion, Unique fashion pieces, Creative clothing, Fashion with a story, Wearable art, Eccentric style, Artistic expression in fashion, Fashion showcase, Individuality in clothing, Ephron Royal 'fits online store";
  const baseURL = "https://ephronroyalfits.com";

  // web site schema
  const wSSchema = getWSSchema(baseURL);

  // web page schema
  const wPSchema = getWPSchema(pageName, pageDesc, baseURL, [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseURL,
    },
  ]);

  // local business schema
  const lBSchema = getLBSchema(
    pageName,
    {
      streetAddress: "Nill Ifesowapo crescent",
      addressLocality: "Ado",
      addressRegion: "Ekiti",
      postalCode: "360101",
      addressCountry: "NG",
    },
    "+234-706-386-9144",
    "ephronroyalfits@gmail.com",
    baseURL,
    `${baseURL}/logo/png/logo.png`,
    "Cash, Credit Card, Transfer",
    "NGN, USD, EURO",
    "Mo-Fr 09:00-17:00",
    {
      latitude: "7.6183612",
      longitude: "5.1391947",
    }
  );

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{pageName}</title>

        <meta name="description" content={pageDesc} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" type="image/x-icon" href="/logo/png/logo_trans.png" />
        <meta name="author" content="Ephron Royal 'fits" />
        <meta property="og:title" content={pageName} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo/png/logo_text.png" />
        <meta property="og:image:width" content="1277" />
        <meta property="og:image:height" content="473" />
        <meta property="og:url" content={baseURL} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:site_name" content={pageName} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(wSSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(wPSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lBSchema) }}
        />
      </Head>

      <main>
        <Navbar emitShowSearch={handleShowSearch} />
        <Hero />

        {/* Horizontal scrolling category carousel */}

        <div className="category-carousel-wrapper position-relative w-100 my-2" style={{ overflow: 'hidden' }}>
          <div 
            ref={topCarouselRef}
            className="category-carousel d-flex align-items-stretch" 
            style={{
              width: 'max-content',
              animation: 'scroll-x 20s linear infinite',
              gap: '1rem',
              cursor: isDragging ? 'grabbing' : 'grab',
            }}
            onMouseDown={(e) => handleMouseDown(e, topCarouselRef)}
            onMouseLeave={() => handleMouseLeave(topCarouselRef)}
            onMouseUp={() => handleMouseUp(topCarouselRef)}
            onMouseMove={(e) => handleMouseMove(e, topCarouselRef)}
          >
            {/* Duplicate the set for infinite loop effect */}
            {[1,2].map(function(dup) {
              return (
                <div className="d-flex" key={dup}>
                  <div className="category-card position-relative me-1 mb-2" style={{ minWidth: 220 }}>
                    <Link href="/category/accessories/sunglasses">
                      <img
                        src="images/sunglasses.png"
                        alt="image"
                        width="100%"
                        height={250}
                        className="object-fit-cover"
                        style={{ objectPosition: "top" }}
                      />
                      <div className="position-absolute bottom-0 w-100 px-2 py-2 category-label">
                        <span className="category-text">SUNGLASSES</span>
                      </div>
                    </Link>
                  </div>
                  <div className="category-card position-relative ms-1 mb-2 mx-md-1" style={{ minWidth: 220 }}>
                    <Link href="/category/tees">
                      <img
                        src="images/tee.png"
                        alt="image"
                        width="100%"
                        height={250}
                        className="object-fit-cover"
                        style={{ objectPosition: "top" }}
                      />
                      <div className="position-absolute bottom-0 w-100 px-2 py-2 category-label">
                        <span className="category-text dark">TEES</span>
                      </div>
                    </Link>
                  </div>
                  <div className="category-card position-relative me-1 mb-2 mx-md-1" style={{ minWidth: 220 }}>
                    <Link href="/category/gems/rings">
                      <img
                        src="images/ring.png"
                        alt="image"
                        width="100%"
                        height={250}
                        className="object-fit-cover"
                        style={{ objectPosition: "top" }}
                      />
                      <div className="position-absolute bottom-0 w-100 px-2 py-2 category-label">
                        <span className="category-text">RINGS</span>
                      </div>
                    </Link>
                  </div>
                  <div className="category-card position-relative ms-1 mb-2" style={{ minWidth: 220 }}>
                    <Link href="/category/polos">
                      <img
                        src="images/polo.png"
                        alt="image"
                        width="100%"
                        height={250}
                        className="object-fit-cover"
                        style={{ objectPosition: "top" }}
                      />
                      <div className="position-absolute bottom-0 w-100 px-2 py-2 category-label">
                        <span className="category-text">POLOS</span>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <style>{`
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-horizontal {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .category-carousel::-webkit-scrollbar,
          .category-horizontal-track::-webkit-scrollbar {
            display: none;
          }
          .category-carousel,
          .category-horizontal-track {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .category-carousel:hover,
          .category-horizontal-track:hover {
            animation-play-state: paused;
          }
          .category-label {
            background: linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.65) 100%);
            width: 100%;
            margin: 0;
            padding-bottom: 0.75rem;
            border-radius: 0 0 0.5rem 0.5rem;
            transition: background 0.3s;
          }
          .category-text {
            font-size: 0.85rem;
            letter-spacing: 2px;
            font-weight: 500;
            color: white;
            text-transform: uppercase;
            font-family: 'Julius Sans One', sans-serif;
            transition: all 0.3s ease;
          }
          .category-text.dark {
            color: #333;
          }
          .category-card:hover .category-label,
          .category-card-horizontal:hover .category-label {
            background: linear-gradient(180deg, rgba(87,174,207,0.0) 0%, rgba(87,174,207,0.85) 100%);
          }
          .category-card:hover .category-text,
          .category-card-horizontal:hover .category-text {
            color: white;
            letter-spacing: 3px;
          }
          
          /* New elegant styling for navbar and hero */
          .navbar .nav-link, 
          .navbar .dropdown-menu .d-flex,
          .navbar .navbar-brand {
            font-family: 'Julius Sans One', sans-serif;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            transition: all 0.3s ease;
          }
          
          .navbar .nav-link:hover,
          .navbar .dropdown-menu .d-flex:hover {
            letter-spacing: 2px;
          }
          
          /* Hero text styling */
          .hero-overlay h3 {
            font-family: 'Julius Sans One', sans-serif;
            letter-spacing: 3px;
            font-size: 1.5rem;
            font-weight: 500 !important;
            text-transform: uppercase;
            transition: all 0.5s ease;
          }
          
          .hero-overlay p {
            font-family: 'Julius Sans One', sans-serif;
            letter-spacing: 1.5px;
            font-size: 0.9rem;
            max-width: 600px;
            margin: 0 auto;
            transition: all 0.5s ease;
          }
          
          /* Mobile navbar styling */
          .collapsed_menu_header,
          .collapsed_menu a {
            font-family: 'Julius Sans One', sans-serif;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            transition: all 0.3s ease;
          }
          
          .collapsed_menu a:hover {
            letter-spacing: 2px;
          }
        `}</style>

        <Products
          className="mt-5"
          length={8}
          title="MEN"
          category={null}
          random={true}
        />

        {/* <Products
          length={4}
          title="ACCESSORIES"
          tag={null}
          category="accessories"
          random={false}
        />

        {/* <div className="container">
          <div className="row">
            <div className="col-12 text-center" style={{ margin: "8rem 0rem" }}>
              <img
                src="images/vg.png"
                alt="image"
                width="175"
                className="object-fit-cover me-3"
              />
              <img
                src="images/hg.png"
                alt="image"
                width="175"
                className="object-fit-cover me-3"
              />
              <img
                src="images/ad.png"
                alt="image"
                width="175"
                className="object-fit-cover"
              />
            </div>
          </div>
        </div> */}

        <Products
          className="mb-5"
          length={8}
          title="WOMEN"
          category={null}
          random={true}
        />

        <div className="category-horizontal-scroll container-fluid mb-5 position-relative" style={{ overflow: 'hidden' }}>
          <div
            ref={bottomCarouselRef}
            className="category-horizontal-track d-flex flex-row gap-3 py-2"
            style={{
              width: 'max-content',
              animation: 'scroll-horizontal 25s linear infinite',
              display: 'flex',
              alignItems: 'stretch',
              gap: '1rem',
              cursor: isDragging ? 'grabbing' : 'grab',
            }}
            onMouseDown={(e) => handleMouseDown(e, bottomCarouselRef)}
            onMouseLeave={() => handleMouseLeave(bottomCarouselRef)}
            onMouseUp={() => handleMouseUp(bottomCarouselRef)}
            onMouseMove={(e) => handleMouseMove(e, bottomCarouselRef)}
            onTouchStart={(e) => handleTouchStart(e, bottomCarouselRef)}
            onTouchEnd={() => handleTouchEnd(bottomCarouselRef)}
            onTouchMove={(e) => handleTouchMove(e, bottomCarouselRef)}
          >
            {/* Duplicate the set for infinite loop effect */}
            {[1,2].map((dup) => (
              <div className="d-flex" key={dup}>
                <div className="col-10 col-sm-6 col-md-4 col-lg-3 flex-shrink-0 p-0" style={{ minWidth: 'min(250px, 80vw)' }}>
                  <div className="position-relative me-1 mb-2 category-card-horizontal">
                    <Link href="/category/sweatshirts">
                      <img
                        src="images/sweatshirts.png"
                        alt="image"
                        width="100%"
                        height={467}
                        className="object-fit-cover"
                        style={{ objectPosition: "top" }}
                      />
                      <div className="position-absolute bottom-0 w-100 px-2 py-2 category-label">
                        <span className="category-text">SWEATSHIRTS</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-10 col-sm-6 col-md-4 col-lg-3 flex-shrink-0 p-0" style={{ minWidth: 'min(250px, 80vw)' }}>
                  <div className="position-relative ms-1 mb-2 mx-md-1 category-card-horizontal">
                    <Link href="/category/gems/necklaces">
                      <img
                        src="images/necklaces_2.png"
                        alt="image"
                        width="100%"
                        height={467}
                        className="object-fit-cover"
                        style={{ objectPosition: "top" }}
                      />
                      <div className="position-absolute bottom-0 w-100 px-2 py-2 category-label">
                        <span className="category-text">NECKLACES</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-10 col-sm-6 col-md-4 col-lg-3 flex-shrink-0 p-0" style={{ minWidth: 'min(250px, 80vw)' }}>
                  <div className="position-relative me-1 mb-2 mx-md-1 category-card-horizontal">
                    <Link href="/category/hoodies">
                      <img
                        src="images/hoodies.png"
                        alt="image"
                        width="100%"
                        height={467}
                        className="object-fit-cover"
                        style={{ objectPosition: "top" }}
                      />
                      <div className="position-absolute bottom-0 w-100 px-2 py-2 category-label">
                        <span className="category-text">HOODIES</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-10 col-sm-6 col-md-4 col-lg-3 flex-shrink-0 p-0" style={{ minWidth: 'min(250px, 80vw)' }}>
                  <div className="position-relative ms-1 mb-2 category-card-horizontal">
                    <Link href="/category/essentials/bags">
                      <img
                        src="images/bags.png"
                        alt="image"
                        width="100%"
                        height={467}
                        className="object-fit-cover"
                        style={{ objectPosition: "top" }}
                      />
                      <div className="position-absolute bottom-0 w-100 px-2 py-2 category-label">
                        <span className="category-text">BAGS</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes scroll-horizontal {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .category-horizontal-scroll::-webkit-scrollbar {
            display: none;
          }
          .category-horizontal-scroll {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .category-card-horizontal {
            transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.35s cubic-bezier(0.23, 1, 0.32, 1);
            box-shadow: 0 2px 16px rgba(87, 174, 207, 0.08);
            border-radius: 0.75rem;
            background: #fff;
            cursor: pointer;
            overflow: hidden;
            position: relative;
            will-change: transform;
          }
          .category-card-horizontal:hover {
            transform: scale(1.045) translateY(-6px) rotateZ(-1deg);
            box-shadow: 0 8px 32px rgba(87, 174, 207, 0.18), 0 1.5px 6px rgba(0,0,0,0.04);
            z-index: 2;
          }
          .category-card-horizontal img {
            transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), filter 0.4s;
          }
          .category-card-horizontal:hover img {
            transform: scale(1.08) rotateZ(1deg);
            filter: brightness(0.92) saturate(1.1);
          }
          .category-card-horizontal h5 {
            width: 100%;
            background: linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.55) 100%);
            margin: 0;
            padding: 0.5rem 0.75rem;
            font-size: 1.25rem;
            letter-spacing: 1px;
            border-radius: 0 0 0.75rem 0.75rem;
            transition: background 0.3s;
          }
          .category-card-horizontal:hover h5 {
            background: linear-gradient(180deg, rgba(87,174,207,0.0) 0%, rgba(87,174,207,0.85) 100%);
            color: #fff !important;
          }
        `}</style>

        <Footer />
      </main>

      {showSearch && (
        <SearchBox show={showSearch} onHide={() => setShowSearch(false)} />
      )}
    </>
  );
}
