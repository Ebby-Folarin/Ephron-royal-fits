import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/components/navigation/navbar/Navbar.module.css";
import { Bag2, SearchNormal1, User } from "iconsax-react";
import { useAuth } from "@/firebase/fire_auth_context";
import categories from "@/components/utils/categories";

export default function UnCollapsedNavbar({ totalCart, emitShowSearch }) {
  const router = useRouter();
  const { loading, authUser } = useAuth();

  return (
    <nav
      className={`${styles.navbar} navbar navbar-expand-sm navbar-light fixed-top flex-column`}
    >
      <div className="container-fluid p-2">
        <Link className="navbar-brand" href="/">
          <img
            src="/logo/png/logo_long.png"
            alt="logo"
            className="rounded"
            width={150}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ua className="navbar-nav me-auto mb-2 mb-md-0 mx-auto justify-content-center">
            {categories.map((cat) =>
              cat.sub.length > 0 ? (
                <li key={cat.id} className="nav-item dropdown">
                  <button
                    className={`nav-link rounded-0 black ${styles.dropdown}`}
                    type="button"
                    id={`cat${cat.id}`}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ marginBottom: 7 }}
                  >
                    {cat.name}
                  </button>

                  <ul
                    className="dropdown-menu rounded-0"
                    aria-labelledby={`cat${cat.id}`}
                  >
                    {cat.sub.map((sub, index) => (
                      <li
                        key={sub.id}
                        className={`m-2 blue ${index === 0 && "mt-0"} ${
                          index === cat.sub.length - 1 && "mb-0"
                        }`}
                      >
                        <Link
                          className={`${styles.dropdown_item} ${styles.dropdownSmallText} d-flex`}
                          href={`/category/${sub.parentId}/${sub.id}`}
                        >
                          <img
                            src={sub.image}
                            alt={sub.name}
                            className="rounded-circle me-2"
                            width={30}
                            height={30}
                            style={{ objectFit: "cover" }}
                          />
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={cat.id} className="nav-item">
                  <Link
                    className="nav-link rounded-0 black"
                    href={`/category/${cat.parentId}`}
                    style={{ marginBottom: 7 }}
                  >
                    {cat.name}
                  </Link>
                </li>
              )
            )}
          </ua>

          <ul className="d-flex navbar-nav" style={{ marginBottom: 7 }}>
            <li className="nav-item">
              <button
                onClick={() => emitShowSearch(true)}
                className="btn nav-link"
              >
                <SearchNormal1 className="black" size={20} variant="Bold" />
              </button>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link nav-link-none ${
                  router.asPath == "/account" ? "blue" : "black"
                }`}
                href={!loading && authUser ? "/account" : "/auth/signin"}
              >
                <User size={20} variant="Bulk" />
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link nav-link-none position-relative ${
                  router.asPath == "/cart" ? "blue" : "black"
                }`}
                href="/cart"
              >
                <Bag2 size={20} variant="Bulk" />
                {parseInt(totalCart) > 0 && (
                  <span
                    class="position-absolute bottom-0 end-0 translate-middle bg_blue border border-light rounded-circle"
                    style={{ padding: "0.35rem" }}
                  />
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
