/* eslint-disable react/no-array-index-key */
import React from 'react'
import Link from 'next/link'
// Componenet
import CommonLayout from 'layouts/CommonLayout'
import Image from 'next/image'
import Title from 'Component/Tile/Title'
import { useRouter } from 'next/router'

const About = () => {
  const listItems = [
    'ایمپلنت‌های دندانی و پروتزهای فیکس: استفاده از تکنیک‌های پیشرفته برای جایگزینی دندان‌های از دست رفته با ایمپلنت‌های با کیفیت و پروتزهای ثابت.',
    'بیومیمیک دندان: استفاده از متدهای بیومیمیک برای بازسازی طبیعی و هماهنگ دندان‌ها با ساختار طبیعی دهان، مناسب برای تمامی سنین به ویژه بزرگسالان.',
    'زیباسازی فک و دهان: ارائه روش‌های مدرن زیباسازی از جمله ونیرهای زیبایی برای بهبود ظاهر کلی فک و دهان.',
    'انواع لمینیت: استفاده از لمینیت‌های پیشرفته برای بهبود ظاهر دندان‌ها و ایجاد لبخندی زیبا.',
    'لیفتینگ لثه: استفاده از تکنیک‌های لیفتینگ لثه برای بهبود ظاهر لثه‌ها و ایجاد لبخندی هماهنگ‌تر.',
    'بهبود فانکشن دهان و دندان: ارائه راهکارهای پیشرفته برای بهبود عملکرد دهان و دندان، شامل اصلاح بایت و ترمیم‌های تخصصی.',
  ]
  const router = useRouter()
  return (
    <CommonLayout
      parentRoute="/"
      mobileImage="/mobilebefor.png"
      desktopImage="/desktopbefor.png"
      title={router.locale === 'fa' ? 'درباره' : 'About'}
      parent={router.locale === 'fa' ? 'خانه' : 'Home'}
    >
      <div>
        <div className="HomeAbout-container  container">
          <div className="row" style={{ height: '100%' }}>
            <div className="col-lg-5 col-md-4 col-sm-12 HomeAbout-image">
              <Image src="/Picabout.png" layout="fill" />
            </div>
            <div className="col-lg-7 col-md-8 col-sm-12 HomeAbout-text mt-5 p-5">
              <h6>
                {router.locale === 'fa'
                  ? 'دکتر محمدتقی عبادیان'
                  : 'Dr. Mohammad Taghi Ebadian'}
              </h6>
              {router.locale === 'fa' ? (
                <>
                  <p>
                    {' '}
                    دکتر محمد تقی عبادیان یکی از جراحان و دندانپزشکان برجسته با
                    بیش از 20 سال سابقه کاری در زمینه دندانپزشکی و ایمپلنت‌های
                    دندانی است. او دارای مدرک مستر در ایمپلنت‌های دندانی از
                    دانشگاه مونستر آلمان می‌باشد. تخصص او در زمینه ایمپلنت‌های
                    دندانی، دندانپزشکی زیبایی و جراحی‌های دهان و دندان است .
                    دکتر عبادیان با بهره‌گیری از تکنولوژی‌های پیشرفته و روش‌های
                    نوین درمانی، خدمات متنوعی ارائه می‌دهد که شامل جراحی‌های
                    دندان، ترمیم و زیباسازی دندان‌ها، و مشاوره‌های تخصصی در
                    زمینه بهداشت دهان و دندان می‌شود. برخی از خدمات نوین ایشان
                    عبارتند از:
                  </p>
                  <ul>
                    {listItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <p>
                  The prevalent approach in dental clinics around the world,
                  including Iran, has traditionally been need-based. This
                  approach addresses only the pain, tooth decay, gum and oral
                  infections, and visible abnormalities that patients complain
                  about. However, a new patient-centered perspective on dental
                  treatment is emerging. This approach considers the issue from
                  the patient’s point of view and seeks to improve their desired
                  conditions, such as their quality of life. The primary goal of
                  this new scientific approach to treatment is to maintain the
                  proper and natural function of the dental and oral components
                  over time and with age. As a result, it can fulfill one of the
                  most significant desires of patients visiting dental clinics
                  today, which is achieving freshness, vitality, and facial
                  beauty.
                </p>
              )}
              <div className="HomeAbout-button">
                <div className="exprience">
                  {router.locale === 'fa'
                    ? '۲۰ سال تجربه'
                    : '20 years of experience'}
                </div>
                <Image src="/signiture.png" width={196} height={78} />
              </div>
            </div>
          </div>
        </div>
        <div className="treatment-container container about">
          <Title
            title={
              router.locale === 'fa'
                ? 'توضیح فرآیند درمان'
                : 'EXPLAINING THE TREATMENT PROCESS'
            }
          />

          <div className="iconContainer container row">
            <div className="iconItem col-lg-3 col-md-6 col-sm-12">
              <div className="iconImage">
                <Image src="/Teeth.png" width={48} height={48} />
              </div>
              <h3>
                {router.locale === 'fa'
                  ? 'برنامه‌ریزی درمان'
                  : 'Treatment Planning'}
              </h3>

              <ul>
                {router.locale === 'fa' ? (
                  <>
                    <li>معاینه</li>
                    <li>تصویربرداری</li>
                    <li>تشخیص</li>
                    <li>برنامه درمانی</li>
                  </>
                ) : (
                  <>
                    <li>Examination</li>
                    <li>Imaging</li>
                    <li>Diagnosis</li>
                    <li>Treatment Plan</li>
                  </>
                )}
              </ul>
            </div>
            <div className="iconItem col-lg-3 col-md-6 col-sm-12">
              <div className="iconImage">
                <Image src="/shield.png" width={48} height={48} />
              </div>
              <h3>{router.locale === 'fa' ? 'آمادگی' : 'Preparation'}</h3>

              <ul>
                {router.locale === 'fa' ? (
                  <>
                    <li>تمیزکاری</li>
                    <li>بی‌حسی</li>
                    <li>آماده‌سازی دندان/لثه</li>
                    <li>برداشتن پوسیدگی/پرکردگی قدیمی</li>
                  </>
                ) : (
                  <>
                    <li>Cleaning</li>
                    <li>Anesthesia</li>
                    <li>Teeth/Gum Prep</li>
                    <li>Decay/Old Filling Removal</li>
                  </>
                )}
              </ul>
            </div>

            <div className="iconItem col-lg-3 col-md-6 col-sm-12">
              <div className="iconImage">
                <Image src="/horse.png" width={48} height={48} />
              </div>
              <h3>{router.locale === 'fa' ? 'درمان' : 'Treatment'}</h3>

              <ul>
                {router.locale === 'fa' ? (
                  <>
                    <li>روش درمانی</li>
                    <li>تنظیمات</li>
                    <li>ترمیم‌های موقت</li>
                    <li>دستورالعمل‌های پس از درمان</li>
                  </>
                ) : (
                  <>
                    <li>Procedure</li>
                    <li>Adjustments</li>
                    <li>Temporary Restorations</li>
                    <li>Post-Care Instructions</li>
                  </>
                )}
              </ul>
            </div>

            <div className="iconItem col-lg-3 col-md-6 col-sm-12">
              <div className="iconImage">
                <Image src="/Chat.png" width={48} height={48} />
              </div>
              <h3>{router.locale === 'fa' ? 'پیگیری' : 'Follow-up'}</h3>

              <ul>
                {router.locale === 'fa' ? (
                  <>
                    <li>معاینات</li>
                    <li>تنظیمات نهایی</li>
                    <li>دستورالعمل‌های بهداشت</li>
                    <li>بازدیدهای منظم</li>
                  </>
                ) : (
                  <>
                    <li>Check-ups</li>
                    <li>Final Adjustments</li>
                    <li>Hygiene Instructions</li>
                    <li>Regular Visits</li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="contactAbout">
            <span />
            <div className="input">
              <p>
                {router.locale === 'fa'
                  ? 'برای لبخندی زیبا و سالم، با ما در تماس باشید!      '
                  : 'Leave your dental care to me'}
              </p>
            </div>

            <Link
              href="/contact"
              type="submit"
              style={{
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {router.locale === 'fa' ? 'تماس با من' : 'CONTACT ME'}
            </Link>
          </div>
        </div>
      </div>
    </CommonLayout>
  )
}
export default About
