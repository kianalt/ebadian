import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter()

  return (
    <footer>
      <div className="footer-container">
        <div className="row part-1">
          <div className="footer-logo col-lg-3">
            <Image src="/footer-Imag.png" layout="fill" />
          </div>
          <div className="footer-explanation col-lg-4">
            {router.locale === 'fa' ? (
              <>
                <h3>دکتر محمدتقی عبادیان</h3>
                <p>
                  دکتر محمدتقی عبادیان یک دندانپزشک برجسته و جراح ایمپلنت با
                  مدرک کارشناسی ارشد ایمپلنت دندان از دانشگاه مونستر آلمان است.
                  او در دندانپزشکی زیبایی و جراحی‌های مختلف دندان تخصص دارد و به
                  عنوان یکی از متخصصین پیشرو در زمینه خود شناخته می‌شود. دکتر
                  عبادیان تجربیات گسترده خود را از طریق مصاحبه‌های متعدد با
                  رسانه‌ها، از جمله با جام‌جم، به اشتراک گذاشته است.
                </p>
              </>
            ) : (
              <>
                <h3>Dr. Mohammad Taghi Ebadian</h3>
                <p>
                  Dr. Mohammad Taghi Ebadian is a distinguished dentist and
                  implant surgeon with a Master&rsquo;s degree in Dental
                  Implants from the University of Münster, Germany. Specializing
                  in cosmetic dentistry and various dental surgeries, he is
                  recognized as a leading specialist in his field. Dr. Ebadian
                  has shared his extensive experiences through numerous media
                  interviews, including with Jam-e-Jam.
                </p>
              </>
            )}
          </div>
          <div className="footer-explore col-lg-2">
            {router.locale === 'fa' ? <h3> صفحات</h3> : <h3>Explore</h3>}
            <ul>
              <li>
                <Link href="/">
                  <div className="dash" />
                  {router.locale === 'fa' ? 'صفحه اصلی' : 'Home'}
                </Link>
              </li>
              <li>
                <Link href="/service">
                  <div className="dash" />
                  {router.locale === 'fa' ? 'خدمات' : 'Services'}
                </Link>
              </li>
              <li>
                <Link href="/beforafter">
                  <div className="dash" />
                  {router.locale === 'fa' ? 'قبل و بعد' : 'Before & After'}
                </Link>
              </li>
              <li>
                <Link href="/cases">
                  <div className="dash" />
                  {router.locale === 'fa' ? 'کیس ها' : 'Cases'}
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <div className="dash" />
                  {router.locale === 'fa' ? 'وبلاگ' : 'Blog'}
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <div className="dash" />
                  {router.locale === 'fa' ? 'درباره ما' : 'About Us'}
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div className="dash" />
                  {router.locale === 'fa' ? 'تماس با ما' : 'Contact Us'}
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-contact col-lg-3">
            {router.locale === 'fa' ? (
              <h3>تماس بگیرید</h3>
            ) : (
              <h3>Get in touch</h3>
            )}

            <ul>
              <li>
                <a href="#">
                  <Image src="/location.png" layout="fill" />
                  {router.locale === 'fa' ? (
                    <p>جردن - خیابان آفریقا - ناهید شرقی - پلاک ۱۲ - واحد ۳</p>
                  ) : (
                    <p>Jordan - Africa Street - Nahid East - No. 12 - Unit 3</p>
                  )}
                </a>
              </li>
              <li>
                <a href="tel:9844115522">
                  <Image src="/phone.png" layout="fill" />
                  {router.locale === 'fa' ? (
                    <p>+۹۸ ۴۴۱۱۵۵۲۲</p>
                  ) : (
                    <p>+98 44115522</p>
                  )}
                </a>
              </li>
              <li>
                <a href="mailto:info@drebadian.com">
                  <Image src="/mail.png" layout="fill" />
                  <p>info@drebadian.com</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyRight">
          {router.locale === 'fa' ? (
            <p> تمامی حقوق توسط کلینیک‌ دکتر عبادیان محفوظ است © ۲۰۲۴</p>
          ) : (
            <p>© 2024 All rights reserved by Dr. Ebadian Clinics</p>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
