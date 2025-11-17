"use client";

import styles from "./page.module.css";
import { ChevronRight } from "lucide-react";
import Footer from "../../component/home/footer/footer";
import React, { useState } from "react";
import { productGroup } from "../../constant/sections";
import { useRouter } from "next/navigation";

export default function Page() {
  const [activeCategory, setActiveCategory] = useState(0);
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        {/* NAVIGATION */}
        <nav className={styles.nav}>
          <div className={styles.brand}>
            <img src="/assets/img/logo.png" alt="Brand Logo" />
          </div>

          <ul className={styles.navItems}>
            {["Home", "About", "Services", "Blog", "Pages", "Contact"].map(
              (item, idx) => (
                <li
                  key={idx}
                  className={`${styles.navItem} ${
                    idx === 0 ? styles.navItemActive : ""
                  }`}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </nav>

        {/* LAYOUT WRAPPER */}
        <div className={styles.layoutWrapper}>
          {/* LEFT SIDEBAR */}
          <aside className={styles.sidebar}>
            <ul className={styles.sidebarList}>
              {productGroup.map((group, index) => (
                <li
                  key={index}
                  className={`${styles.sidebarItem} ${
                    index === activeCategory ? styles.sidebarItemActive : ""
                  }`}
                  onClick={() => setActiveCategory(index)}
                >
                  {group.name}
                </li>
              ))}
            </ul>
          </aside>

          {/* RIGHT CONTENT */}
          <div className={styles.contentArea}>
            {(() => {
              const group = productGroup[activeCategory];
              const isOdd = activeCategory % 2 !== 0;

              return (
                <section
                  style={{
                    backgroundColor: isOdd ? "var(--bg-alt)" : "white",
                  }}
                  className={styles.productGroup}
                >
                  <header className={styles.productGroupHeader}>
                    <h5>{group.name}</h5>
                    <p>{group.description}</p>

                    <div className={styles.productGroupHeaderBtnWrapper}>
                      <button className={styles.btnSecondary}>
                        Learn more
                      </button>

                      <button className={styles.btnPlain}>
                        <span>Get a demo</span>
                        <ChevronRight />
                      </button>
                    </div>
                  </header>

                  <div className={styles.productItemsWrapper}>
                    <div className={styles.productItems}>
                      {group.products.map((item, idx) => (
                        <article key={idx} className={styles.productItemCard}>
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>

                          <div className={styles.productItemBtnWrapper}>
                            <button
                              disabled={!item.link}
                              onClick={() =>
                                item.link && router.push(item.link)
                              }
                              className={styles.tryBtn}
                            >
                              {item.link ? "Try it free" : "Not available"}
                            </button>

                            <button className={styles.loginBtn}>
                              <span>Login</span>
                              <ChevronRight />
                            </button>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })()}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
