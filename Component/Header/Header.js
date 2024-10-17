/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useScrollPosition from 'use-scroll-position'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
// Dynamic
const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false })
const Header = () => {
  const router = useRouter()
  const [show, setShow] = useState(false)
  const [showLang, setShowlang] = useState(false)
  const scrollPosition = useScrollPosition()
  useEffect(() => {
    if (show) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [show])
  const [locale, setLocale] = useState(router.locale)

  const changeLanguage = newLocale => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
    setShowlang(false)
  }

  useEffect(() => {
    if (router.locale !== locale) {
      setLocale(router.locale) // Update the locale state when the router locale changes
      window.location.reload()
    }
  }, [router.locale])
  return (
    <div
      className={` ${
        scrollPosition > 720 ? 'header-container sticky' : 'header-container'
      } `}
    >
      <MediaQuery minWidth={992}>
        <div className="part1">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Link href="/">
              <Image src="/logo.png" width={49} height={49} />
            </Link>
          </div>
          <div className="Menue">
            <Link href="/">
              {router.locale === 'fa' ? 'صفحه اصلی' : 'Home'}
              <span />
            </Link>
            <Link href="/services">
              {router.locale === 'fa' ? 'خدمات' : 'Services'}
              <span />
            </Link>
            <Link href="/beforafter">
              {router.locale === 'fa' ? 'قبل و بعد' : 'Before & After'}
              <span />
            </Link>

            <Link href="/cases">
              <div className="dash" />
              {router.locale === 'fa' ? 'کیس ها' : 'Cases'}
            </Link>

            <Link href="/blog">
              {router.locale === 'fa' ? 'وبلاگ' : 'Blog'}
              <span />
            </Link>
            <Link href="/about">
              {router.locale === 'fa' ? 'درباره ما' : 'About Us'}
              <span />
            </Link>
            <Link href="/contact">
              {router.locale === 'fa' ? 'تماس با ما' : 'Contact Us'}
              <span />
            </Link>
          </div>
        </div>
        <div className="part-container">
          <div className="part2">
            <Link href="/contact">
              <div className="Booking">
                {router.locale === 'fa' ? 'همین حالا رزرو کنید' : 'Book Now'}
              </div>
            </Link>
          </div>
          <div className="part3">
            <div className="lang-flags">
              <div className="nav-item smooth-menu">
                <div className="col-lg-3 lang-button-mob">
                  <div className="dropdown">
                    <div
                      id="langbuttton"
                      type="button"
                      className="dropbtn"
                      onClick={() => setShowlang(prevShow => !prevShow)}
                    >
                      <span className="mr-1 ml-1">
                        {locale === 'fa' ? 'Farsi' : 'English'}
                      </span>
                      <Image src="/whitedown.png" width={14} height={8} />
                    </div>
                    <div
                      id="myDropdown"
                      className={`dropdown-content ${showLang ? 'show' : ''}`}
                    >
                      <a
                        className="items-of-count"
                        role="button"
                        tabIndex={0}
                        onClick={() => changeLanguage('fa')}
                        onKeyDown={() => changeLanguage('fa')}
                      >
                        <div className="title-of-lang">Farsi</div>
                      </a>
                      <a
                        className="items-of-count"
                        role="button"
                        tabIndex={0}
                        onClick={() => changeLanguage('en')}
                        onKeyDown={() => changeLanguage('en')}
                      >
                        <div className="title-of-lang">English</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={991}>
        <div className="part1">
          <div className="logo">
            <Image src="/logo.png" width={49} height={49} />
          </div>
        </div>
        <div className="part2">
          <div className="Burgure-menue">
            <div
              className={`button button-default ${show ? 'open ' : ''}`}
              onClick={() => setShow(!show)}
              style={{ background: 'none', border: 'bone' }}
            >
              <Image src="/logo/Menu Contact.png" width={40} height={10} />
            </div>
          </div>
        </div>
        <div className={`Burgure-menue-page-content ${show ? 'open ' : ''}`}>
          <div
            className={` ${
              scrollPosition > 720
                ? 'header-container burgure sticky '
                : 'header-container burgure'
            } `}
          >
            <div className="part1">
              <div className="logo">
                <Image src="/logo.png" width={49} height={49} />
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '-10px',
              }}
            >
              <div className="part3">
                <div className="lang-flags">
                  <div className="nav-item smooth-menu">
                    <div className="col-lg-3 lang-button-mob">
                      <div className="dropdown">
                        <div
                          id="langbuttton"
                          type="button"
                          className="dropbtn"
                          onClick={() => setShowlang(!showLang)}
                        >
                          <span className="mr-1 ml-1">
                            {locale === 'fa' ? 'Farsi' : 'English'}
                          </span>
                          <Image src="/whitedown.png" width={14} height={8} />
                        </div>
                        <div
                          id="myDropdown"
                          className={`dropdown-content ${showLang ? 'show' : ''}`}
                        >
                          <a
                            className="items-of-count"
                            role="button"
                            tabIndex={0}
                            onClick={() => changeLanguage('fa')}
                            onKeyDown={() => changeLanguage('fa')}
                          >
                            <div className="title-of-lang">Farsi</div>
                          </a>
                          <a
                            className="items-of-count"
                            role="button"
                            tabIndex={0}
                            onClick={() => changeLanguage('en')}
                            onKeyDown={() => changeLanguage('en')}
                          >
                            <div className="title-of-lang">English</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Burgure-menue">
                <div
                  className={`button button-default ${show ? 'open ' : ''}`}
                  onClick={() => setShow(!show)}
                  style={{ background: 'none', border: 'bone' }}
                >
                  <Image src="/logo/Menu Contact.png" width={40} height={10} />
                </div>
              </div>
            </div>
          </div>
          <div className="Menue">
            <p>{router.locale === 'fa' ? 'منو' : 'Menu'}</p>
            <div className="UnderlINE" />
            <Link href="/">
              {router.locale === 'fa' ? 'صفحه اصلی' : 'Home'}
              <span />
            </Link>
            <Link href="/services">
              {router.locale === 'fa' ? 'خدمات' : 'Services'}
              <span />
            </Link>
            <Link href="/beforafter">
              {router.locale === 'fa' ? 'قبل و بعد' : 'Before & After'}
              <span />
            </Link>
            <Link href="/cases">
              <div className="dash" />
              {router.locale === 'fa' ? 'کیس ها' : 'Cases'}
            </Link>
            ظ
            <Link href="/blog">
              {router.locale === 'fa' ? 'وبلاگ' : 'Blog'}
              <span />
            </Link>
            <Link href="/about">
              {router.locale === 'fa' ? 'درباره ما' : 'About Us'}
              <span />
            </Link>
            <Link href="/contact">
              {router.locale === 'fa' ? 'تماس با ما' : 'Contact Us'}
              <span />
            </Link>
          </div>

          <div
            className="treatment-container  container"
            style={{ marginTop: '0px', textAlign: 'center' }}
          >
            <h5 style={{ fontWeight: '900' }}>
              {router.locale === 'fa'
                ? 'مرا در شبکه‌های اجتماعی دنبال کنید'
                : 'Follow me on Socials'}
            </h5>
            <div className="iconContainer">
              {[
                {
                  icon: '/linkedin.png',
                  title: router.locale === 'fa' ? 'لینکدین' : 'LinkedIn',
                  Link: 'https://www.linkedin.com/company/drebadian',
                },
                {
                  icon: '/Instagram.png',
                  title: router.locale === 'fa' ? 'اینستاگرام' : 'Instagram',
                  Link: 'https://www.instagram.com/drebadian',
                },
                {
                  icon: '/Xapp.png',
                  title: router.locale === 'fa' ? 'اکس' : 'X',
                },
              ].map((item, index) => (
                <div key={index} className="iconItem">
                  <a href={item.Link}>
                    {' '}
                    <div className="iconImage headerIcon">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={18}
                        height={18}
                      />
                    </div>
                    <h3>{item.title}</h3>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MediaQuery>
    </div>
  )
}
export default Header
